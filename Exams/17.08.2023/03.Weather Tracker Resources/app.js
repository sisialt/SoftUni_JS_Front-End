const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButtonElement = document.getElementById('load-history');
const listDivElement = document.getElementById('list');
const addButtonElement = document.getElementById('add-weather');
const editButtonElement = document.getElementById('edit-weather');
const locationInputElement = document.getElementById('location');
const temperatureInputElement = document.getElementById('temperature');
const dateInputElement = document.getElementById('date');

loadButtonElement.addEventListener('click', loadEvent);
addButtonElement.addEventListener('click', addEvent);

function getInputData() {
    const location = locationInputElement.value;
    const temperature = temperatureInputElement.value;
    const date = dateInputElement.value;

    return { location, temperature, date };
}

function clearInputData() {
    locationInputElement.value = '';
    temperatureInputElement.value = '';
    dateInputElement.value = '';
}

async function loadEvent() {
    const resp = await fetch(baseUrl);
    const data = await resp.json();

    listDivElement.innerHTML = '';

    for (const record of Object.values(data)) {
        createRecord(record);
    }
}

async function addEvent() {
    const record = getInputData();

    const resp = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(record)
    })

    clearInputData();

    loadEvent();
}

function createRecord(record) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.addEventListener('click', () => {
        containerDivElement.remove();

        locationInputElement.value = record.location;
        temperatureInputElement.value = record.temperature;
        dateInputElement.value = record.date;

        editButtonElement.disabled = false;
        addButtonElement.setAttribute('disabled', 'disabled');
    })

    editButtonElement.addEventListener('click', async () => { // take the new data
        const editedRecord = getInputData();
        editedRecord['_id'] = record._id;

        const resp = await fetch(`${baseUrl}/${record._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedRecord)
        })

        loadEvent();
        //clearInputData();
        editButtonElement.setAttribute('disabled', 'disabled');
        addButtonElement.disabled = false;
    })

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.addEventListener('click', async () => {
        const resp = await fetch(`${baseUrl}/${record._id}`, {
            method: 'DELETE'
        })

        containerDivElement.remove();
        loadEvent();
    })

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    const locationH2Element = document.createElement('h2');
    locationH2Element.textContent = record.location;

    const dateH3Element = document.createElement('h3');
    dateH3Element.textContent = record.date;

    const temperatureH3Element = document.createElement('h3');
    temperatureH3Element.textContent = record.temperature;
    temperatureH3Element.setAttribute('id', 'celsius');

    const containerDivElement = document.createElement('div');
    containerDivElement.classList.add('container');
    containerDivElement.appendChild(locationH2Element);
    containerDivElement.appendChild(dateH3Element);
    containerDivElement.appendChild(temperatureH3Element);
    containerDivElement.appendChild(buttonsDivElement);

    listDivElement.appendChild(containerDivElement);    
}
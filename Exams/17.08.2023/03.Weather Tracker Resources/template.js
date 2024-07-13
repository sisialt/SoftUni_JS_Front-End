const baseUrl = '';

const loadButtonElement = document.getElementById('');
const listDivElement = document.getElementById('');
const addButtonElement = document.getElementById('');
const editButtonElement = document.getElementById('');
const InputElement = document.getElementById('');
const InputElement = document.getElementById('');
const InputElement = document.getElementById('');

loadButtonElement.addEventListener('click', loadEvent);
addButtonElement.addEventListener('click', addEvent);

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
    changeButtonElement.textContent = '';
    changeButtonElement.classList.add('');
    changeButtonElement.addEventListener('click', () => {
        containerDivElement.remove();

        InputElement.value = record.;
        InputElement.value = record.;
        InputElement.value = record.;

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
    deleteButtonElement.textContent = '';
    deleteButtonElement.classList.add('');
    deleteButtonElement.addEventListener('click', async () => {
        const resp = await fetch(`${baseUrl}/${record._id}`, {
            method: 'DELETE'
        })

        containerDivElement.remove();
        loadEvent();
    })

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    const locationH2Element = document.createElement('h2');
    locationH2Element.textContent = record.;

    const dateH3Element = document.createElement('h3');
    dateH3Element.textContent = record.;

    const temperatureH3Element = document.createElement('h3');
    temperatureH3Element.textContent = record.t;
    //temperatureH3Element.setAttribute('id', 'celsius');

    const containerDivElement = document.createElement('div');
    containerDivElement.classList.add('');
    containerDivElement.appendChild(locationH2Element);
    containerDivElement.appendChild(dateH3Element);
    containerDivElement.appendChild(temperatureH3Element);
    containerDivElement.appendChild(buttonsDivElement);

    listDivElement.appendChild(containerDivElement);    
}

function getInputData() {
    const l = InputElement.value;
    const t = InputElement.value;
    const d = InputElement.value;

    return { l, t, d };
}

function clearInputData() {
    InputElement.value = '';
    InputElement.value = '';
    InputElement.value = '';
}
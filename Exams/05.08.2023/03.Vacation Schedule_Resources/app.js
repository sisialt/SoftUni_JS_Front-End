const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadButtonElement = document.getElementById('load-vacations');
const listDivElement = document.getElementById('list');
const addButtonElement = document.getElementById('add-vacation');
const editButtonElement = document.getElementById('edit-vacation');
const nameInputElement = document.getElementById('name');
const numDaysInputElement = document.getElementById('num-days');
const fromDateInputElement = document.getElementById('from-date');

loadButtonElement.addEventListener('click', loadEvent);
addButtonElement.addEventListener('click', addEvent);

async function loadEvent() {
    const resp = await fetch(baseUrl);
    const data = await resp.json();

    listDivElement.innerHTML = '';

    for (const record of Object.values(data)) {
        createRecord(record);
    }

    editButtonElement.setAttribute('disabled', 'disabled');
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

    if (!resp.ok) {
        return;
    }

    clearInputData();
    loadEvent();
}

function createRecord(record) {
    const nameH2Element = document.createElement('h2');
    nameH2Element.textContent = record.name;

    const dateH3Element = document.createElement('h3');
    dateH3Element.textContent = record.date;

    const daysH3Element = document.createElement('h3');
    daysH3Element.textContent = record.days;

    const changeButtonElement = document.createElement('button');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.classList.add('change-btn');

    const doneButtonElement = document.createElement('button');
    doneButtonElement.textContent = 'Done';
    doneButtonElement.classList.add('done-btn');

    const containerDivElement = document.createElement('div');
    containerDivElement.classList.add('container');
    containerDivElement.appendChild(nameH2Element);
    containerDivElement.appendChild(dateH3Element);
    containerDivElement.appendChild(daysH3Element);
    containerDivElement.appendChild(changeButtonElement);
    containerDivElement.appendChild(doneButtonElement);

    listDivElement.appendChild(containerDivElement);   

    changeButtonElement.addEventListener('click', () => {
        containerDivElement.remove();

        nameInputElement.value = record.name;
        numDaysInputElement.value = record.days;
        fromDateInputElement.value = record.date;

        editButtonElement.disabled = false;
        addButtonElement.setAttribute('disabled', 'disabled');
    })

    editButtonElement.addEventListener('click', async () => {
        const editedRecord = getInputData();
        editedRecord['_id'] = record._id;

        const resp = await fetch(`${baseUrl}/${record._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedRecord)
        })

        if (!resp.ok) {
            return;
        }

        loadEvent();
        //clearInputData();
        editButtonElement.setAttribute('disabled', 'disabled');
        addButtonElement.disabled = false;
    })

    doneButtonElement.addEventListener('click', async () => {
        const resp = await fetch(`${baseUrl}/${record._id}`, {
            method: 'DELETE'
        })

        containerDivElement.remove();
        loadEvent();
    })
}

function getInputData() {
    const name = nameInputElement.value;
    const days = numDaysInputElement.value;
    const date = fromDateInputElement.value;

    return { name, days, date };
}

function clearInputData() {
    InputElement.value = '';
    InputElement.value = '';
    InputElement.value = '';
}
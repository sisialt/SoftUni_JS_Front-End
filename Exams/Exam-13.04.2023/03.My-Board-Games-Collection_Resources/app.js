const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadButtonElement = document.getElementById('load-games');
const gamesListDivElement = document.getElementById('games-list');
const addButtonElement = document.getElementById('add-game');
const editButtonElement = document.getElementById('edit-game');
const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');

loadButtonElement.addEventListener('click', loadEvent);
addButtonElement.addEventListener('click', addEvent);

async function loadEvent() {
    const resp = await fetch(baseUrl);
    const data = await resp.json();

    gamesListDivElement.innerHTML = '';

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
    });

    if (!resp.ok) {
        return;
    }

    loadEvent();
    clearInputData();
}

function createRecord(record) {
    const namePElement = document.createElement('p');
    namePElement.textContent = record.name;

    const playersPElement = document.createElement('p');
    playersPElement.textContent = record.players;

    const typePElement = document.createElement('p');
    typePElement.textContent = record.type;

    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(namePElement);
    contentDivElement.appendChild(playersPElement);
    contentDivElement.appendChild(typePElement);

    const changeButtonElement = document.createElement('button');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.classList.add('change-btn');

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.classList.add('delete-btn');

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    const boardGameDivElement = document.createElement('div');
    boardGameDivElement.classList.add('board-game');
    boardGameDivElement.appendChild(contentDivElement);
    boardGameDivElement.appendChild(buttonsDivElement);

    gamesListDivElement.appendChild(boardGameDivElement);

    editButtonElement.setAttribute('disabled', 'disabled');

    changeButtonElement.addEventListener('click', () => {
        boardGameDivElement.remove();

        nameInputElement.value = record.name;
        playersInputElement.value = record.players;
        typeInputElement.value = record.type;

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
        });

        if (!resp.ok) {
            return;
        }

        loadEvent();
        clearInputData();

        editButtonElement.setAttribute('disabled', 'disabled');
        addButtonElement.disabled = false;
    });

     deleteButtonElement.addEventListener('click', async () => {
        const resp = await fetch(`${baseUrl}/${record._id}`, {
            method: 'DELETE'
        });

        boardGameDivElement.remove();
        loadEvent();
    });
}

function getInputData() {
    const name = nameInputElement.value;
    const type = typeInputElement.value;
    const players = playersInputElement.value;

    return { name, type, players };
}

function clearInputData() {
    nameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
}
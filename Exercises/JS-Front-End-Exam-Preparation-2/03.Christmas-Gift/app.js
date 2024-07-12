const baseUrl = 'http://localhost:3030/jsonstore/gifts';

let presentToChangeID = null;

const loadButtonElement = document.getElementById('load-presents');
const giftListElement = document.getElementById('gift-list');
const addPresentButtonElement = document.getElementById('add-present');
const editPresentButtonElement = document.getElementById('edit-present');
const giftInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');


loadButtonElement.addEventListener('click', loadEvent);
addPresentButtonElement.addEventListener('click', addEvent);
editPresentButtonElement.addEventListener('click', editEvent);

function getInputData() {
    return {
        gift: giftInputElement.value,
        for: forInputElement.value,
        price: priceInputElement.value
    }
}

function clearInputData() {
    giftInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}

async function addEvent() {
    const task = getInputData();

    const resp = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    if (!resp.ok) {
        return;
    }

    loadEvent();
    clearInputData();
}

async function loadEvent() {
    giftListElement.innerHTML = '';

    const resp = await fetch(baseUrl);
    const data = await resp.json();

    for (const task of Object.values(data)) {
        createPresent(task);
    }
}

async function editEvent() {
    const task = getInputData();

    const resp = await fetch(`${baseUrl}/${presentToChangeID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            gift: task.gift,
            for: task.for,
            price: task.price,
            _id: presentToChangeID
        })
    })

    if (!resp.ok) {
        return
    }

    loadEvent();
    clearInputData();

    editPresentButtonElement.disabled = 'disabled';
    addPresentButtonElement.disabled = false;

    presentToChangeID = null;
}

function createPresent(task) {
    const giftPElement = document.createElement('p');
    giftPElement.textContent = task.gift;

    const forPElement = document.createElement('p');
    forPElement.textContent = task.for;

    const pricePElement = document.createElement('p');
    pricePElement.textContent = task.price;

    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(giftPElement);
    contentDivElement.appendChild(forPElement);
    contentDivElement.appendChild(pricePElement);

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

    const giftSockDivElement = document.createElement('div');
    giftSockDivElement.classList.add('gift-sock');
    giftSockDivElement.appendChild(contentDivElement);
    giftSockDivElement.appendChild(buttonsDivElement);

    giftListElement.appendChild(giftSockDivElement);

    changeButtonElement.addEventListener('click', () => {
        giftSockDivElement.remove();

        giftInputElement.value = task.gift;
        forInputElement.value = task.for;
        priceInputElement.value = task.price;

        editPresentButtonElement.disabled = false;
        addPresentButtonElement.disabled = 'disabled';

        presentToChangeID = task._id;
    })

    deleteButtonElement.addEventListener('click', async () => {
        await fetch(`${baseUrl}/${task._id}`, {
            method: 'DELETE'
        })

        giftSockDivElement.remove();

        loadEvent();
    })
}
window.addEventListener("load", solve);

function solve() {
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');
    const addButtonElement = document.getElementById('add-btn');
    const taskListElement = document.getElementById('task-list');
    const doneListElement = document.getElementById('done-list');

    addButtonElement.addEventListener('click', () => {
        const [ place, action, person ] = getInputInfo();

        if (!place || !action || !person) {
            return;
        }

        const placePElement = document.createElement('p');
        placePElement.textContent = `Place:${place}`;

        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action:${action}`;

        const personPElement = document.createElement('p');
        personPElement.textContent = `Person:${person}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.textContent = 'Edit';
        editButtonElement.classList.add('edit');
        editButtonElement.addEventListener('click', () => {
            placeInputElement.value = place;
            personInputElement.value = person;
            actionInputElement.value = action;

            cleanLiElement.remove()
            
        })

        const doneButtonElement = document.createElement('button');
        doneButtonElement.textContent = 'Done';
        doneButtonElement.classList.add('done');
        doneButtonElement.addEventListener('click', () => {
            cleanLiElement.removeChild(buttonsDivElement);

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';
            deleteButtonElement.addEventListener('click', () => {
                cleanLiElement.remove()
            })

            cleanLiElement.appendChild(deleteButtonElement);

            doneListElement.appendChild(cleanLiElement);
        })

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(doneButtonElement);

        const cleanLiElement = document.createElement('li');
        cleanLiElement.classList.add('clean-task');
        cleanLiElement.appendChild(articleElement);
        cleanLiElement.appendChild(buttonsDivElement);

        taskListElement.appendChild(cleanLiElement);

        clearInput();
    })
    
    function getInputInfo() {
        const place = placeInputElement.value;
        const action = actionInputElement.value;
        const person = personInputElement.value;

        return [ place, action, person ];
    }

    function clearInput() {
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
    }


}
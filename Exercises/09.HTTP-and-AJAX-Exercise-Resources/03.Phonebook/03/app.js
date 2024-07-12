function attachEvents() {
    const phonebookUlElement = document.getElementById('phonebook');
    const loadButtonElement = document.getElementById('btnLoad');
    const createButtonElement = document.getElementById('btnCreate');

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    loadButtonElement.addEventListener('click', loadEvent);
    createButtonElement.addEventListener('click', createEvent);

    async function loadEvent() {
        phonebookUlElement.innerHTML = '';

        const resp = await fetch(baseUrl);
        const data = await resp.json();

        for (const key of Object.keys(data)) {
            const newLiElement = document.createElement('li');
            newLiElement.textContent = `${data[key].person}: ${data[key].phone}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', deleteEvent)

            newLiElement.appendChild(deleteButton);
            phonebookUlElement.appendChild(newLiElement); 

            async function deleteEvent() {
                fetch(`${baseUrl}/${data[key]._id}`, {  //not working with fetch(`${baseUrl}/${key}
                    method: 'DELETE'
                })

                newLiElement.remove(); //forgot
            }
        }
    }

    async function createEvent() {
        const personInputElement = document.getElementById('person');
        const phoneInputElement = document.getElementById('phone');

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person: personInputElement.value,
                phone: phoneInputElement.value
              })          
        })
        loadEvent();
        personInputElement.value = '';
        phoneInputElement.value = '';
        
    }
}

attachEvents();
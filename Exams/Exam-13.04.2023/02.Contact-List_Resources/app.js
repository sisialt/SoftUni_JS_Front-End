window.addEventListener("load", solve);

function solve() {
    const nameInputElement = document.getElementById('name');
    const phoneInputElement = document.getElementById('phone');
    const categoryInputElement = document.getElementById('category');
    const addButtonElement = document.getElementById('add-btn');
    const checkListElement = document.getElementById('check-list');
    const contactListElement = document.getElementById('contact-list');

    addButtonElement.addEventListener('click', () => {
        const [ name, phone, category ] = getInputData();

        if (!name || !phone || !category) {
            return;
        }

        const namePElement = document.createElement('p');
        namePElement.textContent = `name:${name}`;

        const phonePElement = document.createElement('p');
        phonePElement.textContent = `phone:${phone}`;

        const categoryPElement = document.createElement('p');
        categoryPElement.textContent = `category:${category}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(namePElement);
        articleElement.appendChild(phonePElement);
        articleElement.appendChild(categoryPElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit-btn');

        editButtonElement.addEventListener('click', () => {
            nameInputElement.value = name;
            phoneInputElement.value = phone;
            categoryInputElement.value = category;
            
            liElement.remove();
        })

        const saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');

        saveButtonElement.addEventListener('click', () => {
            liElement.removeChild(buttonsDivElement);

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('del-btn');

            deleteButtonElement.addEventListener('click', () => {
                liElement.remove()
            })

            liElement.appendChild(deleteButtonElement);
            contactListElement.appendChild(liElement);
        })

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(saveButtonElement);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);

        checkListElement.appendChild(liElement);

        clearInputData();
    })
    
    function getInputData() {
        const name = nameInputElement.value;
        const phone = phoneInputElement.value;
        const category = categoryInputElement.value;

        return [ name, phone, category ];
    }

    function clearInputData() {
        nameInputElement.value = '';
        phoneInputElement.value = '';
        categoryInputElement.value = '';
    }
}
  
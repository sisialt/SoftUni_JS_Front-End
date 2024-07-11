function addItem() {
    const inputElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    const newLi = document.createElement('li');
    const newA = document.createElement('a');

    newLi.textContent = inputElement.value;
    ulElement.appendChild(newLi);

    newA.textContent = '[Delete]';
    newA.href = '#';
    newLi.appendChild(newA);

    newA.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    });

    inputElement.value = '';
}
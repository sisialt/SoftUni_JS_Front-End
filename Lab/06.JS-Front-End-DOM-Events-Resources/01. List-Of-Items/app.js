function addItem() {
    const inputElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');
    
    const inputText = inputElement.value;

    const newLi = document.createElement('li');

    newLi.textContent = inputText;
    ulElement.appendChild(newLi);

    inputElement.value = '';
}
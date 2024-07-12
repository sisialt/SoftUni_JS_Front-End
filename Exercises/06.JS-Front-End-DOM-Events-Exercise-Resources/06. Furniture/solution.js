function solve() {
    const inputTextareaElement = document.querySelector('textarea');
    const outputTextareaElement = document.querySelectorAll('textarea')[1];
    const generateButtonElement = document.querySelectorAll('button')[0];
    const buyButtonElement = document.querySelectorAll('button')[1];

    const paragraphElements = document.querySelectorAll('table tbody tr p');
    const tbodyElement = document.querySelector('table tbody');

    const currentObject = {};
    currentObject['img'] = document.querySelector('img').src;
    currentObject['name'] = paragraphElements[0].textContent;
    currentObject['price'] = Number(paragraphElements[1].textContent);
    currentObject['decFactor'] = Number(paragraphElements[2].textContent);

    const allObjects = [];
    allObjects.push(currentObject);

    generateButtonElement.addEventListener('click', generate);

    buyButtonElement.addEventListener('click', buy);

    function generate() {
        const objectsArr = JSON.parse(inputTextareaElement.value);

        allObjects.push(...objectsArr);

        for (const obj of objectsArr) {
            const newTrElement = document.createElement('tr');

            const newTdImgElement = document.createElement('td');
            const newTdNameElement = document.createElement('td');
            const newTdPriceElement = document.createElement('td');
            const newTdDecorationFactorElement = document.createElement('td');
            const newTdCheckboxElement = document.createElement('td');

            const newImgElement = document.createElement('img');
            newImgElement.setAttribute('src', obj['img']);

            newTdImgElement.appendChild(newImgElement);

            const newPNameElement = document.createElement('p');
            newPNameElement.textContent = obj['name'];

            newTdNameElement.appendChild(newPNameElement);

            const newPPriceElement = document.createElement('p');
            newPPriceElement.textContent = obj['price'];

            newTdPriceElement.appendChild(newPPriceElement);

            const newPDecFactorElement = document.createElement('p');
            newPDecFactorElement.textContent = obj['decFactor'];

            newTdDecorationFactorElement.appendChild(newPDecFactorElement);

            const newInputCheckboxElement = document.createElement('input');
            //newInputCheckboxElement.disabled = 'disabled';
            newInputCheckboxElement.type = 'checkbox';

            newTdCheckboxElement.appendChild(newInputCheckboxElement);

            newTrElement.appendChild(newTdImgElement);
            newTrElement.appendChild(newTdNameElement);
            newTrElement.appendChild(newTdPriceElement);
            newTrElement.appendChild(newTdDecorationFactorElement);
            newTrElement.appendChild(newTdCheckboxElement);

            tbodyElement.appendChild(newTrElement);
        }
    };

    function buy() {
        const checkboxElements = document.querySelectorAll('input[type=checkbox]');
        const boughtFurnitureObjectsList = [];
        let totalPrice = 0;
        let sumDecFactor = 0;

        for (const checkEl of checkboxElements) {
            if (checkEl.checked) {
                const obj = allObjects.find(o => o.name === checkEl.parentElement.parentElement.querySelector('p').textContent)
                boughtFurnitureObjectsList.push(obj);
                totalPrice += Number(obj.price);
                sumDecFactor += Number(obj.decFactor);
            }
        }

        /*for (const obj of allObjects) {
            console.log(obj)
            console.log(obj.checked)
            if (obj.checked) {
                boughtFurnitureObjectsList.push(obj);
                totalPrice += obj.price;
                sumDecFactor += obj.decFactor;
                console.log(totalPrice)
            }
        }*/

        const boughtFurniture = boughtFurnitureObjectsList
            .map(obj => obj.name)
            .join(', ')

        let result = `Bought furniture: ${boughtFurniture}`;

        result += `\nTotal price: ${totalPrice.toFixed(2)}`;

        result += `\nAverage decoration factor: ${sumDecFactor / boughtFurnitureObjectsList.length}`;

        outputTextareaElement.textContent = result;

    }

}
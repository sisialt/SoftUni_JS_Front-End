/*function extractText() {
    const elements = document.querySelectorAll('li');
    const areaElement = document.getElementById('result');
    
    for (const el of elements) {
        areaElement.textContent += `${el.textContent}\n`;
    };
}*/

function extractText() {
    const itemsElements = document.getElementById('items');
    const areaElement = document.getElementById('result');
    
    areaElement.value = itemsElements.textContent;
}

/*function extractText() {
    const elements = document.querySelectorAll('li');
    const areaElement = document.getElementById('result');

    const listContent = [];
    
    for (const el of elements) {
        listContent.push(el.textContent);
    };

    areaElement.textContent = listContent.join('\n');
}*/
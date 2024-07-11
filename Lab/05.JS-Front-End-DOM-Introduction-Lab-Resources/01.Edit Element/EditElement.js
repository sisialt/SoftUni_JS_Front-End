function editElement(element, stringMatch, replacer) {
    element.textContent = element.textContent.replace(new RegExp(stringMatch, 'g'), replacer);
}
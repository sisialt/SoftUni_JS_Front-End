function extract(content) {
    const contentElement = document.getElementById(content);
    const extractedElements = contentElement.textContent.matchAll(/\([a-zA-z ]+\)/g);

    const result = [];

    for (const el of extractedElements) {
        result.push(el[0].substring(1, el[0].length - 1))
    };

    return result.join('; ');
}
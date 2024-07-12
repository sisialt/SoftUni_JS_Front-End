function create(words) {
    const contentElement = document.getElementById('content');

    for (const word of words) {
        const divElement = document.createElement('div');
        const pElement = document.createElement('p');

        pElement.style.display = 'none';
        pElement.textContent = word;

        divElement.appendChild(pElement);

        divElement.addEventListener('click', () => {
            pElement.style.display = '';
        })

        contentElement.appendChild(divElement);
    }
}
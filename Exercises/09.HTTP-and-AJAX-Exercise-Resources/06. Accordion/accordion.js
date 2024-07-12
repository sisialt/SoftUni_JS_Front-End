const bodyElement = document.querySelector('body');
    const script = document.createElement('script');
    script.textContent = `window.onload = solution()`;
    bodyElement.appendChild(script);

function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const mainSectionElement = document.getElementById('main');

    loadData();

    async function loadData() {
        const resp = await fetch(baseUrl);
        const data = await resp.json();

        for (const article of data) {
            createArticle(article._id, article.title);
        }
    }

    async function createArticle(id, title) {
        const accordionDivElement = document.createElement('div');
        accordionDivElement.classList.add('accordion');

        const headDivElement = document.createElement('div');
        headDivElement.classList.add('head'); 

        const spanElement = document.createElement('span');
        spanElement.textContent = title;

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'More';
        buttonElement.classList.add('button');
        buttonElement.setAttribute('id', id);
        buttonElement.addEventListener('click', moreEvent);

        headDivElement.appendChild(spanElement);
        headDivElement.appendChild(buttonElement);

        const extraDivElement = document.createElement('div');
        extraDivElement.classList.add('extra');
        const pElement = document.createElement('p');

        extraDivElement.appendChild(pElement);

        accordionDivElement.appendChild(headDivElement);
        accordionDivElement.appendChild(extraDivElement);
        mainSectionElement.appendChild(accordionDivElement);

        async function moreEvent() {
            const articleURL = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
            const resp = await fetch(articleURL);
            const data = await resp.json();
    
            pElement.textContent = data.content;

            if (buttonElement.textContent === 'More') {
                extraDivElement.style.display = 'inline-block';
                buttonElement.textContent = 'Less';
            } else {
                extraDivElement.style.display = 'none';
                buttonElement.textContent = 'More';
            }
        }
    }
}
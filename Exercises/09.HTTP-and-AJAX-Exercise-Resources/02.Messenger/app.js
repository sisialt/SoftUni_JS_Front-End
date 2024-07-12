function attachEvents() {
    const messagesTextareaElement = document.getElementById('messages');
    const nameInputElement = document.querySelector('#controls input[name=author]');
    const messageInputElement = document.querySelector('#controls input[name=content]');
    const sendButtonElement = document.getElementById('submit');
    const refreshButtonElement = document.getElementById('refresh');

    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    sendButtonElement.addEventListener('click', () => {
        const name = nameInputElement.value;
        const message = messageInputElement.value;

        const obj = {
            author: name,
            content: message,
        };

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
    })

    refreshButtonElement.addEventListener('click', async () => {
        const resp = await fetch(baseUrl);
        const data = await resp.json();

        const result = [];

        for (const obj of Object.values(data)) {
            result.push(`${obj.author}: ${obj.content}`);
            messagesTextareaElement.textContent = result.join('\n');
        };
       
    });
}

attachEvents();
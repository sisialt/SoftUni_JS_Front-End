function encodeAndDecodeMessages() {
    const inputTextareaElement = document.querySelectorAll('#main textarea')[0];
    const outputTextareaElement = document.querySelectorAll('#main textarea')[1];
    const encodeButtonElement = document.querySelectorAll('#main button')[0];
    const decodeButtonElement = document.querySelectorAll('#main button')[1];

    encodeButtonElement.addEventListener('click', () => {
        const inputText = inputTextareaElement.value;
        let decodedMessage = '';
        
        for (let ch of Array.from(inputText)) {
            decodedMessage += String.fromCharCode(ch.charCodeAt(0) + 1);
        }

        outputTextareaElement.textContent = decodedMessage;
        inputTextareaElement.value = '';
    });

    decodeButtonElement.addEventListener('click', () => {
        const decodedMessage = outputTextareaElement.textContent;
        let message = '';

        for (let ch of Array.from(decodedMessage)) {
            message += String.fromCharCode(ch.charCodeAt(0) - 1);
        }

        outputTextareaElement.textContent = message;
    });
}

function focused() {
    const inputElements = document.querySelectorAll('input');

    for (const inputEL of inputElements) {
        inputEL.addEventListener('focus', () => {
            inputEL.parentElement.classList.add('focused');
        });

        inputEL.addEventListener('blur', () => {
            inputEL.parentElement.classList.remove('focused');
        });
    };
}
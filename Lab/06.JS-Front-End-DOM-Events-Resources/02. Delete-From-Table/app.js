function deleteByEmail() {
    const emailElement = document.querySelector('input[name=email]');
    const emailElements = document.querySelectorAll('tbody td:last-of-type')
    const resultElement = document.getElementById('result');

    const email = emailElement.value;

    let isFound = false;

    for (const emailEl of emailElements) {
        if (emailEl.textContent === email) {
            emailEl.parentElement.remove();
            resultElement.textContent = 'Deleted.'
            isFound = true;
        }
    }

    if (!isFound) {
        resultElement.textContent = 'Not found.'
    }
}
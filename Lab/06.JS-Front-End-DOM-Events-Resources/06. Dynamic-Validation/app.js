function validate() {
    const emailElement = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    emailElement.addEventListener('change', () => {
        if (!emailElement.value.match(pattern)) {  // (!pattern.test(emailElement.value))
            emailElement.classList.add('error');
        } else {
            emailElement.classList.remove('error');
        }
    })
}
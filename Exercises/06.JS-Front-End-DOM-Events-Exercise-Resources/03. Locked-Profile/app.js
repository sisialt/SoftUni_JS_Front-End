function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');

    for (const profileEl of profileElements) {
        const unlockElement = profileEl.querySelector('input[value=unlock]');
        const buttonElement = profileEl.querySelector('button')

        buttonElement.addEventListener('click', () => {
            if (unlockElement.checked) {
                if (buttonElement.textContent !== 'Hide it') {
                    profileEl.querySelector('div').style.display = 'block';
                    buttonElement.textContent = 'Hide it';
                } else {
                    profileEl.querySelector('div').style.display = 'none';
                    buttonElement.textContent = 'Show more';
                }
            }
        })
    }
}
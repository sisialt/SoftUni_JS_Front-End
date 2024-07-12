function attachEventsListeners() {
    const daysConvertButtonElement = document.getElementById('daysBtn');
    const hoursConvertButtonElement = document.getElementById('hoursBtn');
    const minutesConvertButtonElement = document.getElementById('minutesBtn');
    const secondsConvertButtonElement = document.getElementById('secondsBtn');

    const daysInputElement = document.getElementById('days');
    const hoursInputElement = document.getElementById('hours');
    const minutesInputElement = document.getElementById('minutes');
    const secondsInputElement = document.getElementById('seconds');

    daysConvertButtonElement.addEventListener('click', (event) => {
        const days = daysInputElement.value;

        hoursInputElement.value = days * 24;
        minutesInputElement.value = days * 1440;
        secondsInputElement.value = days * 86400;
    });

    hoursConvertButtonElement.addEventListener('click', (event) => {
        const hours = hoursInputElement.value;

        daysInputElement.value = hours / 24;
        minutesInputElement.value = hours * 60;
        secondsInputElement.value = hours * 3600;
    });

    minutesConvertButtonElement.addEventListener('click', (event) => {
        const minutes = minutesInputElement.value;

        daysInputElement.value = minutes / 1440;
        hoursInputElement.value = minutes / 60;
        secondsInputElement.value = minutes * 60;
    });

    secondsConvertButtonElement.addEventListener('click', (event) => {
        const seconds = secondsInputElement.value;

        daysInputElement.value = seconds / 86400;
        hoursInputElement.value = seconds / 3600;
        minutesInputElement.value = seconds / 60;
        
    });
}
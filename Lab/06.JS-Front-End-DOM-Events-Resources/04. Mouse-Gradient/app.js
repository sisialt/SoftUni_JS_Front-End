function attachGradientEvents() {
    const boxElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    boxElement.addEventListener('mousemove', (event) => {
        const currentMouseX = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress = Math.floor((currentMouseX / elementWidth) * 100);

        console.log(currentMouseX)
        console.log(elementWidth)

        resultElement.textContent = `${progress}%`;
    });
}
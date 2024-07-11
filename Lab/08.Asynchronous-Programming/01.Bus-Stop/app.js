function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    const stopIdElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');

    const stopId = stopIdElement.value;

    fetch(`${baseUrl}/${stopId}`)
        .then(res => res.json())
        .then(data => {
            busesElement.innerHTML = '';
            
            stopNameElement.textContent = data.name;

            for (const bus in data.buses) {
                const newLiElement = document.createElement('li');
                newLiElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
                busesElement.appendChild(newLiElement);
            };
        })
        .catch(() => {
            stopNameElement.textContent = 'Error';
        });
}
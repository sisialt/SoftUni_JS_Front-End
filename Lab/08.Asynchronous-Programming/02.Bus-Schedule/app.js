function solve() {
    const departButtonElement = document.getElementById('depart');
    const arriveButtonElement = document.getElementById('arrive');
    const infoElement = document.getElementById('info').querySelector('.info');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';

    let nextBusStopId = 'depot';
    let nextBusStopName = '';

    function depart() {
        departButtonElement.disabled = true;
        arriveButtonElement.disabled = false;

        fetch(`${baseUrl}/${nextBusStopId}`)
            .then(resp => resp.json())
            .then(data => {
                nextBusStopName = data.name;
                nextBusStopId = data.next;
                infoElement.textContent = `Next stop ${nextBusStopName}`;
            })
            .catch(err => {
                infoElement.textContent = "Error"
                departButtonElement.disabled = true
                arriveButtonElement.disabled = true
            })
    }

    async function arrive() {
        arriveButtonElement.disabled = true;
        departButtonElement.disabled = false;
        infoElement.textContent = `Arriving at ${nextBusStopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
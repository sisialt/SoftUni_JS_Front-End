function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';

    const locationInputElement = document.getElementById('location');
    const submitButtonElement = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');
    const upcomingElement = document.getElementById('upcoming');

    const weatherSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }

    submitButtonElement.addEventListener('click', () => {
        fetch(`${baseUrl}/locations`)
            .then(res => res.json())
            .then(locationData => {
                const { code } = locationData.find(location => location.name === locationInputElement.value)

                return Promise.all([
                    fetch(`${baseUrl}/today/${code}`),
                    fetch(`${baseUrl}/upcoming/${code}`),
                ]);
            })
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(([today, upcomming]) => {
                console.log(today);
                console.log(upcomming);
                forecastElement.style.display = 'block';

                const forecastsDivElement = document.createElement('div');
                forecastsDivElement.classList.add('forecasts');
                
                const symbolSpanElement = document.createElement('span');
                symbolSpanElement.classList.add('condition');
                symbolSpanElement.classList.add('symbol');
                symbolSpanElement.textContent = weatherSymbol[today.forecast.condition];

                const conditionSpan = document.createElement('span');
                conditionSpan.classList.add('condition');

                const innerSpanName = document.createElement('span');
                innerSpanName.classList.add('forecast-data');
                innerSpanName.textContent = `${today.name}`;

                const innerSpanDegrees = document.createElement('span');
                innerSpanDegrees.classList.add('forecast-data');
                innerSpanDegrees.textContent = `${today.forecast.low}${weatherSymbol['Degrees']}/${today.forecast.high}${weatherSymbol['Degrees']}`;

                const innerSpanWeather = document.createElement('span');
                innerSpanWeather.classList.add('forecast-data');
                innerSpanWeather.textContent = `${today.forecast.condition}`;

                conditionSpan.appendChild(innerSpanName);
                conditionSpan.appendChild(innerSpanDegrees);
                conditionSpan.appendChild(innerSpanWeather);

                forecastsDivElement.appendChild(symbolSpanElement);
                forecastsDivElement.appendChild(conditionSpan);

                currentElement.appendChild(forecastsDivElement);

                const forecastInfoDivElement = document.createElement('div');
                forecastInfoDivElement.classList.add('forecast-info');

                for (let i = 0; i < upcomming.forecast.length; i++) {
                    const upcomingSpanElement = document.createElement('span');
                    upcomingSpanElement.classList.add('upcoming');

                    const upcomingInnerSpanSymbol = document.createElement('span');
                    upcomingInnerSpanSymbol.classList.add('symbol');
                    upcomingInnerSpanSymbol.textContent = `${weatherSymbol[upcomming.forecast[i].condition]}`;

                    const upcomingInnerSpanDegrees = document.createElement('span');
                    upcomingInnerSpanDegrees.classList.add('forecast-data');
                    upcomingInnerSpanDegrees.textContent = `${upcomming.forecast[i].low}${weatherSymbol['Degrees']}/${upcomming.forecast[i].high}${weatherSymbol['Degrees']}`;

                    const upcomingInnerSpanWeather = document.createElement('span');
                    upcomingInnerSpanWeather.classList.add('forecast-data');
                    upcomingInnerSpanWeather.textContent = `${upcomming.forecast[i].condition}`;

                    upcomingSpanElement.appendChild(upcomingInnerSpanSymbol);
                    upcomingSpanElement.appendChild(upcomingInnerSpanDegrees);
                    upcomingSpanElement.appendChild(upcomingInnerSpanWeather);

                    forecastInfoDivElement.appendChild(upcomingSpanElement);
                }
                
                upcomingElement.appendChild(forecastInfoDivElement);
            })
    });

}

attachEvents();

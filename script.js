const locationForm = document.getElementById('location-form');
const locationInput = document.getElementById('location-input');
const locationButton = document.getElementById('location-button');
const weatherContainer = document.getElementById('weather-container');
const weatherData = document.getElementById('weather-data');
const weatherIcon = document.getElementById('weather-icon');
const icon = document.getElementById('icon');

const API_KEY = '373yjgjdT8RageDVGQL4RhmY3cUWTRV537';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

locationButton.addEventListener('click', (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();
    if (location) {
        fetch(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                const weather = data.weather[0];
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                weatherData.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>${weather.description}</p>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                `;
                icon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
                weatherIcon.appendChild(icon);
                weatherContainer.style.display = 'block';
            })
            .catch((error) => console.error(error));
    }
});
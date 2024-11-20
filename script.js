const apiKey = '5e41060df0cee728e5a559f75ad0747c'; // Replace with your OpenWeatherMap API key
const url = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('get-weather-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    fetchWeatherData(location);
});

async function fetchWeatherData(location) {
    const response = await fetch(`${url}?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    if (response.ok) {
        displayWeatherData(data);
    } else {
        alert('City not found. Please try again.');
    }
}

function displayWeatherData(data) {
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
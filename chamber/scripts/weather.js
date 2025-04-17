const weather = document.querySelector('#weather');
const forecast = document.querySelector('#forecast');
const apiKey = '78c78325394daa4ac34e4d52369b4045'; // Replace with your OpenWeatherMap API key
const city = 'Chitungwiza';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
async function fetchWeather() {
    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        displayWeather(weatherData);
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weather.innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
    }
}
function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const weatherHtml = `
        <h2>${data.name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${description}</p>
    `;
    weather.innerHTML = weatherHtml; // Display the current weather information
}
function displayForecast(data) {
    const today = new Date();
    const forecastDays = {};
    // Iterate through the forecast data
    data.list.forEach(item => {
        const forecastDate = new Date(item.dt * 1000);
        const dateString = forecastDate.toLocaleDateString();
        // Check if the forecast date is within the next three days
        if (forecastDate >= today && forecastDate < new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)) {
            // If the date is not already in the object, initialize it
            if (!forecastDays[dateString]) {
                forecastDays[dateString] = {
                    tempSum: 0,
                    count: 0,
                    description: item.weather[0].description // You can adjust how you want to aggregate descriptions
                };
            }
            // Sum the temperatures and count the entries for averaging later
            forecastDays[dateString].tempSum += item.main.temp;
            forecastDays[dateString].count += 1;
        }
    });
    // Create the forecast HTML
    const forecastHtml = Object.keys(forecastDays).map(date => {
        const avgTemp = (forecastDays[date].tempSum / forecastDays[date].count).toFixed(1); // Calculate average temperature
        const dayOfWeek = new Date(date).toLocaleString('en-US', { weekday: 'long' }); // Get the day of the week
        return `
            <div class="forecast-day">
                <h3>${dayOfWeek}, ${date}</h3>
                <p>Average Temperature: ${avgTemp}°C</p>
                <p>Weather: ${forecastDays[date].description}</p>
            </div>
        `;
    }).join('');
    forecast.innerHTML = forecastHtml; // Display the forecast information
}
// Fetch weather data when the page loads
window.addEventListener('load', fetchWeather);
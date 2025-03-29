const apiKey = '950b54f49d3044409e811422252903';
const city = 'Chitungwiza';
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
//get weather data
async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not avaliable');
        }
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error(error);
        document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
}
function displayWeather(data) {
    document.getElementById('city').textContent = data.location.name;
    document.getElementById('temp').textContent = data.current.temp_c;
    document.getElementById('weather-description').textContent = data.curent.condition.text;
}

window.onload = fetchWeather;
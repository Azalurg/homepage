import config from "./config.js";

const {icons} = config;
const latitude = 54.52;
const longitude = 18.53;
const api_endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,precipitation,weathercode`;

const weatherCodes = {
    0: ["sun", "moon"],
    1: ["cloud-sun", "cloud-moon"],
    2: ["cloud", "cloud"],
    3: ["cloudy", "cloudy"],
    45: ["fog", "fog"],
    48: ["fog", "fog"],
    51: ["rain-drizzle", "rain-drizzle"],
    53: ["rain-drizzle", "rain-drizzle"],
    55: ["rain-drizzle", "rain-drizzle"],
    56: ["rain-drizzle", "rain-drizzle"],
    57: ["rain-drizzle", "rain-drizzle"],
    61: ["rain", "rain"],
    63: ["rain", "rain"],
    65: ["rain", "rain"],
    66: ["rain", "rain"],
    67: ["rain", "rain"],
    71: ["snow", "snow"],
    73: ["snow", "snow"],
    75: ["snow", "snow"],
    77: ["snow", "snow"],
    80: ["rain-heavy", "rain-heavy"],
    81: ["rain-heavy", "rain-heavy"],
    82: ["rain-heavy", "rain-heavy"],
    85: ["snow-heavy", "snow-heavy"],
    86: ["snow-heavy", "snow-heavy"],
    95: ["thunderstorm", "thunderstorm"],
    96: ["thunderstorm", "thunderstorm"],
    99: ["thunderstorm", "thunderstorm"],
};

const fetchWeatherData = async () => {
    try {
        const response = await fetch(api_endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        document.getElementById("weather").innerHTML = `<p>Error loading weather data. Please try again later.</p>`;
    }
};

const displayWeatherData = (data) => {
    const date = new Date();
    const hour = date.getHours();
    const weatherContainer = document.getElementById("weather");
    let content = "";

    for (let i = 0; i < 7; i++) {
        const choice = hour + i * 3;
        const time = new Date(data.hourly.time[choice]).getHours();
        const iconKey = time >= 19 || time <= 7 ? weatherCodes[data.hourly.weathercode[choice]][1] : weatherCodes[data.hourly.weathercode[choice]][0];
        const icon_svg = icons[iconKey];
        const temperature = data.hourly.temperature_2m[choice];

        content += `<div class="category">
            <li class="time">[${time}:00]</li>
            <li class="weather-icon">${icon_svg} ${temperature}°C</li>
        </div>`;
    }
    weatherContainer.innerHTML = content;
};

export default fetchWeatherData;

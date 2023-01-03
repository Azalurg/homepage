import icons from "../data/icons.json" assert {type: 'json'}

const latitude = 54.52;
const longitude = 18.53; 
const api_endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,precipitation,weathercode`

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
    99: ["thunderstorm", "thunderstorm"]
  }

const weatherElement = document.getElementById("weather");

fetch(api_endpoint)
    .then(response => response.json())
    .then(data => {
        const date = new Date();
        const hour = date.getHours() + 1;
        const temperature = data.hourly.temperature_2m[hour];
        const precipitation = data.hourly.precipitation[hour];
        const weathercode = data.hourly.weathercode[hour];
        const relativehumidity_2m = data.hourly.relativehumidity_2m[hour];
        const windspeed_10m = data.hourly.windspeed_10m[hour];
        const response = `${icons[weatherCodes[weathercode][0]]} | ${temperature}°C`
        weatherElement.innerHTML = response
    })
    .catch(error => {
        console.error(error);
      });
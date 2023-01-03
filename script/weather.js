const latitude = 54.52;
const longitude = 18.53; 
const api_endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,precipitation,weathercode`

const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Violent intensity",
    85: "Snow showers: Slight intensity",
    86: "Snow showers: Heavy intensity",
    95: "Thunderstorm: Slight or moderate intensity",
    96: "Thunderstorm: Heavy hail: Slight intensity",
    99: "Thunderstorm: Heavy hail: Heavy intensity"
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
        const response = `${weatherCodes[weathercode]} | ${temperature}°C`
        weatherElement.innerHTML = response
    })
    .catch(error => {
        console.error(error);
      });
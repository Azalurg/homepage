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

// ToDo add precipitation and wind speed

fetch(api_endpoint)
    .then(response => response.json())
    .then(data => {
        const date = new Date();
        const hour = date.getHours();
        for(let i = 0; i < 7; i++){
          const choice= hour + i*3
          const time = new Date(data.hourly.time[choice]).getHours()
          let icon_svg = ""
          if(time >= 19 || time <= 7){
            icon_svg = icons[weatherCodes[data.hourly.weathercode[choice]][1]]
          } else {
            icon_svg = icons[weatherCodes[data.hourly.weathercode[choice]][0]]
          }
         
          const temperature = data.hourly.temperature_2m[choice]
          const weatherElementTitle = document.getElementById(`weather-element-title-${i}`);
          const weatherElement = document.getElementById(`weather-element-${i}`);
          weatherElementTitle.innerHTML = `[${time}:00]`
          weatherElement.innerHTML = `<span style="display: flex; align-items: center">${icon_svg}${temperature}°C</span>`
        }
    })
    .catch(error => {
        console.error(error);
      });
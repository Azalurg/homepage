import config from "./config.js";
import fetchWeatherData from "./weather.js";
import renderBookmarks from "./bookmarks.js";

const {general} = config;

// Time
setInterval(() => {
    const current_date = new Date();
    document.getElementById("time").innerText = current_date.toLocaleTimeString("pl-PL");
}, 1000);

// Date
document.getElementById("date").innerText = new Date().toLocaleDateString("pl-PL");

// Background
if (general.dynamicBackground) {
    document.body.style.backgroundImage = `url(https://picsum.photos/1920/1080?random=1)`;
}

// Bookmarks
renderBookmarks();

// Weather
fetchWeatherData();

// // Search engine
document.querySelector(".js-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = document.querySelector("#searchValue").value; // Add .value here
    window.open(`https://search.brave.com/search?q=${encodeURIComponent(searchValue)}`, "_self");
});

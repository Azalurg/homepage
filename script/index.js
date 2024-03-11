import config from "../data/config.json" assert {type: 'json'}

function get_avg(prices) {
    if (prices.length > config.movingAvgPeriod) {
        prices.shift()
    }
    let s = prices.reduce((a, b) => parseFloat(a) + parseFloat(b))
    return s / prices.length;
}

// Crypto price
const foreground = '#d8dee9'
const red = '#e06c75'
const green = '#98c379'

let ws_btc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_5m");
let ws_eth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@kline_5m");

let element_btc = document.getElementById("btc-price");
let element_eth = document.getElementById("eth-price");
let prices_btc = []
let prices_eth = []

ws_btc.onmessage = (event) => {
    let data_json = JSON.parse(event.data);
    let price = parseFloat(data_json.k.c).toFixed(2);
    prices_btc.push(price)

    let avg_price = get_avg(prices_btc)
    element_btc.innerText = "$" + price;
    element_btc.style.color = avg_price === price ? foreground : price > avg_price ? green : red
}

ws_eth.onmessage = (event) => {
    let data_json = JSON.parse(event.data);
    let price = parseFloat(data_json.k.c).toFixed(2);
    prices_eth.push(price)

    let avg_price = get_avg(prices_eth)
    element_eth.innerText = "$" + price;
    element_eth.style.color = avg_price === price ? foreground : price > avg_price ? green : red

}

// Time
setInterval(() => {
    const current_date = new Date();
    time.innerText = current_date.toLocaleTimeString('pl-PL');
}, 1000)

// Date
date.innerText = new Date().toLocaleDateString('pl-PL');

// Background
if (config.dynamicBackground) {
    body.style.backgroundImage = `url(https://picsum.photos/1920/1080?random=1)`;
}

// Search engine
document.querySelector('.js-form')?.addEventListener('submit', e => {
    e.preventDefault();
    window.open(`https://duckduckgo.com/?q=${searchValue.value}`, "_self")
});

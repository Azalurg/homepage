// Crypto price

const foreground = '#d8dee9'
const red = '#e06c75'
const green = '#98c379'

let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_5m");
let stockPriceElement = document.getElementById("btc-price");
let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.k.h).toFixed(2);
    stockPriceElement.innerText = "$" + price;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? foreground : price > lastPrice ? green : red
    lastPrice = price;
}

let ws_eth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@kline_5m");
let stockPriceElement_eth = document.getElementById("eth-price");
let lastPrice_eth = null;

ws_eth.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.k.h).toFixed(2);
    stockPriceElement_eth.innerText = "$" + price;
    stockPriceElement_eth.style.color = !lastPrice_eth || lastPrice_eth === price ? foreground : price > lastPrice_eth ? green : red
    lastPrice_eth = price;
}

// Time

setInterval(()=> {
    const current_date = new Date();
    time.innerText = current_date.toLocaleTimeString('pl-PL');
}, 1000)

// Date
date.innerText = new Date().toLocaleDateString('pl-PL');

// Background
body.style.backgroundImage = `url(https://picsum.photos/1920/1080?random=1)`;


// Search engine
document.querySelector('.js-form')?.addEventListener('submit', e => {
    e.preventDefault();
    window.open(`https://duckduckgo.com/?q=${searchValue.value}`, "_self")
  });
import config from "./config.js";

const {general} = config;

const foreground = "#d8dee9";
const red = "#e06c75";
const green = "#98c379";

const ws_btc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_5m");
const ws_eth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@kline_5m");

const prices_btc = [];
const prices_eth = [];

const getAvg = (prices, period) => {
    if (prices.length > period) {
        prices.shift();
    }
    const sum = prices.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    return sum / prices.length;
};

const displayCryptoPrice = (element, price, color) => {
    element.innerText = `$${price}`;
    element.style.color = color;
};

const updatePriceData = (ws, prices, element, period) => {
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const price = parseFloat(data.k.c).toFixed(2);
        prices.push(price);

        const avg_price = getAvg(prices, period);
        const color = avg_price === price ? foreground : price > avg_price ? green : red;
        displayCryptoPrice(element, price, color);
    };
};

const btcElement = document.getElementById("btc-price");
const ethElement = document.getElementById("eth-price");

updatePriceData(ws_btc, prices_btc, btcElement, general.movingAvgPeriod);
updatePriceData(ws_eth, prices_eth, ethElement, general.movingAvgPeriod);

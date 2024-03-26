'use strict';


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=35b1f1d45a7b4378cf2430ae601816be&units=metric`; 


async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    addWeatherToPage(respData);
};

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

    main.innerHTML = "";
    main.appendChild(weather);
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});

function KtoC(K) {
    return Math.floor(K - 273.15);
};


const countriesList = require('countries-list');


const currentWeatherContainer = document.querySelector('#currentWeatherContainer');
const cityCountry = document.querySelector('.cityCountry');
const uploadDate = document.querySelector('.uploadDate');
const weather = document.querySelector('.weather');
const description = document.querySelector('.description');
const details = document.querySelector('.details');
const feelsLike = document.querySelector('.feelsLike');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');


const celsiusFahrenheit = document.querySelector('.celsiusFahrenheit');
const celsiusBtn = document.querySelector('.celsiusBtn');
const fahrenheitBtn = document.querySelector('.fahrenheitBtn');

celsiusBtn.classList.add('activeDegree');


function findKeyByCountryName(countryName) {
    for (const key in countriesList.countries) {
      if (countriesList.countries[key].name === countryName) {
        return key;
      }
    }
    // If the country name is not found
    return null;
  }


function displayWeather (currentWeather) {
    const foundKey = findKeyByCountryName(currentWeather.country);

    cityCountry.textContent = `${currentWeather.city},${foundKey}`;
    uploadDate.textContent = currentWeather.lastUploaded;
    weather.textContent = `${Math.round(currentWeather.tempC)}°C`;
    description.textContent = currentWeather.weatherDescription;
}



function changeDegrees(currentWeather) {
    if (weather.textContent.includes("°C")) {
        weather.textContent = `${Math.round(currentWeather.tempF)}°F`;
        celsiusBtn.classList.remove('activeDegree');
        fahrenheitBtn.classList.add('activeDegree');
        celsiusFahrenheit.style.backgroundColor = "rgb(51,51,51)";
    } else {
        weather.textContent = `${Math.round(currentWeather.tempC)}°C`;
        fahrenheitBtn.classList.remove('activeDegree');
        celsiusBtn.classList.add('activeDegree');
        celsiusFahrenheit.style.backgroundColor = "rgb(204,204,204)";

    }
}

export {displayWeather, changeDegrees}
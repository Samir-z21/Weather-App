
const countriesList = require('countries-list');


// const currentWeatherContainer = document.querySelector('#currentWeatherContainer');
const cityCountry = document.querySelector('.cityCountry');
const uploadDate = document.querySelector('.uploadDate');
const weatherDegrees = document.querySelector('.weatherDegrees');
const weatherPic = document.querySelector('.weatherPic');
const textDescription = document.querySelector('.textDescription');
// const details = document.querySelector('.details');
const feelsLike = document.querySelector('.feelsLike');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');


const celsiusFahrenheit = document.querySelector('.celsiusFahrenheit');
const celsiusBtn = document.querySelector('.celsiusBtn');
const fahrenheitBtn = document.querySelector('.fahrenheitBtn');

celsiusBtn.classList.add('activeDegree');

console.log(countriesList)

function findKeyByCountryName(countryName) {
    for (const key in countriesList.countries) {
      if ((countriesList.countries[key].name === countryName) || (countriesList.countries[key].name.includes(countryName)) || countryName.includes(countriesList.countries[key].name)){
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
    weatherDegrees.textContent = `${Math.round(currentWeather.tempC)}°C`;
    weatherPic.src = `https:${currentWeather.weatherPic}`
    textDescription.textContent = currentWeather.textDescription;
    feelsLike.textContent = `Feels like: ${Math.round(currentWeather.feelsLikeC)}°`
    humidity.textContent = `Humidity levels: ${currentWeather.humidity}%`
    wind.textContent = `Wind: ${currentWeather.wind}km/h`
}



function changeDegrees(currentWeather, fetchedAPI) {
  if (fetchedAPI) {
    weatherDegrees.textContent = `${Math.round(currentWeather.tempC)}°C`;
    feelsLike.textContent = `Feels like: ${Math.round(currentWeather.feelsLikeC)}°`
    fahrenheitBtn.classList.remove('activeDegree');
    celsiusBtn.classList.add('activeDegree');
    celsiusFahrenheit.style.backgroundColor = "rgb(204,204,204)";
    return
  }
    if (weatherDegrees.textContent.includes("°C")) {
        weatherDegrees.textContent = `${Math.round(currentWeather.tempF)}°F`;
        feelsLike.textContent = `Feels like: ${Math.round(currentWeather.feelsLikeF)}°`
        celsiusBtn.classList.remove('activeDegree');
        fahrenheitBtn.classList.add('activeDegree');
        celsiusFahrenheit.style.backgroundColor = "rgb(51,51,51)";
    } else {
        weatherDegrees.textContent = `${Math.round(currentWeather.tempC)}°C`;
        feelsLike.textContent = `Feels like: ${Math.round(currentWeather.feelsLikeC)}°`
        fahrenheitBtn.classList.remove('activeDegree');
        celsiusBtn.classList.add('activeDegree');
        celsiusFahrenheit.style.backgroundColor = "rgb(204,204,204)";
    }
}


export {displayWeather, changeDegrees}
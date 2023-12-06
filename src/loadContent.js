
const countriesList = require('countries-list');

const {body} = document

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

function switchBackgrounds (currentWeather) {
  if (currentWeather.textDescription.includes("Rain") || 
      currentWeather.textDescription.includes("Storm") ||
      currentWeather.textDescription.includes("Pourring") || 
      currentWeather.textDescription.includes("Wet") ||
      currentWeather.textDescription.includes("Drizzle")
  ){

    body.style.backgroundImage = 'url("./pictures/rainy.jpg")';

  } else if (currentWeather.textDescription.includes("Cloud") || 
             currentWeather.textDescription.includes("Overcast") ||
             currentWeather.textDescription.includes("Fog") ||
             currentWeather.textDescription.includes("Gloom")
  ){

    body.style.backgroundImage = 'url("./pictures/cloudy.jpg")';

  } else if (currentWeather.textDescription.includes("Clear") || 
             currentWeather.textDescription.includes("Sun") ||
             currentWeather.textDescription.includes("Blank") ||
             currentWeather.textDescription.includes("Bright")
){

body.style.backgroundImage = 'url("./pictures/clear.jpg")';

}
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
}


export {displayWeather, changeDegrees, switchBackgrounds}

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


const divSearch = document.querySelector('.divSearch');

const celsiusFahrenheit = document.querySelector('.celsiusFahrenheit');
const celsiusBtn = document.querySelector('.celsiusBtn');
const fahrenheitBtn = document.querySelector('.fahrenheitBtn');


  const clear = ["clear", "sun", "blank", "Bright",]

  const cloudy = ["cloudy","cloud", "overcast", "fog", "gloom",]

  const rainy = ["rainy", "rain", "storm", "pouring", "wet", "drizzle",]

  const snowy = ["snowy", "snow", "frost", "blizzard", "winter", "cold", "chill", "freeze", ]

  const weatherConditions = [ clear, cloudy, rainy, snowy]


celsiusBtn.classList.add('activeDegree');


function findKeyByCountryName(countryName) {
    for (const key in countriesList.countries) {
      if ((countriesList.countries[key].name === countryName) || 
          (countriesList.countries[key].name.includes(countryName)) || 
          countryName.includes(countriesList.countries[key].name)){
        return key;
      } 
    }
    // If the country name is not found
    return null;
  }


function displayWeather (currentWeather) {
    const foundKey = findKeyByCountryName(currentWeather.country);

    cityCountry.textContent = `${currentWeather.city}, ${foundKey}`;
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


function switchBackgrounds(currentWeather) {
  console.log(currentWeather.textDescription)
  
  weatherConditions.forEach((weather) => {
    weather.forEach(term => {
      if (currentWeather.textDescription.toLowerCase().indexOf(term) !== -1) {
        body.style.backgroundImage = `url("./pictures/${weather[0]}.jpg")`;
        console.log(weather[0])
      }

        
        if (body.style.backgroundImage === `url("./pictures/snowy.jpg")`) {
          body.style.color = "black";
          cityCountry.style.textShadow = "3px 3px 2px white";
          weatherDegrees.style.textShadow = "3px 3px 2px white";
          textDescription.style.textShadow = "3px 3px 2px white";
          divSearch.style.textShadow = "3px 3px 2px white";
        }
        else {
          body.style.color = "white"
          cityCountry.style.textShadow = "3px 3px 2px black";
          weatherDegrees.style.textShadow = "3px 3px 2px black";
          textDescription.style.textShadow = "3px 3px 2px black";
          divSearch.style.textShadow = "3px 3px 2px black";
        }
    })
  })
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
}


export {displayWeather, changeDegrees, switchBackgrounds}
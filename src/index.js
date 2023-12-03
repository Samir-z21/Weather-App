import './style.css'

const countriesList = require('countries-list');

const {body} = document;
const currentWeather = document.querySelector('#currentWeather');
const cityCountry = document.querySelector('.cityCountry');
const uploadDate = document.querySelector('.uploadDate');
const weather = document.querySelector('.weather');
const description = document.querySelector('.description');
const details = document.querySelector('.details');
const feelsLike = document.querySelector('.feelsLike');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const chosenCity = "dollard"



function Weather(city, country, lastUploaded, tempC, tempF, weatherDescription, feelsLikeC, feelsLikeF, humidity, wind) {
    this.city = city;
    this.country = country;
    this.lastUploaded = lastUploaded;
    this.tempC = tempC;
    this.tempF = tempF; 
    this.weatherDescription = weatherDescription;
    this.feelsLikeC = feelsLikeC;
    this.feelsLikeF = feelsLikeF;
    this.humidity = humidity;
    this.wind = wind;
}

fetch(`https://api.weatherapi.com/v1/current.json?key=e7a5e7444ffd4d0087314554232211&q=${chosenCity}`,{mode:'cors'}) 
 .then((response) => response.json())
 .then((response) => {
    console.log(response);
    const currentWeather = new Weather (response.location.name, response.location.country, response.current.last_updated, response.current.temp_c, response.current.temp_f, response.current.condition.text, response.current.feelslike_c, response.current.feelslike_f, response.current.humidity, response.current.wind_kph);
    
    const foundKey = findKeyByCountryName(response.location.country);

    console.log(foundKey)
    cityCountry.textContent = currentWeather.city

    console.log(currentWeather)
  });


  function findKeyByCountryName(countryName) {
    for (const key in countriesList.countries) {
      if (countriesList.countries[key].name === countryName) {
        return key;
      }
    }
    // If the country name is not found
    return null;
  }

  console.log(countriesList.countries)
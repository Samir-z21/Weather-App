import './style.css'
import {displayWeather, changeDegrees} from './loadContent'

const celsiusFahrenheit = document.querySelector('.celsiusFahrenheit');
const searchContainer = document.querySelector('.searchContainer');
const searchLocation = document.querySelector('.searchLocation');


let chosenCity = "Montreal"
let currentWeather;
let fetchedAPI = false; 

function Weather(city, country, lastUploaded, weatherPic, tempC, tempF, textDescription, feelsLikeC, feelsLikeF, humidity, wind) {
    this.city = city;
    this.country = country;
    this.lastUploaded = lastUploaded;
    this.weatherPic = weatherPic;
    this.tempC = tempC;
    this.tempF = tempF; 
    this.textDescription = textDescription;
    this.feelsLikeC = feelsLikeC;
    this.feelsLikeF = feelsLikeF;
    this.humidity = humidity;
    this.wind = wind;
}


function fetchAPI() {
  fetch(`https://api.weatherapi.com/v1/current.json?key=e7a5e7444ffd4d0087314554232211&q=${chosenCity}`,{mode:'cors'}) 
 .then((response) => response.json())
 .then((response) => {
    console.log(response);
     currentWeather = new Weather (response.location.name, response.location.country, response.current.last_updated, response.current.condition.icon, response.current.temp_c, response.current.temp_f, response.current.condition.text, response.current.feelslike_c, response.current.feelslike_f, response.current.humidity, response.current.wind_kph);
    
    displayWeather (currentWeather)
  });
}


fetchAPI()
 
searchContainer.addEventListener('submit', e => {
  e.preventDefault();
  chosenCity = searchLocation.value;
  fetchAPI();
  searchLocation.value = "";
  fetchedAPI = true;
  changeDegrees(currentWeather, fetchedAPI);
})


celsiusFahrenheit.addEventListener ('click', () => {
  changeDegrees(currentWeather)
});


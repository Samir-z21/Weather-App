import './style.css'

const {body} = document;

const chosenCity = "montreal"

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

    console.log(currentWeather)
  });


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const apiKey = '245fdfa150e6c39f910a65e689559e4d';
const q = 'Carlsbad';
const units = 'metric';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${apiKey}`;
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.textContent = weatherData.main.humidity;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0) * 1.609.toFixed(1)}</strong>`;
}

// const temperatureCelsius = 33;
// const windSpeedKmH = 2.5;

 const temperatureFahrenheit = currentTemp * (9/5) + 32;
 const windSpeedMH = windSpeed/ 1.609;

// document.querySelector('.temperature').textContent = temperatureCelsius;
// document.querySelector('.wind').textContent = windSpeedKmH;

if (temperatureFahrenheit <= 50 && windSpeedMH > 3)
{
const windChill = (35.74 + (0.6215 * temperatureFahrenheit))-(35.75 * Math.pow(windSpeedMH,0.16)) + 
(0.4275 * temperatureFahrenheit * Math.pow(windSpeedMH,0.16));
const windChillRounded = Math.round(windChill);
document.querySelectorAll('.windChill').textContent = windChillRounded;
}
else
{
document.querySelector('.windChill').textContent = 'N/A';
}



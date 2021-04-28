function createPage(content) {
  // Create the form that will be used to search for weather
  const form = document.createElement('form');
  form.id = 'search-form';

  const inputField = document.createElement('input');
  inputField.id = 'search-input';

  const inputButton = document.createElement('button');
  inputButton.id = 'input-button';

  inputField.placeholder = 'Search for your city';
  inputButton.innerHTML = 'Submit';

  form.appendChild(inputField);
  form.appendChild(inputButton);

  content.appendChild(form);

  // Create the section for weather, which will be filled by displayWeather
  const weatherWrapper = document.createElement('section');
  weatherWrapper.id = 'weather-wrapper';

  content.appendChild(weatherWrapper);

  // Create div for buttons which will control display
  const buttonDisplayWrapper = document.createElement('div');
  buttonDisplayWrapper.id = 'button-display-wrapper';

  // Create display buttons
  const currentButton = document.createElement('button');
  currentButton.id = 'show-current';
  currentButton.innerHTML = 'Current';
  buttonDisplayWrapper.appendChild(currentButton);

  const dailyButton = document.createElement('button');
  dailyButton.id = 'show-daily';
  dailyButton.innerHTML = 'Daily';
  buttonDisplayWrapper.appendChild(dailyButton);

  const hourlyButton = document.createElement('button');
  hourlyButton.id = 'show-hourly';
  hourlyButton.innerHTML = 'Hourly';
  buttonDisplayWrapper.appendChild(hourlyButton);

  content.appendChild(buttonDisplayWrapper);
}

function displayWeather(weatherWrapper, weatherData) {
  // Remove all child nodes if weather data is currently displayed
  while (weatherWrapper.firstChild) {
    weatherWrapper.removeChild(weatherWrapper.firstChild);
  }

  const cityName = document.createElement('h2');
  cityName.innerHTML = weatherData.currentData.cityName;
  weatherWrapper.appendChild(cityName);

  const displayCurrentWeather = (() => {
    // Function generates current weather data
    const currentWeather = document.createElement('section');
    currentWeather.id = 'current-weather';

    const currentTitle = document.createElement('h3');
    currentTitle.innerHTML = 'Current Weather';

    const currentTemp = document.createElement('p');
    currentTemp.innerHTML = `Temperature: ${Math.round(
      weatherData.currentData.temp - 273.15
    )} C`;

    const currentFeelsLike = document.createElement('p');
    currentFeelsLike.innerHTML = `Feels like: ${Math.round(
      weatherData.currentData.feelsLike - 273.15
    )} C`;

    const currentMin = document.createElement('p');
    currentMin.innerHTML = `Low: ${Math.round(
      weatherData.currentData.minTemp - 273.15
    )} C`;

    const currentMax = document.createElement('p');
    currentMax.innerHTML = `High: ${Math.round(
      weatherData.currentData.maxTemp - 273.15
    )} C`;

    currentWeather.appendChild(currentTitle);
    currentWeather.appendChild(currentTemp);
    currentWeather.appendChild(currentFeelsLike);
    currentWeather.appendChild(currentMin);
    currentWeather.appendChild(currentMax);

    weatherWrapper.appendChild(currentWeather);
  })();

  const displayDailyData = (() => {
    const dailyData = document.createElement('section');
    dailyData.id = 'daily-data';

    const dailyTitle = document.createElement('h3');
    dailyTitle.innerHTML = 'Daily Forecast';
    dailyData.appendChild(dailyTitle);

    for (let i = 0; i < 7; i++) {
      const day = document.createElement('section');
      day.id = `day-${i}`;

      const dailyMinTemp = document.createElement('p');
      dailyMinTemp.innerHTML = `Low: ${Math.round(
        weatherData.forecastData.daily[i].minTemp - 273.15
      )} C`;

      const dailyMaxTemp = document.createElement('p');
      dailyMaxTemp.innerHTML = `High: ${Math.round(
        weatherData.forecastData.daily[i].maxTemp - 273.15
      )} C`;

      const dailyWeather = document.createElement('p');
      dailyWeather.innerHTML = `${weatherData.forecastData.daily[i].shortWeather}`;

      day.appendChild(dailyMinTemp);
      day.appendChild(dailyMaxTemp);
      day.appendChild(dailyWeather);

      dailyData.appendChild(day);
    }

    weatherWrapper.appendChild(dailyData);
  })();

  const displayHourlyData = (() => {
    const hourlyData = document.createElement('section');
    hourlyData.id = 'hourly-data';

    const hourlyTitle = document.createElement('h3');
    hourlyTitle.innerHTML = 'Hourly Forecast';
    hourlyData.appendChild(hourlyTitle);

    for (let i = 0; i < 48; i++) {
      const hour = document.createElement('section');
      hour.id = `hour-${i}`;

      const hourlyTemp = document.createElement('p');
      hourlyTemp.innerHTML = `Temperature: ${Math.round(
        weatherData.forecastData.hourly[i].temp - 273.15
      )} C`;

      const hourlyFeelsLike = document.createElement('p');
      hourlyFeelsLike.innerHTML = `Feels like: ${Math.round(
        weatherData.forecastData.hourly[i].feelsLike - 273.15
      )} C`;

      const hourlyWeather = document.createElement('p');
      hourlyWeather.innerHTML = `${weatherData.forecastData.hourly[i].weather}`;

      hour.appendChild(hourlyTemp);
      hour.appendChild(hourlyFeelsLike);
      hour.appendChild(hourlyWeather);

      hourlyData.appendChild(hour);
    }

    weatherWrapper.appendChild(hourlyData);
  })();
}

function changeDisplay(pageElements, chosenElement) {
  // Funciton will change display on page according to what user clicked
  // pageElements should be array, and chosenElement should be index of element to display

  for (let i = 0; i < pageElements.length; i++) {
    if (i == chosenElement) {
      pageElements[i].style.display = 'block';
    } else {
      pageElements[i].style.display = 'none';
    }
  }
}

export { createPage, displayWeather, changeDisplay };

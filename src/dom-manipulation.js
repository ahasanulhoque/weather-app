import { format } from 'date-fns';

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

  const unitButton = document.createElement('button');
  unitButton.id = 'temp-unit-button';
  unitButton.innerHTML = 'C / F';
  content.appendChild(unitButton);

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
    // Function displays current weather data
    const currentWeather = document.createElement('section');
    currentWeather.id = 'current-weather';

    const currentTitle = document.createElement('h3');
    currentTitle.innerHTML = 'Current Weather';

    const currentTemp = document.createElement('p');
    currentTemp.classList.add('templike');
    currentTemp.innerHTML = `Temperature: ${Math.round(
      weatherData.currentData.temp - 273.15
    )} C`;

    const currentFeelsLike = document.createElement('p');
    currentFeelsLike.classList.add('templike');
    currentFeelsLike.innerHTML = `Feels like: ${Math.round(
      weatherData.currentData.feelsLike - 273.15
    )} C`;

    const currentMin = document.createElement('p');
    currentMin.classList.add('templike');
    currentMin.innerHTML = `Low: ${Math.round(
      weatherData.currentData.minTemp - 273.15
    )} C`;

    const currentMax = document.createElement('p');
    currentMax.classList.add('templike');
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
    // Function displays daily forecast
    const dailyData = document.createElement('section');
    dailyData.id = 'daily-data';

    const dailyTitle = document.createElement('h3');
    dailyTitle.innerHTML = 'Daily Forecast';
    dailyData.appendChild(dailyTitle);

    for (let i = 0; i < 8; i++) {
      // day is section for whole day on DOM, including date and weather data
      const day = document.createElement('section');
      day.id = `day-${i}`;
      day.classList.add('full-day');

      const dateWrapper = document.createElement('div');
      dateWrapper.classList.add('date-wrapper');

      const dailyDate = document.createElement('h4');
      // Use format() from date-fns and slice date up to last comma, to exclude year
      dailyDate.innerHTML = format(
        weatherData.forecastData.daily[i].date,
        'PPPP'
      ).slice(
        0,
        format(weatherData.forecastData.daily[i].date, 'PPPP').lastIndexOf(',')
      );

      dateWrapper.appendChild(dailyDate);

      const dataWrapper = document.createElement('div');
      dataWrapper.classList.add('daily-data-wrapper');

      const dailyMinTemp = document.createElement('p');
      dailyMinTemp.classList.add('templike');
      dailyMinTemp.innerHTML = `Low: ${Math.round(
        weatherData.forecastData.daily[i].minTemp - 273.15
      )} C`;

      const dailyMaxTemp = document.createElement('p');
      dailyMaxTemp.classList.add('templike');
      dailyMaxTemp.innerHTML = `High: ${Math.round(
        weatherData.forecastData.daily[i].maxTemp - 273.15
      )} C`;

      const dailyWeather = document.createElement('p');
      dailyWeather.innerHTML = `${weatherData.forecastData.daily[i].shortWeather}`;

      dataWrapper.appendChild(dailyWeather);
      dataWrapper.appendChild(dailyMinTemp);
      dataWrapper.appendChild(dailyMaxTemp);

      day.appendChild(dateWrapper);
      day.appendChild(dataWrapper);

      dailyData.appendChild(day);
    }

    weatherWrapper.appendChild(dailyData);
  })();

  const displayHourlyData = (() => {
    // Function displays hourly forecast
    const hourlyData = document.createElement('section');
    hourlyData.id = 'hourly-data';

    const hourlyTitle = document.createElement('h3');
    hourlyTitle.innerHTML = 'Hourly Forecast';
    hourlyData.appendChild(hourlyTitle);

    for (let i = 0; i < 48; i++) {
      const hour = document.createElement('section');
      hour.id = `hour-${i}`;
      hour.classList.add('full-hour');

      const hourWrapper = document.createElement('div');
      hourWrapper.classList.add('hour-wrapper');

      const hourlyTime = document.createElement('h4');
      const fullDate = format(weatherData.forecastData.hourly[i].date, 'PPpp');
      hourlyTime.innerHTML =
        fullDate.slice(0, fullDate.indexOf(',')) +
        fullDate.slice(fullDate.indexOf(',') + 7, fullDate.lastIndexOf(':')) +
        fullDate.slice(fullDate.indexOf(':') + 6);

      hourWrapper.appendChild(hourlyTime);

      const dataWrapper = document.createElement('div');
      dataWrapper.classList.add('hourly-data-wrapper');

      const hourlyTemp = document.createElement('p');
      hourlyTemp.classList.add('templike');
      hourlyTemp.innerHTML = `Temperature: ${Math.round(
        weatherData.forecastData.hourly[i].temp - 273.15
      )} C`;

      const hourlyFeelsLike = document.createElement('p');
      hourlyFeelsLike.classList.add('templike');
      hourlyFeelsLike.innerHTML = `Feels like: ${Math.round(
        weatherData.forecastData.hourly[i].feelsLike - 273.15
      )} C`;

      const hourlyWeather = document.createElement('p');
      hourlyWeather.innerHTML = `${weatherData.forecastData.hourly[i].weather}`;

      dataWrapper.appendChild(hourlyTemp);
      dataWrapper.appendChild(hourlyFeelsLike);
      dataWrapper.appendChild(hourlyWeather);

      hour.appendChild(hourWrapper);
      hour.appendChild(dataWrapper);

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

function changeUnits(weatherWrapper) {
  // Get all templike elements (temp, feels like, high, low) from DOM
  // Get current temp unit from first templike element
  let temps = weatherWrapper.querySelectorAll('.templike');
  let currentUnit = temps[0].innerHTML.slice(-1);

  temps.forEach((temp) => {
    // Get the measurement for each templike element
    let currentTemp = temp.innerHTML.slice(
      temp.innerHTML.indexOf(':') + 2,
      temp.innerHTML.lastIndexOf(' ')
    );
    if (currentUnit == 'C') {
      // Convert to Fahrenheit and update DOM
      currentTemp = Math.round(currentTemp * (9 / 5) + 32);
      temp.innerHTML =
        temp.innerHTML.slice(0, temp.innerHTML.indexOf(':') + 2) +
        currentTemp +
        ' F';
    } else if (currentUnit == 'F') {
      // Convert to Celsius and update DOM
      currentTemp = Math.round((currentTemp - 32) / (9 / 5));
      temp.innerHTML =
        temp.innerHTML.slice(0, temp.innerHTML.indexOf(':') + 2) +
        currentTemp +
        ' C';
    }
  });
}
export { createPage, displayWeather, changeDisplay, changeUnits };

// Functions for retrieving and processing data from OpenWeatherMap API

// Function to retrieve data from OpenWeatherMap API
const retrieveData = async function retriveWeatherData(location) {
  try {
    // If the user entered a city name (string), use this fetch
    if (isNaN(location.charAt(0))) {
      const responseCurrent = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const currentWeatherData = await responseCurrent.json();

      // Variables to be used in forecast API call
      const lat = await currentWeatherData.coord.lat;
      const lon = await currentWeatherData.coord.lon;

      const responseForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const forecastData = await responseForecast.json();

      return [currentWeatherData, forecastData];
    }

    // If the user entered a zip code, use this fetch
    if (isNaN(location.charAt(location.length - 1))) {
      const responseCurrent = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${location}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const currentWeatherData = await responseCurrent.json();

      // Variables to be used in forecast API call
      const lat = await currentWeatherData.coord.lat;
      const lon = await currentWeatherData.coord.lon;

      const responseForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const forecastData = await responseForecast.json();

      return [currentWeatherData, forecastData];
    }

    // If the user entered a city ID, use this fetch
    if (!isNaN(location)) {
      const responseCurrent = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${location}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const currentWeatherData = await responseCurrent.json();

      // Variables to be used in forecast API call
      const lat = await currentWeatherData.coord.lat;
      const lon = await currentWeatherData.coord.lon;

      const responseForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const forecastData = await responseForecast.json();

      return [currentWeatherData, forecastData];
    }
  } catch (error) {
    return error;
  }
};

// Constructor for data processed from the data returned by retrieveData
const ProcessedWeatherData = function createProcessedDataObject(
  unprocessedData
) {
  const cityName = unprocessedData[0].name;

  // Current data constructor
  const currentData = (function processCurrentDataObject() {
    // From 'main' property
    const temp = unprocessedData[0].main.temp;
    const maxTemp = unprocessedData[0].main.temp_max;
    const minTemp = unprocessedData[0].main.temp_min;
    const feelsLike = unprocessedData[0].main.feels_like;
    const humidityPercentage = unprocessedData[0].main.humidity;

    // From 'weather' property
    const fullWeather = unprocessedData[0].weather[0].description;
    const shortWeather = unprocessedData[0].weather[0].main;
    return {
      cityName,
      temp,
      maxTemp,
      minTemp,
      feelsLike,
      humidityPercentage,
      fullWeather,
      shortWeather,
    };
  })();

  // Day constructor
  const day = function createDailyData(i) {
    // Using i + 1 in daily array to skip day 0 (today)
    const minTemp = unprocessedData[1].daily[i + 1].temp.min;
    const maxTemp = unprocessedData[1].daily[i + 1].temp.max;
    const fullWeather = unprocessedData[1].daily[i + 1].weather[0].description;
    const shortWeather = unprocessedData[1].daily[i + 1].weather[0].main;

    return { minTemp, maxTemp, fullWeather, shortWeather };
  };

  // Hour constructor
  const hour = function createHourlyData(i) {
    const temp = unprocessedData[1].hourly[i].temp;
    const feelsLike = unprocessedData[1].hourly[i].feels_like;
    const weather = unprocessedData[1].hourly[i].weather[0].main;

    return { temp, feelsLike, weather };
  };

  // Forecast constructor
  const forecastData = (function createForecastData() {
    const daily = [];
    for (let i = 0; i < 7; i++) {
      daily.push(day(i));
    }

    const hourly = [];
    for (let j = 0; j < 48; j++) {
      hourly.push(hour(j));
    }

    return { daily, hourly };
  })();

  return {
    cityName,
    currentData,
    forecastData,
  };
};

export { retrieveData, ProcessedWeatherData };

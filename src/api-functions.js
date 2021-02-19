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
  // Rewrite to also process forecast

  const cityName = unprocessedData[0].name;

  // From 'main' property
  const tempK = unprocessedData[0].main.temp;
  const maxTemp = unprocessedData[0].main.temp_max;
  const minTemp = unprocessedData[0].main.temp_min;
  const feelsLike = unprocessedData[0].main.feels_like;
  const humidityPercentage = unprocessedData[0].main.humidity;

  // From 'weather' property
  const fullWeather = unprocessedData[0].weather[0].description;
  const shortWeather = unprocessedData[0].weather[0].main;

  return {
    cityName,
    tempK,
    maxTemp,
    minTemp,
    feelsLike,
    humidityPercentage,
    fullWeather,
    shortWeather,
  };
};

export { retrieveData, ProcessedWeatherData };

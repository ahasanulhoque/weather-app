// Functions for retrieving and processing data from OpenWeatherMap API

// Function to retrieve data from OpenWeatherMap API
const retrieveData = async function retriveWeatherData(location) {
  try {
    // If the user entered a city name (string), use this fetch
    if (isNaN(location.charAt(0))) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const weatherData = await response.json();
      return weatherData;
    }

    // If the user entered a zip code, use this fetch
    if (isNaN(location.charAt(location.length - 1))) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${location}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const weatherData = await response.json();
      return weatherData;
    }

    // If the user entered a city ID, use this fetch
    if (!isNaN(location)) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${location}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
        { mode: 'cors' }
      );
      const weatherData = await response.json();
      return weatherData;
    }
  } catch (error) {
    return error;
  }
};

// Constructor for data processed from the data returned by retrieveData
const ProcessedWeatherData = function createProcessedDataObject(
  unprocessedData
) {
  const cityName = unprocessedData.name;

  // From 'main' property
  const tempK = unprocessedData.main.temp;
  const maxTemp = unprocessedData.main.temp_max;
  const minTemp = unprocessedData.main.temp_min;
  const feelsLike = unprocessedData.main.feels_like;
  const humidityPercentage = unprocessedData.main.humidity;

  // From 'weather' property
  const fullWeather = unprocessedData.weather[0].description;
  const shortWeather = unprocessedData.weather[0].main;

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

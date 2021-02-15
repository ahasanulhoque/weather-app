// Functions for retrieving and processing data from OpenWeatherMap API

const retrieveData = async function retriveWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1baddaa1511e4b0e92e8f747c1a3353c`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    return error;
  }
};

const ProcessedWeatherData = function createProcessedDataObject(
  unprocessedData
) {
  const cityName = unprocessedData.name;

  // From 'main' property
  const temp = unprocessedData.main.temp;
  const maxTemp = unprocessedData.main.temp_max;
  const minTemp = unprocessedData.main.temp_min;
  const feelsLike = unprocessedData.main.feels_like;
  const humidity = unprocessedData.main.humidity;

  //From 'weather' property
  const fullWeather = unprocessedData.weather[0].description;
  const shortWeather = unprocessedData.weather[0].main;

  return {
    cityName,
    temp,
    maxTemp,
    minTemp,
    feelsLike,
    humidity,
    fullWeather,
    shortWeather,
  };
};

export { retrieveData, ProcessedWeatherData };

import './style.css';
import { retrieveData, ProcessedWeatherData } from './api-functions';
import { createPage, displayWeather, changeDisplay } from './dom-manipulation';

const PageController = (() => {
  const content = document.querySelector('#content');

  // Below function is just testing that retrieval and processing of data
  // from api works
  async function retrieveProcess() {
    const x = await retrieveData('london,uk');
    console.log(x);
    const y = ProcessedWeatherData(x);
    console.log(y);

    displayWeather(content.querySelector('#weather-wrapper'), y);
  }

  createPage(content);
  retrieveProcess();

  const searchField = document.querySelector('input');
  const searchButton = document.querySelector('button');

  searchButton.onclick = async () => {
    const x = await retrieveData(searchField.value);
    console.log(x);
    const y = ProcessedWeatherData(x);
    console.log(y);
  };

  const displayButtonSection = document.querySelector(
    '#button-display-wrapper'
  );

  displayButtonSection.onclick = (e) => {
    // This is the array that will be sent to changeDisplay().
    // See changeDisplay() in dom-manipulation.js for explanation of paramaters
    const weatherSections = [];
    weatherSections.push(content.querySelector('#current-weather'));
    weatherSections.push(content.querySelector('#daily-data'));
    weatherSections.push(content.querySelector('#hourly-data'));

    if (e.target.id === 'show-current') {
      changeDisplay(weatherSections, 0);
    } else if (e.target.id === 'show-daily') {
      changeDisplay(weatherSections, 1);
    } else if (e.target.id === 'show-hourly') {
      changeDisplay(weatherSections, 2);
    }
  };
})();

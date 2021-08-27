import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './style.css';
import { retrieveData, ProcessedWeatherData } from './api-functions';
import {
  createPage,
  displayWeather,
  changeDisplay,
  changeUnits,
} from './dom-manipulation';

const PageController = (() => {
  const content = document.querySelector('#content');
  createPage(content);

  async function initializePage() {
    const x = await retrieveData('washington dc,us');
    const y = ProcessedWeatherData(x);

    displayWeather(content.querySelector('#weather-wrapper'), y);
  }

  initializePage();

  const searchField = document.querySelector('input');
  const searchForm = document.querySelector('#search-form');

  searchForm.onsubmit = async (submission) => {
    submission.preventDefault();
    const x = await retrieveData(searchField.value);
    const y = ProcessedWeatherData(x);

    displayWeather(content.querySelector('#weather-wrapper'), y);
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
      changeDisplay(weatherSections, 0, 'flex');
    } else if (e.target.id === 'show-daily') {
      changeDisplay(weatherSections, 1, 'block');
    } else if (e.target.id === 'show-hourly') {
      changeDisplay(weatherSections, 2, 'block');
    }
  };

  const unitButton = document.querySelector('#temp-unit-button');

  unitButton.onclick = () => {
    // Pass weather section of DOM into changeUnits funciton
    changeUnits(content.querySelector('#weather-wrapper'));
  };
})();

import './style.css';
import { retrieveData, ProcessedWeatherData } from './api-functions';
import { createForm, displayWeather } from './dom-manipulation';

const PageController = (() => {
  const content = document.querySelector('#content');

  // Below function is just testing that retrieval and processing of data
  // from api works
  async function retrieveProcess() {
    const x = await retrieveData('london,uk');
    console.log(x);
    const y = ProcessedWeatherData(x);
    console.log(y);

    displayWeather(content, y);
  }

  createForm(content);
  retrieveProcess();

  const searchField = document.querySelector('input');
  const searchButton = document.querySelector('button');

  searchButton.onclick = async () => {
    const x = await retrieveData(searchField.value);
    console.log(x);
    const y = ProcessedWeatherData(x);
    console.log(y);
  };
})();

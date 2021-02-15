import './style.css';
import { retrieveData, ProcessedWeatherData } from './api-functions';

// const content = document.querySelector('#content');

async function retrieveProcess() {
  const x = await retrieveData('london,uk');
  console.log(x);
  const y = ProcessedWeatherData(x);
  console.log(y);
}

retrieveProcess();

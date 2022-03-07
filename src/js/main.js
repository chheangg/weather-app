/* eslint-disable no-param-reassign */
import 'normalize.css';
import '../style/style.css';
import weatherInterface from './app';
import pageLoad from './pageLoad';

const appInterface = (function handler() {
  let currentData;
  async function getMainData(cityName) {
    const mainData = await weatherInterface.getCity(cityName);
    console.log(mainData);
    // eslint-disable-next-line prefer-object-spread
    currentData = Object.assign(
      mainData.main,
      mainData.weather[0],
      mainData.wind,
      { visibility: mainData.visibility },
      { name: mainData.name.toUpperCase() },
    );
    return currentData;
  }
  return { getMainData, currentData };
}());

// eslint-disable-next-line func-names
const unitType = (function () {
  // eslint-disable-next-line consistent-return
  function unitConvert(unit, type) {
    if (type === 'celsius') {
      const newVal = Math.floor(unit - 273.15);
      return newVal;
    }
    if (type === 'fahrenheit') {
      const newVal = Math.floor(((unit - 273.15) * (9 / 5)) + 32);
      return newVal;
    }
    if (type === 'km') {
      const newVal = unit * 1.852;
      return newVal;
    }
  }

  function handler(data, type) {
    data.temp = unitConvert(data.temp, type);
    data.temp_max = unitConvert(data.temp_max, type);
    data.temp_min = unitConvert(data.temp_min, type);
    data.feels_like = unitConvert(data.feels_like, type);
    data.speed = unitConvert(data.speed, 'km');
    return data;
  }
  return { handler };
}());

async function onLoad() {
  const data = await appInterface.getMainData('Phnom%20Penh');
  const newData = unitType.handler(data, 'celsius');
  console.log(newData);
  Promise.resolve(pageLoad.mainLoad(newData));
}

onLoad();

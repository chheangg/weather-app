/* eslint-disable no-param-reassign */
import 'normalize.css';
import '../style/style.css';
import weatherInterface from './app';
import pageLoad from './pageLoad';
import webConfig from './config';

const btns = [...document.getElementsByClassName('switch-button')];
const tempbtns = [...document.getElementsByClassName('off')];
const options = {
  currentType: 'daily',
  currentTemp: 'celsius',
};

const appInterface = (function handler() {
  let currentData;
  let currentForecast;
  function reorganizeObj(mainData, type) {
    let newData;
    if (type === 'main') {
      newData = Object.assign(
        mainData.main,
        mainData.weather[0],
        mainData.wind,
        { visibility: mainData.visibility },
        { name: mainData.name.toUpperCase() },
      );
    } else if (type === 'forecast') {
      const date = new Date(mainData.dt_txt);
      const day = date.getDate();
      const specific = date.getDay();
      const hour = date.getHours();
      newData = Object.assign(
        mainData.main,
        mainData.weather[0],
        { day },
        { specific },
        { hour },
        { date },
      );
    }
    return newData;
  }
  function daySort(arrs) {
    const forecast = [];
    arrs.forEach((arr) => {
      const date = arr.day;
      if (!forecast[date]) {
        forecast[date] = [];
      }
      forecast[date].push(arr);
    });
    appInterface.currentForecast = forecast;
    return appInterface.currentForecast;
  }
  async function getMainData(cityName) {
    try {
      const mainData = await weatherInterface.getCity(cityName);
      const data = reorganizeObj(mainData, 'main');
      appInterface.currentData = data;
      appInterface.currentCity = data.name;
      return data;
    } catch (err) {
      return err;
    }
  }
  async function getForecasts(cityName, type) {
    const mainData = await weatherInterface.getForecast(cityName);
    const organizedData = mainData.list.map((data) => reorganizeObj(data, 'forecast'));
    let data;
    if (type === 'daily') {
      data = daySort(organizedData);
    } else if (type === 'hourly') {
      return organizedData;
    }
    return data;
  }

  return {
    getMainData,
    getForecasts,
    currentData,
    currentForecast,
  };
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

async function onLoad(cityName, type, unit) {
  try {
    const newName = weatherInterface.checkName(cityName);
    const data = await appInterface.getMainData(newName);
    const forecastData = await appInterface.getForecasts(newName, type);
    if (type === 'daily') {
      forecastData.forEach((datas) => {
        datas.forEach((day) => {
          unitType.handler(day, unit);
        });
      });
    } else if (type === 'hourly') {
      forecastData.forEach((hourlyData) => {
        unitType.handler(hourlyData, unit);
      });
    }
    const newData = unitType.handler(data, unit);
    pageLoad.mainLoad(newData, forecastData, type, unit);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

const switcher = (function handler() {
  function hourly() {
    onLoad(appInterface.currentCity, 'hourly', options.currentTemp);
    options.currentType = 'hourly';
  }
  function daily() {
    onLoad(appInterface.currentCity, 'daily', options.currentTemp);
    options.currentType = 'daily';
  }
  function celsius() {
    onLoad(appInterface.currentCity, options.currentType, 'celsius');
    options.currentTemp = 'celsius';
  }
  function fahrenheit() {
    onLoad(appInterface.currentCity, options.currentType, 'fahrenheit');
    options.currentTemp = 'fahrenheit';
  }
  return {
    hourly,
    daily,
    celsius,
    fahrenheit,
  };
}());

document.getElementsByClassName('search-icon')[0].addEventListener('click', () => {
  const cityName = document.getElementById('search').value;
  onLoad(cityName, options.currentType, options.currentTemp);
  document.getElementById('search').value = '';
});

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btns.forEach((obj) => {
      obj.classList.remove('highlight');
    });
    btn.classList.add('highlight');
    if (btn.textContent.toLowerCase() === 'hourly') {
      switcher.hourly();
    }
    if (btn.textContent.toLowerCase() === 'daily') {
      switcher.daily();
    }
  });
});

tempbtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    tempbtns.forEach((obj) => {
      obj.classList.remove('on');
    });
    btn.classList.add('on');
    if (btn.textContent === '°C') {
      switcher.celsius();
    }
    if (btn.textContent === '°F') {
      switcher.fahrenheit();
      console.log('hi');
    }
  });
});

pageLoad.iconLoad(webConfig.icon);
onLoad('Phnom%20Penh', options.currentType, options.currentTemp);
document.getElementsByClassName('switch-button')[0].classList.add('highlight');

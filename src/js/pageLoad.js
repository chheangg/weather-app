function iconLoad(config) {
  config.forEach((obj) => {
    const box = document.getElementsByClassName(obj.el)[0];
    const titleBox = box.getElementsByClassName('sub-inner-box')[0];
    const img = new Image();

    img.src = obj.icon;
    img.className = 'icon';
    titleBox.insertBefore(img, titleBox.firstChild);
  });
}

// eslint-disable-next-line func-names
const mainInfo = (function () {
  function load(data, unit) {
    let unitSign;
    if (unit === 'celsius') {
      unitSign = '°C';
    } else if (unit === 'fahrenheit') {
      unitSign = '°F';
    }
    document.getElementsByClassName('city-name')[0].textContent = data.name;
    document.getElementsByClassName('main-temp')[0]
      .getElementsByClassName('light-text')[0].textContent = `${Math.floor(data.temp)} ${unitSign}`;
    document.getElementsByClassName('min-temp')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.temp_min)} ${unitSign}`;
    document.getElementsByClassName('max-temp')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.temp_max)} ${unitSign}`;
    document.getElementsByClassName('feel-like')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.feels_like)} ${unitSign}`;
    document.getElementsByClassName('visibility')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.visibility / 100)}%`;
    document.getElementsByClassName('humidity')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.humidity)}%`;
    document.getElementsByClassName('wind-speed')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.round(data.speed * 100) / 100}Km/h`;
  }
  function cloudReset() {
    document.getElementsByClassName('img-container')[0].textContent = '';
  }
  function loadCloud(data, isMain) {
    cloudReset();
    const cloudIcon = new Image();
    cloudIcon.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
    if (isMain === true) {
      const iconContainer = document.getElementsByClassName('img-container')[0];
      iconContainer.appendChild(cloudIcon);
      document.getElementsByClassName('main-info')[0]
        .getElementsByClassName('cloud-desc')[0].textContent = data.description;
    }
  }
  return { load, loadCloud };
}());

const forecast = (function handler() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  function dailyTitle(date) {
    if ((date >= 4 && date <= 20) || (date >= 24 && date <= 30)) {
      date = `${date}th`;
    } else if (date === 1 || date === 21 || date === 31) {
      date = `${date}st`;
    } else if (date === 2 || date === 22) {
      date = `${date}nd`;
    } else if (date === 3 || date === 23) {
      date = `${date}rd`;
    }
    return date;
  };
  function amPm(time) {
    let hour = time.getHours();
    let sign;

    if (hour > 12) {
      hour -= 12;
      sign = 'P.M';
    } else {
      sign = 'A.M';
    }

    return `${hour}:00 ${sign}`;
  }
  function generate(data, unit, average, type) {
    let unitSign;
    let date;
    if (unit === 'celsius') {
      unitSign = '°C';
    } else if (unit === 'fahrenheit') {
      unitSign = '°F';
    }
    const box = document.createElement('div');
    const day = document.createElement('p');
    const icon = document.createElement('img');
    const minTemp = document.createElement('p');
    const maxTemp = document.createElement('p');

    box.className = 'box';
    icon.className = 'box-icon norm-text';
    minTemp.className = 'box-min-temp light-text';
    maxTemp.className = 'box-max-temp light-text';

    if (type === 'daily') {
      date = data[0].date.getDate();
      day.textContent = `${days[data[0].date.getDay()].toUpperCase()}, ${dailyTitle(date)}`;
      icon.src = `https://openweathermap.org/img/wn/${data[0].icon}@2x.png`;
      day.className = 'box-title-1 norm-text';
    } else if (type === 'hourly') {
      day.className = 'box-title-2 norm-text';
      date = data.date.getDate();
      day.textContent = `${amPm(data.date)}`;
      icon.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
    }
    minTemp.textContent = `${Math.floor(average.min)} ${unitSign}`;
    maxTemp.textContent = `${Math.floor(average.max)} ${unitSign}`;
    [day, icon, minTemp, maxTemp].forEach((el) => {
      box.appendChild(el);
    });
    document.getElementsByClassName('box-container')[0].appendChild(box);
  }
  function getAverage(data) {
    let averageMin = 0;
    let averageMax = 0;
    data.forEach((obj) => {
      averageMin += obj.temp_min;
      averageMax += obj.temp_max;
    });
    return {
      min: averageMin / data.length,
      max: averageMax / data.length,
    };
  }
  function reset() {
    document.getElementsByClassName('box-container')[0].textContent = '';
  }
  function load(datas, type, unit) {
    reset();
    if (type === 'daily') {
      datas.forEach((data) => {
        const average = getAverage(data);
        generate(data, unit, average, type);
      });
    }
    if (type === 'hourly') {
      datas.splice(2, 8).forEach((data) => {
        generate(
          data,
          unit,
          {
            min: data.temp_min,
            max: data.temp_max,
          },
          type,
        );
      });
    }
  }
  return { load };
}());

function mainLoad(mainData, forecastData, forecastType, unit) {
  const sanData = forecastData.filter((elements) => elements !== '');
  mainInfo.load(mainData, unit);
  mainInfo.loadCloud(mainData, true);
  forecast.load(sanData, forecastType, unit);
}

export default { mainLoad, iconLoad };

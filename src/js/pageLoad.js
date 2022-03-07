import webConfig from './config';

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
  function load(data) {
    document.getElementsByClassName('city-name')[0].textContent = data.name;
    document.getElementsByClassName('main-temp')[0]
      .getElementsByClassName('light-text')[0].textContent = `${Math.floor(data.temp)}°`;
    document.getElementsByClassName('min-temp')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.temp_min)}°`;
    document.getElementsByClassName('max-temp')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.temp_max)}°`;
    document.getElementsByClassName('feel-like')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.feels_like)}°`;
    document.getElementsByClassName('visibility')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.visibility / 100)}%`;
    document.getElementsByClassName('humidity')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.floor(data.humidity)}%`;
    document.getElementsByClassName('wind-speed')[0]
      .getElementsByClassName('sub-data')[0].textContent = `${Math.round(data.speed * 100) / 100}Km/h`;
  }
  function loadCloud(data, isMain) {
    const cloudIcon = new Image();
    cloudIcon.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
    if (isMain === true) {
      const iconContainer = document.getElementsByClassName('main-info')[0].getElementsByClassName('img-container')[0];
      iconContainer.appendChild(cloudIcon);
      iconContainer.className = 'cloud-img';
      document.getElementsByClassName('main-info')[0]
        .getElementsByClassName('cloud-desc')[0].textContent = data.description;
    }
  }
  return { load, loadCloud };
}());

function mainLoad(mainData) {
  iconLoad(webConfig.icon);
  mainInfo.load(mainData);
  mainInfo.loadCloud(mainData, true);
}

export default { mainLoad };

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ mainLoad, iconLoad });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsdUJBQXVCLEVBQUUsU0FBUztBQUNsRztBQUNBLDhEQUE4RCwyQkFBMkIsRUFBRSxTQUFTO0FBQ3BHO0FBQ0EsOERBQThELDJCQUEyQixFQUFFLFNBQVM7QUFDcEc7QUFDQSw4REFBOEQsNkJBQTZCLEVBQUUsU0FBUztBQUN0RztBQUNBLDhEQUE4RCxrQ0FBa0M7QUFDaEc7QUFDQSw4REFBOEQsMEJBQTBCO0FBQ3hGO0FBQ0EsOERBQThELG1DQUFtQztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxVQUFVO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQixNQUFNO0FBQ04sZ0JBQWdCLEtBQUs7QUFDckIsTUFBTTtBQUNOLGdCQUFnQixLQUFLO0FBQ3JCLE1BQU07QUFDTixnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsY0FBYyxLQUFLLE1BQU0sS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBMEMsSUFBSSxpQkFBaUI7QUFDMUYsc0RBQXNELGFBQWE7QUFDbkU7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0Msc0RBQXNELFVBQVU7QUFDaEU7QUFDQSw2QkFBNkIseUJBQXlCLEVBQUUsU0FBUztBQUNqRSw2QkFBNkIseUJBQXlCLEVBQUUsU0FBUztBQUNqRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsb0JBQW9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3BhZ2VMb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gaWNvbkxvYWQoY29uZmlnKSB7XG4gIGNvbmZpZy5mb3JFYWNoKChvYmopID0+IHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG9iai5lbClbMF07XG4gICAgY29uc3QgdGl0bGVCb3ggPSBib3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3ViLWlubmVyLWJveCcpWzBdO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nLnNyYyA9IG9iai5pY29uO1xuICAgIGltZy5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgdGl0bGVCb3guaW5zZXJ0QmVmb3JlKGltZywgdGl0bGVCb3guZmlyc3RDaGlsZCk7XG4gIH0pO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuY29uc3QgbWFpbkluZm8gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBsb2FkKGRhdGEsIHVuaXQpIHtcbiAgICBsZXQgdW5pdFNpZ247XG4gICAgaWYgKHVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgdW5pdFNpZ24gPSAnwrBDJztcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdmYWhyZW5oZWl0Jykge1xuICAgICAgdW5pdFNpZ24gPSAnwrBGJztcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eS1uYW1lJylbMF0udGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi10ZW1wJylbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaWdodC10ZXh0JylbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEudGVtcCl9ICR7dW5pdFNpZ259YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtaW4tdGVtcCcpWzBdXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3ViLWRhdGEnKVswXS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS50ZW1wX21pbil9ICR7dW5pdFNpZ259YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXgtdGVtcCcpWzBdXG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3ViLWRhdGEnKVswXS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS50ZW1wX21heCl9ICR7dW5pdFNpZ259YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVsLWxpa2UnKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Yi1kYXRhJylbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEuZmVlbHNfbGlrZSl9ICR7dW5pdFNpZ259YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aXNpYmlsaXR5JylbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWItZGF0YScpWzBdLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihkYXRhLnZpc2liaWxpdHkgLyAxMDApfSVgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWlkaXR5JylbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWItZGF0YScpWzBdLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihkYXRhLmh1bWlkaXR5KX0lYDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLXNwZWVkJylbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWItZGF0YScpWzBdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLnNwZWVkICogMTAwKSAvIDEwMH1LbS9oYDtcbiAgfVxuICBmdW5jdGlvbiBjbG91ZFJlc2V0KCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZy1jb250YWluZXInKVswXS50ZXh0Q29udGVudCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIGxvYWRDbG91ZChkYXRhLCBpc01haW4pIHtcbiAgICBjbG91ZFJlc2V0KCk7XG4gICAgY29uc3QgY2xvdWRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY2xvdWRJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDJ4LnBuZ2A7XG4gICAgaWYgKGlzTWFpbiA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltZy1jb250YWluZXInKVswXTtcbiAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvdWRJY29uKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4taW5mbycpWzBdXG4gICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG91ZC1kZXNjJylbMF0udGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBsb2FkLCBsb2FkQ2xvdWQgfTtcbn0oKSk7XG5cbmNvbnN0IGZvcmVjYXN0ID0gKGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gIGZ1bmN0aW9uIGRhaWx5VGl0bGUoZGF0ZSkge1xuICAgIGlmICgoZGF0ZSA+PSA0ICYmIGRhdGUgPD0gMjApIHx8IChkYXRlID49IDI0ICYmIGRhdGUgPD0gMzApKSB7XG4gICAgICBkYXRlID0gYCR7ZGF0ZX10aGA7XG4gICAgfSBlbHNlIGlmIChkYXRlID09PSAxIHx8IGRhdGUgPT09IDIxIHx8IGRhdGUgPT09IDMxKSB7XG4gICAgICBkYXRlID0gYCR7ZGF0ZX1zdGA7XG4gICAgfSBlbHNlIGlmIChkYXRlID09PSAyIHx8IGRhdGUgPT09IDIyKSB7XG4gICAgICBkYXRlID0gYCR7ZGF0ZX1uZGA7XG4gICAgfSBlbHNlIGlmIChkYXRlID09PSAzIHx8IGRhdGUgPT09IDIzKSB7XG4gICAgICBkYXRlID0gYCR7ZGF0ZX1yZGA7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9O1xuICBmdW5jdGlvbiBhbVBtKHRpbWUpIHtcbiAgICBsZXQgaG91ciA9IHRpbWUuZ2V0SG91cnMoKTtcbiAgICBsZXQgc2lnbjtcblxuICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgIGhvdXIgLT0gMTI7XG4gICAgICBzaWduID0gJ1AuTSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ24gPSAnQS5NJztcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7aG91cn06MDAgJHtzaWdufWA7XG4gIH1cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoZGF0YSwgdW5pdCwgYXZlcmFnZSwgdHlwZSkge1xuICAgIGxldCB1bml0U2lnbjtcbiAgICBsZXQgZGF0ZTtcbiAgICBpZiAodW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICB1bml0U2lnbiA9ICfCsEMnO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2ZhaHJlbmhlaXQnKSB7XG4gICAgICB1bml0U2lnbiA9ICfCsEYnO1xuICAgIH1cbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGJveC5jbGFzc05hbWUgPSAnYm94JztcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdib3gtaWNvbiBub3JtLXRleHQnO1xuICAgIG1pblRlbXAuY2xhc3NOYW1lID0gJ2JveC1taW4tdGVtcCBsaWdodC10ZXh0JztcbiAgICBtYXhUZW1wLmNsYXNzTmFtZSA9ICdib3gtbWF4LXRlbXAgbGlnaHQtdGV4dCc7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2RhaWx5Jykge1xuICAgICAgZGF0ZSA9IGRhdGFbMF0uZGF0ZS5nZXREYXRlKCk7XG4gICAgICBkYXkudGV4dENvbnRlbnQgPSBgJHtkYXlzW2RhdGFbMF0uZGF0ZS5nZXREYXkoKV0udG9VcHBlckNhc2UoKX0sICR7ZGFpbHlUaXRsZShkYXRlKX1gO1xuICAgICAgaWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YVswXS5pY29ufUAyeC5wbmdgO1xuICAgICAgZGF5LmNsYXNzTmFtZSA9ICdib3gtdGl0bGUtMSBub3JtLXRleHQnO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hvdXJseScpIHtcbiAgICAgIGRheS5jbGFzc05hbWUgPSAnYm94LXRpdGxlLTIgbm9ybS10ZXh0JztcbiAgICAgIGRhdGUgPSBkYXRhLmRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgZGF5LnRleHRDb250ZW50ID0gYCR7YW1QbShkYXRhLmRhdGUpfWA7XG4gICAgICBpY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDJ4LnBuZ2A7XG4gICAgfVxuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGF2ZXJhZ2UubWluKX0gJHt1bml0U2lnbn1gO1xuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGF2ZXJhZ2UubWF4KX0gJHt1bml0U2lnbn1gO1xuICAgIFtkYXksIGljb24sIG1pblRlbXAsIG1heFRlbXBdLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBib3guYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JveC1jb250YWluZXInKVswXS5hcHBlbmRDaGlsZChib3gpO1xuICB9XG4gIGZ1bmN0aW9uIGdldEF2ZXJhZ2UoZGF0YSkge1xuICAgIGxldCBhdmVyYWdlTWluID0gMDtcbiAgICBsZXQgYXZlcmFnZU1heCA9IDA7XG4gICAgZGF0YS5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGF2ZXJhZ2VNaW4gKz0gb2JqLnRlbXBfbWluO1xuICAgICAgYXZlcmFnZU1heCArPSBvYmoudGVtcF9tYXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbjogYXZlcmFnZU1pbiAvIGRhdGEubGVuZ3RoLFxuICAgICAgbWF4OiBhdmVyYWdlTWF4IC8gZGF0YS5sZW5ndGgsXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gtY29udGFpbmVyJylbMF0udGV4dENvbnRlbnQgPSAnJztcbiAgfVxuICBmdW5jdGlvbiBsb2FkKGRhdGFzLCB0eXBlLCB1bml0KSB7XG4gICAgcmVzZXQoKTtcbiAgICBpZiAodHlwZSA9PT0gJ2RhaWx5Jykge1xuICAgICAgZGF0YXMuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBhdmVyYWdlID0gZ2V0QXZlcmFnZShkYXRhKTtcbiAgICAgICAgZ2VuZXJhdGUoZGF0YSwgdW5pdCwgYXZlcmFnZSwgdHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdob3VybHknKSB7XG4gICAgICBkYXRhcy5zcGxpY2UoMiwgOCkuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICBnZW5lcmF0ZShcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIHVuaXQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWluOiBkYXRhLnRlbXBfbWluLFxuICAgICAgICAgICAgbWF4OiBkYXRhLnRlbXBfbWF4LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBsb2FkIH07XG59KCkpO1xuXG5mdW5jdGlvbiBtYWluTG9hZChtYWluRGF0YSwgZm9yZWNhc3REYXRhLCBmb3JlY2FzdFR5cGUsIHVuaXQpIHtcbiAgY29uc3Qgc2FuRGF0YSA9IGZvcmVjYXN0RGF0YS5maWx0ZXIoKGVsZW1lbnRzKSA9PiBlbGVtZW50cyAhPT0gJycpO1xuICBtYWluSW5mby5sb2FkKG1haW5EYXRhLCB1bml0KTtcbiAgbWFpbkluZm8ubG9hZENsb3VkKG1haW5EYXRhLCB0cnVlKTtcbiAgZm9yZWNhc3QubG9hZChzYW5EYXRhLCBmb3JlY2FzdFR5cGUsIHVuaXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IG1haW5Mb2FkLCBpY29uTG9hZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
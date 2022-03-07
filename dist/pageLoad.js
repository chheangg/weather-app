/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_min_temp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/min-temp.png */ "./src/assets/min-temp.png");
/* harmony import */ var _assets_max_temp_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/max-temp.png */ "./src/assets/max-temp.png");
/* harmony import */ var _assets_feels_like_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/feels-like.png */ "./src/assets/feels-like.png");
/* harmony import */ var _assets_visibility_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/visibility.png */ "./src/assets/visibility.png");
/* harmony import */ var _assets_wind_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wind.png */ "./src/assets/wind.png");
/* harmony import */ var _assets_humidity_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/humidity.png */ "./src/assets/humidity.png");







const icon = [
  {
    el: 'min-temp',
    icon: _assets_min_temp_png__WEBPACK_IMPORTED_MODULE_0__,
  },
  {
    el: 'max-temp',
    icon: _assets_max_temp_png__WEBPACK_IMPORTED_MODULE_1__,
  },
  {
    el: 'feel-like',
    icon: _assets_feels_like_png__WEBPACK_IMPORTED_MODULE_2__,
  },
  {
    el: 'visibility',
    icon: _assets_visibility_png__WEBPACK_IMPORTED_MODULE_3__,
  },
  {
    el: 'wind-speed',
    icon: _assets_wind_png__WEBPACK_IMPORTED_MODULE_4__,
  },
  {
    el: 'humidity',
    icon: _assets_humidity_png__WEBPACK_IMPORTED_MODULE_5__,
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ icon });


/***/ }),

/***/ "./src/assets/feels-like.png":
/*!***********************************!*\
  !*** ./src/assets/feels-like.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5ea4a9138c93ef29d6a.png";

/***/ }),

/***/ "./src/assets/humidity.png":
/*!*********************************!*\
  !*** ./src/assets/humidity.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f652baea27c0d1fdcbaf.png";

/***/ }),

/***/ "./src/assets/max-temp.png":
/*!*********************************!*\
  !*** ./src/assets/max-temp.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e084c7323a6f30ebee93.png";

/***/ }),

/***/ "./src/assets/min-temp.png":
/*!*********************************!*\
  !*** ./src/assets/min-temp.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7b69ea9f309af2098ba.png";

/***/ }),

/***/ "./src/assets/visibility.png":
/*!***********************************!*\
  !*** ./src/assets/visibility.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6071239546cfff267813.png";

/***/ }),

/***/ "./src/assets/wind.png":
/*!*****************************!*\
  !*** ./src/assets/wind.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e0536af103392aba3b6.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/js/pageLoad.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/js/config.js");


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
  iconLoad(_config__WEBPACK_IMPORTED_MODULE_0__["default"].icon);
  mainInfo.load(mainData);
  mainInfo.loadCloud(mainData, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ mainLoad });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDQTtBQUNJO0FBQ0M7QUFDWjtBQUNROztBQUU5QztBQUNBO0FBQ0E7QUFDQSxVQUFVLGlEQUFPO0FBQ2pCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsVUFBVSxpREFBTztBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFVBQVUsbURBQVM7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQSxVQUFVLG1EQUFVO0FBQ3BCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsVUFBVSw2Q0FBSTtBQUNkLEdBQUc7QUFDSDtBQUNBO0FBQ0EsVUFBVSxpREFBUTtBQUNsQixHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsRUFBRSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usc0JBQXNCO0FBQ3RGO0FBQ0EsOERBQThELDBCQUEwQjtBQUN4RjtBQUNBLDhEQUE4RCwwQkFBMEI7QUFDeEY7QUFDQSw4REFBOEQsNEJBQTRCO0FBQzFGO0FBQ0EsOERBQThELGtDQUFrQztBQUNoRztBQUNBLDhEQUE4RCwwQkFBMEI7QUFDeEY7QUFDQSw4REFBOEQsbUNBQW1DO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxVQUFVO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBLFdBQVcsb0RBQWM7QUFDekI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9wYWdlTG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWluVGVtcCBmcm9tICcuLi9hc3NldHMvbWluLXRlbXAucG5nJztcbmltcG9ydCBtYXhUZW1wIGZyb20gJy4uL2Fzc2V0cy9tYXgtdGVtcC5wbmcnO1xuaW1wb3J0IGZlZWxzTGlrZSBmcm9tICcuLi9hc3NldHMvZmVlbHMtbGlrZS5wbmcnO1xuaW1wb3J0IHZpc2liaWxpdHkgZnJvbSAnLi4vYXNzZXRzL3Zpc2liaWxpdHkucG5nJztcbmltcG9ydCB3aW5kIGZyb20gJy4uL2Fzc2V0cy93aW5kLnBuZyc7XG5pbXBvcnQgaHVtaWRpdHkgZnJvbSAnLi4vYXNzZXRzL2h1bWlkaXR5LnBuZyc7XG5cbmNvbnN0IGljb24gPSBbXG4gIHtcbiAgICBlbDogJ21pbi10ZW1wJyxcbiAgICBpY29uOiBtaW5UZW1wLFxuICB9LFxuICB7XG4gICAgZWw6ICdtYXgtdGVtcCcsXG4gICAgaWNvbjogbWF4VGVtcCxcbiAgfSxcbiAge1xuICAgIGVsOiAnZmVlbC1saWtlJyxcbiAgICBpY29uOiBmZWVsc0xpa2UsXG4gIH0sXG4gIHtcbiAgICBlbDogJ3Zpc2liaWxpdHknLFxuICAgIGljb246IHZpc2liaWxpdHksXG4gIH0sXG4gIHtcbiAgICBlbDogJ3dpbmQtc3BlZWQnLFxuICAgIGljb246IHdpbmQsXG4gIH0sXG4gIHtcbiAgICBlbDogJ2h1bWlkaXR5JyxcbiAgICBpY29uOiBodW1pZGl0eSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHsgaWNvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHdlYkNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGljb25Mb2FkKGNvbmZpZykge1xuICBjb25maWcuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShvYmouZWwpWzBdO1xuICAgIGNvbnN0IHRpdGxlQm94ID0gYm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Yi1pbm5lci1ib3gnKVswXTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGltZy5zcmMgPSBvYmouaWNvbjtcbiAgICBpbWcuY2xhc3NOYW1lID0gJ2ljb24nO1xuICAgIHRpdGxlQm94Lmluc2VydEJlZm9yZShpbWcsIHRpdGxlQm94LmZpcnN0Q2hpbGQpO1xuICB9KTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbmNvbnN0IG1haW5JbmZvID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gbG9hZChkYXRhKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eS1uYW1lJylbMF0udGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi10ZW1wJylbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaWdodC10ZXh0JylbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEudGVtcCl9wrBgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21pbi10ZW1wJylbMF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdWItZGF0YScpWzBdLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihkYXRhLnRlbXBfbWluKX3CsGA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWF4LXRlbXAnKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Yi1kYXRhJylbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEudGVtcF9tYXgpfcKwYDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVsLWxpa2UnKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Yi1kYXRhJylbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEuZmVlbHNfbGlrZSl9wrBgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Zpc2liaWxpdHknKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Yi1kYXRhJylbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEudmlzaWJpbGl0eSAvIDEwMCl9JWA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHknKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Yi1kYXRhJylbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEuaHVtaWRpdHkpfSVgO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmQtc3BlZWQnKVswXVxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N1Yi1kYXRhJylbMF0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuc3BlZWQgKiAxMDApIC8gMTAwfUttL2hgO1xuICB9XG4gIGZ1bmN0aW9uIGxvYWRDbG91ZChkYXRhLCBpc01haW4pIHtcbiAgICBjb25zdCBjbG91ZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG91ZEljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbn1AMngucG5nYDtcbiAgICBpZiAoaXNNYWluID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1pbmZvJylbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nLWNvbnRhaW5lcicpWzBdO1xuICAgICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG91ZEljb24pO1xuICAgICAgaWNvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2xvdWQtaW1nJztcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4taW5mbycpWzBdXG4gICAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG91ZC1kZXNjJylbMF0udGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBsb2FkLCBsb2FkQ2xvdWQgfTtcbn0oKSk7XG5cbmZ1bmN0aW9uIG1haW5Mb2FkKG1haW5EYXRhKSB7XG4gIGljb25Mb2FkKHdlYkNvbmZpZy5pY29uKTtcbiAgbWFpbkluZm8ubG9hZChtYWluRGF0YSk7XG4gIG1haW5JbmZvLmxvYWRDbG91ZChtYWluRGF0YSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgbWFpbkxvYWQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
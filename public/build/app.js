/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../scss/main.scss */ "./assets/scss/main.scss");

var onclickStage = document.querySelector('.onclick_stage');
var onclickTribunaux = document.querySelector('.onclick_tribunaux');
var onclickAnimateur = document.querySelector('.onclick_animateur');
var onclickPrefecture = document.querySelector('.onclick_prefecture');
var blueArrow = document.querySelector('.angle_blue');
var orangeArrow = document.querySelector('.angle_orange');
var purpleArrow = document.querySelector('.angle_purple');
var redArrow = document.querySelector('.angle_red');
var myDropdownMenu1 = document.querySelector('.list_stages');
var myDropdownMenu2 = document.querySelector('.list_tribunaux');
var myDropdownMenu3 = document.querySelector('.list_animateurs');
var myDropdownMenu4 = document.querySelector('.list_prefectures');
var activeStageList = document.querySelector('.active_stage_liste');
var activeLieuStage = document.querySelector('.active_lieu_stage');
var activeTribunalList = document.querySelector('.active_tribunal_liste');
var activeTribunalAutorite = document.querySelector('.active_tribunal_autorite');
var activeTribunalService = document.querySelector('.active_tribunal_service');
var activeAnimateurList = document.querySelector('.active_animateur_liste');
var activeAnimateurFonction = document.querySelector('.active_animateur_fonction');
var activeAnimateurStatut = document.querySelector('.active_animateur_statut');
var activePrefectureList = document.querySelector('.active_prefecture_liste');
var activePrefectureAutorite = document.querySelector('.active_prefecture_autorite');
var activePrefectureService = document.querySelector('.active_prefecture_service');
var blueArrowValue = 0;
var orangeArrowValue = 0;
var purpleArrowValue = 0;
var redArrowValue = 0;
var url = document.URL;
var pathname = new URL(url).pathname;
window.onload = changeActiveButton();
onclickStage.addEventListener('click', function () {
  if (redArrowValue == 0) {
    redArrow.style.transform = 'rotate(90deg)';
    blueArrow.style.transform = 'rotate(0deg)';
    orangeArrow.style.transform = 'rotate(0deg)';
    purpleArrow.style.transform = 'rotate(0deg)';
    myDropdownMenu1.style.display = 'block';
    myDropdownMenu2.style.display = 'none';
    myDropdownMenu3.style.display = 'none';
    myDropdownMenu4.style.display = 'none';
    myDropdownMenu1.style.opacity = '1';
    redArrowValue = 1;
    blueArrowValue = 0;
    orangeArrowValue = 0;
    purpleArrowValue = 0;
  } else {
    redArrow.style.transform = 'rotate(0deg)';
    myDropdownMenu1.style.display = 'none';
    myDropdownMenu1.style.opacity = '0';
    redArrowValue = 0;
  }
});
onclickTribunaux.addEventListener('click', function () {
  if (blueArrowValue == 0) {
    blueArrow.style.transform = 'rotate(90deg)';
    redArrow.style.transform = 'rotate(0deg)';
    orangeArrow.style.transform = 'rotate(0deg)';
    purpleArrow.style.transform = 'rotate(0deg)';
    myDropdownMenu1.style.display = 'none';
    myDropdownMenu2.style.display = 'block';
    myDropdownMenu3.style.display = 'none';
    myDropdownMenu4.style.display = 'none';
    myDropdownMenu2.style.opacity = '1';
    redArrowValue = 0;
    blueArrowValue = 1;
    orangeArrowValue = 0;
    purpleArrowValue = 0;
  } else {
    blueArrow.style.transform = 'rotate(0deg)';
    myDropdownMenu2.style.display = 'none';
    myDropdownMenu2.style.opacity = '0';
    blueArrowValue = 0;
  }
});
onclickAnimateur.addEventListener('click', function () {
  if (orangeArrowValue == 0) {
    blueArrow.style.transform = 'rotate(0deg)';
    redArrow.style.transform = 'rotate(0deg)';
    orangeArrow.style.transform = 'rotate(90deg)';
    purpleArrow.style.transform = 'rotate(0deg)';
    myDropdownMenu1.style.display = 'none';
    myDropdownMenu2.style.display = 'none';
    myDropdownMenu3.style.display = 'block';
    myDropdownMenu4.style.display = 'none';
    myDropdownMenu3.style.opacity = '1';
    redArrowValue = 0;
    blueArrowValue = 0;
    orangeArrowValue = 1;
    purpleArrowValue = 0;
  } else {
    orangeArrow.style.transform = 'rotate(0deg)';
    myDropdownMenu3.style.display = 'none';
    myDropdownMenu3.style.opacity = '0';
    orangeArrowValue = 0;
  }
});
onclickPrefecture.addEventListener('click', function () {
  if (purpleArrowValue == 0) {
    blueArrow.style.transform = 'rotate(0deg)';
    redArrow.style.transform = 'rotate(0deg)';
    orangeArrow.style.transform = 'rotate(0deg)';
    purpleArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu1.style.display = 'none';
    myDropdownMenu2.style.display = 'none';
    myDropdownMenu3.style.display = 'none';
    myDropdownMenu4.style.display = 'block';
    myDropdownMenu4.style.opacity = '1';
    redArrowValue = 0;
    blueArrowValue = 0;
    orangeArrowValue = 0;
    purpleArrowValue = 1;
  } else {
    purpleArrow.style.transform = 'rotate(0deg)';
    myDropdownMenu4.style.display = 'none';
    myDropdownMenu4.style.opacity = '0';
    purpleArrowValue = 0;
  }
});

function changeActiveButton() {
  if (pathname == '/admin/stage') {
    redArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu1.style.display = 'block';
    myDropdownMenu1.style.opacity = '1';
    activeStageList.style.color = '#ff5744';
    activeStageList.style.fontWeight = 'bold';
    redArrowValue = 1;
  }

  if (pathname == '/admin/stage/lieuStage') {
    redArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu1.style.display = 'block';
    myDropdownMenu1.style.opacity = '1';
    activeLieuStage.style.color = '#ff5744';
    activeLieuStage.style.fontWeight = 'bold';
    redArrowValue = 1;
  }

  if (pathname == '/admin/tribunal') {
    blueArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu2.style.display = 'block';
    myDropdownMenu2.style.opacity = '1';
    activeTribunalList.style.color = '#4098f3';
    activeTribunalList.style.fontWeight = 'bold';
    blueArrowValue = 1;
  }

  if (pathname == '/admin/tribunal/autorite') {
    blueArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu2.style.display = 'block';
    myDropdownMenu2.style.opacity = '1';
    activeTribunalAutorite.style.color = '#4098f3';
    activeTribunalAutorite.style.fontWeight = 'bold';
    blueArrowValue = 1;
  }

  if (pathname == '/admin/tribunal/service') {
    blueArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu2.style.display = 'block';
    myDropdownMenu2.style.opacity = '1';
    activeTribunalService.style.color = '#4098f3';
    activeTribunalService.style.fontWeight = 'bold';
    blueArrowValue = 1;
  }

  if (pathname == '/admin/animateur') {
    orangeArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu3.style.display = 'block';
    myDropdownMenu3.style.opacity = '1';
    activeAnimateurList.style.color = '#ff9738';
    activeAnimateurList.style.fontWeight = 'bold';
    orangeArrowValue = 1;
  }

  if (pathname == '/admin/animateur/fonction') {
    orangeArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu3.style.display = 'block';
    myDropdownMenu3.style.opacity = '1';
    activeAnimateurFonction.style.color = '#ff9738';
    activeAnimateurFonction.style.fontWeight = 'bold';
    orangeArrowValue = 1;
  }

  if (pathname == '/admin/animateur/statut') {
    orangeArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu3.style.display = 'block';
    myDropdownMenu3.style.opacity = '1';
    activeAnimateurStatut.style.color = '#ff9738';
    activeAnimateurStatut.style.fontWeight = 'bold';
    orangeArrowValue = 1;
  }

  if (pathname == '/admin/prefecture') {
    purpleArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu4.style.display = 'block';
    myDropdownMenu4.style.opacity = '1';
    activePrefectureList.style.color = '#9c2db3';
    activePrefectureList.style.fontWeight = 'bold';
    purpleArrowValue = 1;
  }

  if (pathname == '/admin/prefecture/autorite') {
    purpleArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu4.style.display = 'block';
    myDropdownMenu4.style.opacity = '1';
    activePrefectureAutorite.style.color = '#9c2db3';
    activePrefectureAutorite.style.fontWeight = 'bold';
    purpleArrowValue = 1;
  }

  if (pathname == '/admin/prefecture/service') {
    purpleArrow.style.transform = 'rotate(90deg)';
    myDropdownMenu4.style.display = 'block';
    myDropdownMenu4.style.opacity = '1';
    activePrefectureService.style.color = '#9c2db3';
    activePrefectureService.style.fontWeight = 'bold';
    purpleArrowValue = 1;
  }
}

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9tYWluLnNjc3M/MzRmZSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwib25jbGlja1N0YWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGlja1RyaWJ1bmF1eCIsIm9uY2xpY2tBbmltYXRldXIiLCJvbmNsaWNrUHJlZmVjdHVyZSIsImJsdWVBcnJvdyIsIm9yYW5nZUFycm93IiwicHVycGxlQXJyb3ciLCJyZWRBcnJvdyIsIm15RHJvcGRvd25NZW51MSIsIm15RHJvcGRvd25NZW51MiIsIm15RHJvcGRvd25NZW51MyIsIm15RHJvcGRvd25NZW51NCIsImFjdGl2ZVN0YWdlTGlzdCIsImFjdGl2ZUxpZXVTdGFnZSIsImFjdGl2ZVRyaWJ1bmFsTGlzdCIsImFjdGl2ZVRyaWJ1bmFsQXV0b3JpdGUiLCJhY3RpdmVUcmlidW5hbFNlcnZpY2UiLCJhY3RpdmVBbmltYXRldXJMaXN0IiwiYWN0aXZlQW5pbWF0ZXVyRm9uY3Rpb24iLCJhY3RpdmVBbmltYXRldXJTdGF0dXQiLCJhY3RpdmVQcmVmZWN0dXJlTGlzdCIsImFjdGl2ZVByZWZlY3R1cmVBdXRvcml0ZSIsImFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlIiwiYmx1ZUFycm93VmFsdWUiLCJvcmFuZ2VBcnJvd1ZhbHVlIiwicHVycGxlQXJyb3dWYWx1ZSIsInJlZEFycm93VmFsdWUiLCJ1cmwiLCJVUkwiLCJwYXRobmFtZSIsIndpbmRvdyIsIm9ubG9hZCIsImNoYW5nZUFjdGl2ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsInRyYW5zZm9ybSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiY29sb3IiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsInJlcXVpcmUoJy4uL3Njc3MvbWFpbi5zY3NzJyk7XG5cbmNvbnN0IG9uY2xpY2tTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3N0YWdlJyk7XG5jb25zdCBvbmNsaWNrVHJpYnVuYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfdHJpYnVuYXV4Jyk7XG5jb25zdCBvbmNsaWNrQW5pbWF0ZXVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfYW5pbWF0ZXVyJyk7XG5jb25zdCBvbmNsaWNrUHJlZmVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3ByZWZlY3R1cmUnKTtcblxuY29uc3QgYmx1ZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX2JsdWUnKTtcbmNvbnN0IG9yYW5nZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX29yYW5nZScpO1xuY29uc3QgcHVycGxlQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcHVycGxlJyk7XG5jb25zdCByZWRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9yZWQnKTtcblxuY29uc3QgbXlEcm9wZG93bk1lbnUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Rfc3RhZ2VzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF90cmlidW5hdXgnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X2FuaW1hdGV1cnMnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3ByZWZlY3R1cmVzJyk7XG5cbmNvbnN0IGFjdGl2ZVN0YWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfc3RhZ2VfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZUxpZXVTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfbGlldV9zdGFnZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV90cmlidW5hbF9saXN0ZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfc2VydmljZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2ZvbmN0aW9uJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJTdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9zdGF0dXQnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3ByZWZlY3R1cmVfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX3NlcnZpY2UnKTtcblxubGV0IGJsdWVBcnJvd1ZhbHVlID0gMDtcbmxldCBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbmxldCBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbmxldCByZWRBcnJvd1ZhbHVlID0gMDtcblxubGV0IHVybCA9IGRvY3VtZW50LlVSTDtcbmxldCBwYXRobmFtZSA9IG5ldyBVUkwodXJsKS5wYXRobmFtZTtcblxud2luZG93Lm9ubG9hZCA9IGNoYW5nZUFjdGl2ZUJ1dHRvbigpO1xuXG5vbmNsaWNrU3RhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKHJlZEFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja1RyaWJ1bmF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoYmx1ZUFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrQW5pbWF0ZXVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihvcmFuZ2VBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG9yYW5nZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tQcmVmZWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihwdXJwbGVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ1dHRvbigpe1xuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlJykge1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5jb2xvciA9ICcjZmY1NzQ0JztcbiAgICAgICAgYWN0aXZlU3RhZ2VMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlL2xpZXVTdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZUxpZXVTdGFnZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbCcpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbExpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9zZXJ2aWNlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzQwOThmMyc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uLnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9hbmltYXRldXIvc3RhdHV0Jykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUxpc3Quc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlJykge1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlLnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
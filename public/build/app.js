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

<<<<<<< HEAD
var autorite = document.getElementById('autoriteInput');
var button = document.querySelector('.ajouter');
var close = document.querySelector('.close');
var close2 = document.querySelector('.close2');
var close3 = document.querySelector('.close3');
var close4 = document.querySelector('.close4');
=======
var onclickStage = document.querySelector('.onclick_stage');
var onclickTribunaux = document.querySelector('.onclick_tribunaux');
var onclickAnimateur = document.querySelector('.onclick_animateur');
var onclickPrefecture = document.querySelector('.onclick_prefecture');
>>>>>>> 6bfc30230dbbacd8d4650cd85950c3f7173d63a8
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

document.onreadystatechange = function () {
  loadFormAutoriteTribunal();
  loadFormTribunalService();
  loadFormPrefectureService();
  loadFormPrefectureAutorite();
};

function loadFormAutoriteTribunal() {
  var autorite = document.querySelector('#addAutoriteTribunal');

  if (autorite != null) {
    fetch("/admin/tribunal/autorite/loadFormAutoriteTribunal", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCart .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCart .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom').value.length != 0) {
              console.log('coucou');

              var _autorite = document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom');

              var token = document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite__token');
              var data = new FormData();
              data.append("tribunal_autorite_nom", _autorite.value);
              data.append("tribunal_autorite__token", token.value);
              fetch("/admin/tribunal/autorite/loadFormAutoriteTribunal", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.text();
              }).then(function (resultat) {
                var resultatJson = JSON.parse(resultat);

                if (resultatJson.value != null) {
                  var selectTribunalAutorite = document.querySelector('#tribunal_tribunal_autorite');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultatJson.id);
                  option.text = resultatJson.value;
                  selectTribunalAutorite.add(option);
                  selectTribunalAutorite.selectedIndex = selectTribunalAutorite.length - 1;
                  close.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
            } else {
              document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom').classList.add('error');
            }
          });
        }
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

function loadFormTribunalService() {
  var service = document.querySelector('#addServiceTribunal');

  if (service != null) {
    fetch("/admin/tribunal/service/loadFormServiceTribunal", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCart2 .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCart2 .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="tribunal_service"] #tribunal_service_nom').value.length != 0) {
              var _service = document.querySelector('form[name="tribunal_service"] #tribunal_service_nom');

              var token = document.querySelector('form[name="tribunal_service"] #tribunal_service__token');
              var data = new FormData();
              data.append("tribunal_service_nom", _service.value);
              data.append("tribunal_service_token", token.value);
              fetch("/admin/tribunal/service/loadFormServiceTribunal", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.text();
              }).then(function (resultat) {
                var resultatJson = JSON.parse(resultat);

                if (resultatJson.value != null) {
                  var selectTribunalService = document.querySelector('#tribunal_tribunal_service');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultatJson.id);
                  option.text = resultatJson.value;
                  selectTribunalService.add(option);
                  selectTribunalService.selectedIndex = selectTribunalService.length - 1;
                  close2.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
            } else {
              document.querySelector('form[name="tribunal_service"] #tribunal_service_nom').classList.add('error');
            }
          });
        }
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

function loadFormPrefectureService() {
  var service = document.querySelector('#addServicePrefecture');

  if (service != null) {
    fetch("/admin/prefecture/service/loadFormServicePrefecture", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCart3 .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCart3 .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="prefecture_service"] #prefecture_service_nom').value.length != 0) {
              var _service2 = document.querySelector('form[name="prefecture_service"] #prefecture_service_nom');

              var token = document.querySelector('form[name="prefecture_service"] #prefecture_service__token');
              var data = new FormData();
              data.append("prefecture_service_nom", _service2.value);
              data.append("prefecture_service__token", token.value);
              fetch("/admin/prefecture/service/loadFormServicePrefecture", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.text();
              }).then(function (resultat) {
                var resultatJson = JSON.parse(resultat);

                if (resultatJson.value != null) {
                  var selectPrefectureService = document.querySelector('#prefecture_prefectureService');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultatJson.id);
                  option.text = resultatJson.value;
                  selectPrefectureService.add(option);
                  selectPrefectureService.selectedIndex = selectPrefectureService.length - 1;
                  close3.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
            } else {
              document.querySelector('form[name="prefecture_service"] #prefecture_service_nom').classList.add('error');
            }
          });
        }
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

function loadFormPrefectureAutorite() {
  var autorite = document.querySelector('#addAutoritePrefecture');

  if (autorite != null) {
    fetch("/admin/prefecture/autorite/loadFormAutoritePrefecture", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCart4 .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCart4 .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite_nom').value.length != 0) {
              var _autorite2 = document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite_nom');

              var token = document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite__token');
              var data = new FormData();
              data.append("prefecture_autorite_nom", _autorite2.value);
              data.append("prefecture_autorite__token", token.value);
              fetch("/admin/prefecture/autorite/loadFormAutoritePrefecture", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.text();
              }).then(function (resultat) {
                var resultatJson = JSON.parse(resultat);

                if (resultatJson.value != null) {
                  var selectPrefectureAutorite = document.querySelector('#prefecture_prefectureAutorite');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultatJson.id);
                  option.text = resultatJson.value;
                  selectPrefectureAutorite.add(option);
                  selectPrefectureAutorite.selectedIndex = selectPrefectureAutorite.length - 1;
                  close4.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
            } else {
              document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite_nom').classList.add('error');
            }
          });
        }
      }
    }).catch(function (error) {
      console.log(error);
    });
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsImF1dG9yaXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZSIsImNsb3NlMiIsImNsb3NlMyIsImNsb3NlNCIsImJsdWVBcnJvdyIsIm9yYW5nZUFycm93IiwicHVycGxlQXJyb3ciLCJyZWRBcnJvdyIsIm15RHJvcGRvd25NZW51MSIsIm15RHJvcGRvd25NZW51MiIsIm15RHJvcGRvd25NZW51MyIsIm15RHJvcGRvd25NZW51NCIsImJsdWVBcnJvd1ZhbHVlIiwib3JhbmdlQXJyb3dWYWx1ZSIsInB1cnBsZUFycm93VmFsdWUiLCJyZWRBcnJvd1ZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwiLCJsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSIsImxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UiLCJsb2FkRm9ybVByZWZlY3R1cmVBdXRvcml0ZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVwb25zZSIsInRleHQiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJidG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsImJvZHkiLCJyZXN1bHRhdCIsInJlc3VsdGF0SnNvbiIsIkpTT04iLCJwYXJzZSIsInNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUiLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJhZGQiLCJzZWxlY3RlZEluZGV4IiwiY2xpY2siLCJjYXRjaCIsImVycm9yIiwiY2xhc3NMaXN0Iiwic2VydmljZSIsInNlbGVjdFRyaWJ1bmFsU2VydmljZSIsInNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlIiwic2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLG1CQUFPLENBQUMsa0RBQUQsQ0FBUDs7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFqQjtBQUVBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFVBQXZCLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsSUFBTUUsTUFBTSxHQUFHTCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsU0FBdkIs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QXdCLENBQUNULEdBQXpCLENBQTZCSixNQUE3QjtBQUNBYSwwQ0FBd0IsQ0FBQ1IsYUFBekIsR0FBeUNRLHdCQUF3QixDQUFDaEMsTUFBekIsR0FBa0MsQ0FBM0U7QUFDQTVCLHdCQUFNLENBQUNxRCxLQUFQO0FBQ0g7QUFDSixlQWxCRCxFQWtCR0MsS0FsQkgsQ0FrQlMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCckIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsS0FBWjtBQUNILGVBcEJEO0FBcUJILGFBL0JELE1BK0JLO0FBQ0Q5RCxzQkFBUSxDQUFDRyxhQUFULENBQXVCLDJEQUF2QixFQUFvRjRELFNBQXBGLENBQThGTCxHQUE5RixDQUFrRyxPQUFsRztBQUNIO0FBQ0osV0FyQ0Q7QUFzQ0g7QUFDSjtBQUNKLEtBbERELEVBa0RHRyxLQWxESCxDQWtEUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJyQixhQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEtBQVo7QUFDSCxLQXBERDtBQXFESDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDdlVELHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG4iLCJyZXF1aXJlKCcuLi9zY3NzL21haW4uc2NzcycpO1xuXG5jb25zdCBhdXRvcml0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvcml0ZUlucHV0Jyk7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ham91dGVyJyk7XG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuY29uc3QgY2xvc2UyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlMicpO1xuY29uc3QgY2xvc2UzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlMycpO1xuY29uc3QgY2xvc2U0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlNCcpO1xuXG5jb25zdCBibHVlQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfYmx1ZScpO1xuY29uc3Qgb3JhbmdlQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfb3JhbmdlJyk7XG5jb25zdCBwdXJwbGVBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9wdXJwbGUnKTtcbmNvbnN0IHJlZEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX3JlZCcpO1xuXG5jb25zdCBteURyb3Bkb3duTWVudTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9zdGFnZXMnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3RyaWJ1bmF1eCcpO1xuY29uc3QgbXlEcm9wZG93bk1lbnUzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfYW5pbWF0ZXVycycpO1xuY29uc3QgbXlEcm9wZG93bk1lbnU0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfcHJlZmVjdHVyZXMnKTtcblxubGV0IGJsdWVBcnJvd1ZhbHVlID0gMDtcbmxldCBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbmxldCBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbmxldCByZWRBcnJvd1ZhbHVlID0gMDtcblxuYmx1ZUFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihibHVlQXJyb3dWYWx1ZSA9PSAwKXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9yYW5nZUFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihvcmFuZ2VBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5wdXJwbGVBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYocHVycGxlQXJyb3dWYWx1ZSA9PSAwKXtcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxucmVkQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKHJlZEFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cblxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCgpO1xuICAgIGxvYWRGb3JtVHJpYnVuYWxTZXJ2aWNlKCk7XG4gICAgbG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSgpO1xuICAgIGxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlKCk7XG59XG5cblxuZnVuY3Rpb24gbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsKCl7XG4gICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEF1dG9yaXRlVHJpYnVuYWwnKTtcblxuICAgIGlmKGF1dG9yaXRlICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWxcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvdWNvdScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfYXV0b3JpdGVfbm9tXCIsIGF1dG9yaXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2F1dG9yaXRlX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWxcIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0LnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRhdEpzb24gPSBKU09OLnBhcnNlKHJlc3VsdGF0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdEpzb24udmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RUcmlidW5hbEF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX2F1dG9yaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdEpzb24uaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdEpzb24udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxBdXRvcml0ZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0VHJpYnVuYWxBdXRvcml0ZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlLmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSgpe1xuICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFNlcnZpY2VUcmlidW5hbCcpO1xuICAgIFxuICAgIGlmKHNlcnZpY2UgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3RyaWJ1bmFsL3NlcnZpY2UvbG9hZEZvcm1TZXJ2aWNlVHJpYnVuYWxcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQyIC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MiAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX3NlcnZpY2VcIl0gI3RyaWJ1bmFsX3NlcnZpY2Vfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX3NlcnZpY2VcIl0gI3RyaWJ1bmFsX3NlcnZpY2VfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX3NlcnZpY2Vfbm9tXCIsIHNlcnZpY2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfc2VydmljZV90b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVRyaWJ1bmFsXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0YXRKc29uID0gSlNPTi5wYXJzZShyZXN1bHRhdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXRKc29uLnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0SnNvbi5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0SnNvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsU2VydmljZS5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsU2VydmljZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0VHJpYnVuYWxTZXJ2aWNlLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UyLmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX3NlcnZpY2VcIl0gI3RyaWJ1bmFsX3NlcnZpY2Vfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSgpe1xuICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFNlcnZpY2VQcmVmZWN0dXJlJyk7XG4gICAgXG4gICAgaWYoc2VydmljZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVByZWZlY3R1cmVcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQzIC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MyAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2VfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfc2VydmljZV9ub21cIiwgc2VydmljZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX3NlcnZpY2VfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VQcmVmZWN0dXJlXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdGF0SnNvbiA9IEpTT04ucGFyc2UocmVzdWx0YXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0SnNvbi52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWZlY3R1cmVfcHJlZmVjdHVyZVNlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0SnNvbi5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0SnNvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2Uuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UzLmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlKCl7XG4gICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEF1dG9yaXRlUHJlZmVjdHVyZScpO1xuXG4gICAgaWYoYXV0b3JpdGUgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVByZWZlY3R1cmVcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ0IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NCAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9ub21cIiwgYXV0b3JpdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdGF0SnNvbiA9IEpTT04ucGFyc2UocmVzdWx0YXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0SnNvbi52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVmZWN0dXJlX3ByZWZlY3R1cmVBdXRvcml0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXRKc29uLmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXRKc29uLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTQuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9tYWluLnNjc3M/MzRmZSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwib25jbGlja1N0YWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGlja1RyaWJ1bmF1eCIsIm9uY2xpY2tBbmltYXRldXIiLCJvbmNsaWNrUHJlZmVjdHVyZSIsImJsdWVBcnJvdyIsIm9yYW5nZUFycm93IiwicHVycGxlQXJyb3ciLCJyZWRBcnJvdyIsIm15RHJvcGRvd25NZW51MSIsIm15RHJvcGRvd25NZW51MiIsIm15RHJvcGRvd25NZW51MyIsIm15RHJvcGRvd25NZW51NCIsImFjdGl2ZVN0YWdlTGlzdCIsImFjdGl2ZUxpZXVTdGFnZSIsImFjdGl2ZVRyaWJ1bmFsTGlzdCIsImFjdGl2ZVRyaWJ1bmFsQXV0b3JpdGUiLCJhY3RpdmVUcmlidW5hbFNlcnZpY2UiLCJhY3RpdmVBbmltYXRldXJMaXN0IiwiYWN0aXZlQW5pbWF0ZXVyRm9uY3Rpb24iLCJhY3RpdmVBbmltYXRldXJTdGF0dXQiLCJhY3RpdmVQcmVmZWN0dXJlTGlzdCIsImFjdGl2ZVByZWZlY3R1cmVBdXRvcml0ZSIsImFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlIiwiYmx1ZUFycm93VmFsdWUiLCJvcmFuZ2VBcnJvd1ZhbHVlIiwicHVycGxlQXJyb3dWYWx1ZSIsInJlZEFycm93VmFsdWUiLCJ1cmwiLCJVUkwiLCJwYXRobmFtZSIsIndpbmRvdyIsIm9ubG9hZCIsImNoYW5nZUFjdGl2ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsInRyYW5zZm9ybSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiY29sb3IiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsInJlcXVpcmUoJy4uL3Njc3MvbWFpbi5zY3NzJyk7XG5cbmNvbnN0IG9uY2xpY2tTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3N0YWdlJyk7XG5jb25zdCBvbmNsaWNrVHJpYnVuYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfdHJpYnVuYXV4Jyk7XG5jb25zdCBvbmNsaWNrQW5pbWF0ZXVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfYW5pbWF0ZXVyJyk7XG5jb25zdCBvbmNsaWNrUHJlZmVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3ByZWZlY3R1cmUnKTtcblxuY29uc3QgYmx1ZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX2JsdWUnKTtcbmNvbnN0IG9yYW5nZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX29yYW5nZScpO1xuY29uc3QgcHVycGxlQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcHVycGxlJyk7XG5jb25zdCByZWRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9yZWQnKTtcblxuY29uc3QgbXlEcm9wZG93bk1lbnUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Rfc3RhZ2VzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF90cmlidW5hdXgnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X2FuaW1hdGV1cnMnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3ByZWZlY3R1cmVzJyk7XG5cbmNvbnN0IGFjdGl2ZVN0YWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfc3RhZ2VfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZUxpZXVTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfbGlldV9zdGFnZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV90cmlidW5hbF9saXN0ZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfc2VydmljZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2ZvbmN0aW9uJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJTdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9zdGF0dXQnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3ByZWZlY3R1cmVfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX3NlcnZpY2UnKTtcblxubGV0IGJsdWVBcnJvd1ZhbHVlID0gMDtcbmxldCBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbmxldCBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbmxldCByZWRBcnJvd1ZhbHVlID0gMDtcblxubGV0IHVybCA9IGRvY3VtZW50LlVSTDtcbmxldCBwYXRobmFtZSA9IG5ldyBVUkwodXJsKS5wYXRobmFtZTtcblxud2luZG93Lm9ubG9hZCA9IGNoYW5nZUFjdGl2ZUJ1dHRvbigpO1xuXG5vbmNsaWNrU3RhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKHJlZEFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja1RyaWJ1bmF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoYmx1ZUFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrQW5pbWF0ZXVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihvcmFuZ2VBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG9yYW5nZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tQcmVmZWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihwdXJwbGVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ1dHRvbigpe1xuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlJykge1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5jb2xvciA9ICcjZmY1NzQ0JztcbiAgICAgICAgYWN0aXZlU3RhZ2VMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlL2xpZXVTdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZUxpZXVTdGFnZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbCcpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbExpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9zZXJ2aWNlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzQwOThmMyc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uLnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9hbmltYXRldXIvc3RhdHV0Jykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUxpc3Quc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlJykge1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlLnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 6bfc30230dbbacd8d4650cd85950c3f7173d63a8

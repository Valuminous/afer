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

__webpack_require__(/*! ../js/popUp.js */ "./assets/js/popUp.js");

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
}

if (pathname == '/admin/prefecture/service') {
  purpleArrow.style.transform = 'rotate(90deg)';
  myDropdownMenu4.style.display = 'block';
  myDropdownMenu4.style.opacity = '1';
  activePrefectureService.style.color = '#9c2db3';
  activePrefectureService.style.fontWeight = 'bold';
  purpleArrowValue = 1;
}

/***/ }),

/***/ "./assets/js/popUp.js":
/*!****************************!*\
  !*** ./assets/js/popUp.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var close = document.querySelector('.close');
var close2 = document.querySelector('.close2');
var close3 = document.querySelector('.close3');
var close4 = document.querySelector('.close4');
var close5 = document.querySelector('.close5');
var close6 = document.querySelector('.close6'); // pop-up ajout service/autorité/statut/fonction dans entité tribunal/préfécture/animateur

document.onreadystatechange = function () {
  loadFormAutoriteTribunal();
  loadFormTribunalService();
  loadFormPrefectureService();
  loadFormPrefectureAutorite();
  loadFormAnimateurFonction();
  loadFormAnimateurStatut();
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
                return resultat.json();
              }).then(function (resultat) {
                if (resultat.value != null) {
                  var selectTribunalAutorite = document.querySelector('#tribunal_tribunal_autorite');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
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
                return resultat.json();
              }).then(function (resultat) {
                if (resultat.value != null) {
                  var selectTribunalService = document.querySelector('#tribunal_tribunal_service');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
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
                return resultat.json();
              }).then(function (resultat) {
                if (resultat.value != null) {
                  var selectPrefectureService = document.querySelector('#prefecture_prefectureService');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
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
                return resultat.json();
              }).then(function (resultat) {
                if (resultat.value != null) {
                  var selectPrefectureAutorite = document.querySelector('#prefecture_prefectureAutorite');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
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

function loadFormAnimateurFonction() {
  var fonction = document.querySelector('#addFonctionAnimateur');

  if (fonction != null) {
    fetch("/admin/animateur/fonction/loadFormAnimateurFonction", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCart5 .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCart5 .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="animateur_fonction"] #animateur_fonction_nom').value.length != 0) {
              var _fonction = document.querySelector('form[name="animateur_fonction"] #animateur_fonction_nom');

              var token = document.querySelector('form[name="animateur_fonction"] #animateur_fonction__token');
              var data = new FormData();
              data.append("animateur_fonction_nom", _fonction.value);
              data.append("animateur_fonction__token", token.value);
              fetch("/admin/animateur/fonction/loadFormAnimateurFonction", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.json();
              }).then(function (resultat) {
                if (resultat.value != null) {
                  var selectAnimateurFonction = document.querySelector('#animateur_animateurFonction');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
                  selectAnimateurFonction.add(option);
                  selectAnimateurFonction.selectedIndex = selectAnimateurFonction.length - 1;
                  close5.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
            } else {
              document.querySelector('form[name="animateur_fonction"] #animateur_fonction_nom').classList.add('error');
            }
          });
        }
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

function loadFormAnimateurStatut() {
  var statut = document.querySelector('#addStatutAnimateur');

  if (statut != null) {
    fetch("/admin/animateur/statut/loadFormAnimateurStatut", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCart6 .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCart6 .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="animateur_statut"] #animateur_statut_nom').value.length != 0) {
              var _statut = document.querySelector('form[name="animateur_statut"] #animateur_statut_nom');

              var token = document.querySelector('form[name="animateur_statut"] #animateur_statut__token');
              var data = new FormData();
              data.append("animateur_statut_nom", _statut.value);
              data.append("animateur_statut__token", token.value);
              fetch("/admin/animateur/statut/loadFormAnimateurStatut", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.json();
              }).then(function (resultat) {
                if (resultat.value != null) {
                  var selectAnimateurStatut = document.querySelector('#animateur_animateurStatut');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
                  selectAnimateurStatut.add(option);
                  selectAnimateurStatut.selectedIndex = selectAnimateurStatut.length - 1;
                  close6.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
            } else {
              document.querySelector('form[name="animateur_statut"] #animateur_statut_nom').classList.add('error');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvbWFpbi5zY3NzPzM0ZmUiXSwibmFtZXMiOlsicmVxdWlyZSIsIm9uY2xpY2tTdGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2tUcmlidW5hdXgiLCJvbmNsaWNrQW5pbWF0ZXVyIiwib25jbGlja1ByZWZlY3R1cmUiLCJibHVlQXJyb3ciLCJvcmFuZ2VBcnJvdyIsInB1cnBsZUFycm93IiwicmVkQXJyb3ciLCJteURyb3Bkb3duTWVudTEiLCJteURyb3Bkb3duTWVudTIiLCJteURyb3Bkb3duTWVudTMiLCJteURyb3Bkb3duTWVudTQiLCJhY3RpdmVTdGFnZUxpc3QiLCJhY3RpdmVMaWV1U3RhZ2UiLCJhY3RpdmVUcmlidW5hbExpc3QiLCJhY3RpdmVUcmlidW5hbEF1dG9yaXRlIiwiYWN0aXZlVHJpYnVuYWxTZXJ2aWNlIiwiYWN0aXZlQW5pbWF0ZXVyTGlzdCIsImFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uIiwiYWN0aXZlQW5pbWF0ZXVyU3RhdHV0IiwiYWN0aXZlUHJlZmVjdHVyZUxpc3QiLCJhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUiLCJhY3RpdmVQcmVmZWN0dXJlU2VydmljZSIsImJsdWVBcnJvd1ZhbHVlIiwib3JhbmdlQXJyb3dWYWx1ZSIsInB1cnBsZUFycm93VmFsdWUiLCJyZWRBcnJvd1ZhbHVlIiwidXJsIiwiVVJMIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjaGFuZ2VBY3RpdmVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5Iiwib3BhY2l0eSIsImNvbG9yIiwiZm9udFdlaWdodCIsImNsb3NlIiwiY2xvc2UyIiwiY2xvc2UzIiwiY2xvc2U0IiwiY2xvc2U1IiwiY2xvc2U2Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwibG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsIiwibG9hZEZvcm1UcmlidW5hbFNlcnZpY2UiLCJsb2FkRm9ybVByZWZlY3R1cmVTZXJ2aWNlIiwibG9hZEZvcm1QcmVmZWN0dXJlQXV0b3JpdGUiLCJsb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uIiwibG9hZEZvcm1BbmltYXRldXJTdGF0dXQiLCJhdXRvcml0ZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVwb25zZSIsInRleHQiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJidG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInRva2VuIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwiYm9keSIsInJlc3VsdGF0IiwianNvbiIsInNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUiLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJhZGQiLCJzZWxlY3RlZEluZGV4IiwiY2xpY2siLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsInNlcnZpY2UiLCJzZWxlY3RUcmlidW5hbFNlcnZpY2UiLCJzZWxlY3RQcmVmZWN0dXJlU2VydmljZSIsInNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZSIsImZvbmN0aW9uIiwic2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24iLCJzdGF0dXQiLCJzZWxlY3RBbmltYXRldXJTdGF0dXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FB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QSxRQUFRLENBQUNQLEtBQVQsSUFBa0IsSUFBckIsRUFBMEI7QUFDdEIsc0JBQU02QixxQkFBcUIsR0FBRzlGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBOUI7QUFDQSxzQkFBTTBFLE1BQU0sR0FBRzNFLFFBQVEsQ0FBQzRFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRCx3QkFBTSxDQUFDRSxZQUFQLENBQW9CLE9BQXBCLEVBQTZCTCxRQUFRLENBQUNNLEVBQXRDO0FBQ0FILHdCQUFNLENBQUNoQixJQUFQLEdBQWNhLFFBQVEsQ0FBQ1AsS0FBdkI7QUFDQTZCLHVDQUFxQixDQUFDZixHQUF0QixDQUEwQkosTUFBMUI7QUFDQW1CLHVDQUFxQixDQUFDZCxhQUF0QixHQUFzQ2MscUJBQXFCLENBQUNsQyxNQUF0QixHQUErQixDQUFyRTtBQUNBZCx3QkFBTSxDQUFDbUMsS0FBUDtBQUNIO0FBQ0osZUFmRCxFQWVHQyxLQWZILENBZVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxlQWpCRDtBQWtCSCxhQTNCRCxNQTJCSztBQUNEbkYsc0JBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxREFBdkIsRUFBOEVxRixTQUE5RSxDQUF3RlAsR0FBeEYsQ0FBNEYsT0FBNUY7QUFDSDtBQUNKLFdBakNEO0FBa0NIO0FBQ0o7QUFDSixLQTlDRCxFQThDR0csS0E5Q0gsQ0E4Q1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEtBaEREO0FBaURIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUM5VkQsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsInJlcXVpcmUoJy4uL3Njc3MvbWFpbi5zY3NzJyk7XG5yZXF1aXJlKCcuLi9qcy9wb3BVcC5qcycpO1xuXG5jb25zdCBvbmNsaWNrU3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25jbGlja19zdGFnZScpO1xuY29uc3Qgb25jbGlja1RyaWJ1bmF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3RyaWJ1bmF1eCcpO1xuY29uc3Qgb25jbGlja0FuaW1hdGV1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX2FuaW1hdGV1cicpO1xuY29uc3Qgb25jbGlja1ByZWZlY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25jbGlja19wcmVmZWN0dXJlJyk7XG5cbmNvbnN0IGJsdWVBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9ibHVlJyk7XG5jb25zdCBvcmFuZ2VBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9vcmFuZ2UnKTtcbmNvbnN0IHB1cnBsZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX3B1cnBsZScpO1xuY29uc3QgcmVkQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcmVkJyk7XG5cbmNvbnN0IG15RHJvcGRvd25NZW51MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3N0YWdlcycpO1xuY29uc3QgbXlEcm9wZG93bk1lbnUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfdHJpYnVuYXV4Jyk7XG5jb25zdCBteURyb3Bkb3duTWVudTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9hbmltYXRldXJzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9wcmVmZWN0dXJlcycpO1xuXG5jb25zdCBhY3RpdmVTdGFnZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3N0YWdlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVMaWV1U3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2xpZXVfc3RhZ2UnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3RyaWJ1bmFsX2F1dG9yaXRlJyk7XG5jb25zdCBhY3RpdmVUcmlidW5hbFNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbmNvbnN0IGFjdGl2ZUFuaW1hdGV1ckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9saXN0ZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyRm9uY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9mb25jdGlvbicpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9hbmltYXRldXJfc3RhdHV0Jyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfcHJlZmVjdHVyZV9saXN0ZScpO1xuY29uc3QgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2F1dG9yaXRlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfcHJlZmVjdHVyZV9zZXJ2aWNlJyk7XG5cbmxldCBibHVlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgb3JhbmdlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgcmVkQXJyb3dWYWx1ZSA9IDA7XG5cbmxldCB1cmwgPSBkb2N1bWVudC5VUkw7XG5sZXQgcGF0aG5hbWUgPSBuZXcgVVJMKHVybCkucGF0aG5hbWU7XG5cbndpbmRvdy5vbmxvYWQgPSBjaGFuZ2VBY3RpdmVCdXR0b24oKTtcblxub25jbGlja1N0YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihyZWRBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tUcmlidW5hdXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKGJsdWVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja0FuaW1hdGV1ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYob3JhbmdlQXJyb3dWYWx1ZSA9PSAwKXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrUHJlZmVjdHVyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYocHVycGxlQXJyb3dWYWx1ZSA9PSAwKXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVCdXR0b24oKXtcbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9zdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVTdGFnZUxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9zdGFnZS9saWV1U3RhZ2UnKSB7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlTGlldVN0YWdlLnN0eWxlLmNvbG9yID0gJyNmZjU3NDQnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vdHJpYnVuYWwnKSB7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsTGlzdC5zdHlsZS5jb2xvciA9ICcjNDA5OGYzJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9hdXRvcml0ZScpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZS5zdHlsZS5jb2xvciA9ICcjNDA5OGYzJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vdHJpYnVuYWwvc2VydmljZScpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxTZXJ2aWNlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL2FuaW1hdGV1cicpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJMaXN0LnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL2FuaW1hdGV1ci9mb25jdGlvbicpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyRm9uY3Rpb24uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL3N0YXR1dCcpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJTdGF0dXQuc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlJykge1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlTGlzdC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlL2F1dG9yaXRlJykge1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVBdXRvcml0ZS5zdHlsZS5jb2xvciA9ICcjOWMyZGIzJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cbn1cblxuaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlJykge1xuICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbn0iLCJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG5jb25zdCBjbG9zZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UyJyk7XG5jb25zdCBjbG9zZTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UzJyk7XG5jb25zdCBjbG9zZTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2U0Jyk7XG5jb25zdCBjbG9zZTUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2U1Jyk7XG5jb25zdCBjbG9zZTYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2U2Jyk7XG5cbi8vIHBvcC11cCBham91dCBzZXJ2aWNlL2F1dG9yaXTDqS9zdGF0dXQvZm9uY3Rpb24gZGFucyBlbnRpdMOpIHRyaWJ1bmFsL3Byw6lmw6ljdHVyZS9hbmltYXRldXJcbmRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwoKTtcbiAgICBsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSgpO1xuICAgIGxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UoKTtcbiAgICBsb2FkRm9ybVByZWZlY3R1cmVBdXRvcml0ZSgpO1xuICAgIGxvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb24oKTtcbiAgICBsb2FkRm9ybUFuaW1hdGV1clN0YXR1dCgpO1xufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwoKXtcbiAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQXV0b3JpdGVUcmlidW5hbCcpO1xuXG4gICAgaWYoYXV0b3JpdGUgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlL2xvYWRGb3JtQXV0b3JpdGVUcmlidW5hbFwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydCAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydCAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9hdXRvcml0ZV9ub21cIiwgYXV0b3JpdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfYXV0b3JpdGVfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlL2xvYWRGb3JtQXV0b3JpdGVUcmlidW5hbFwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlidW5hbF90cmlidW5hbF9hdXRvcml0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtVHJpYnVuYWxTZXJ2aWNlKCl7XG4gICAgbGV0IHNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkU2VydmljZVRyaWJ1bmFsJyk7XG4gICAgXG4gICAgaWYoc2VydmljZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VUcmlidW5hbFwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDIgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQyIC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX3NlcnZpY2VcIl0gI3RyaWJ1bmFsX3NlcnZpY2Vfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfc2VydmljZV9ub21cIiwgc2VydmljZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9zZXJ2aWNlX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL3RyaWJ1bmFsL3NlcnZpY2UvbG9hZEZvcm1TZXJ2aWNlVHJpYnVuYWxcIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFRyaWJ1bmFsU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlidW5hbF90cmlidW5hbF9zZXJ2aWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RUcmlidW5hbFNlcnZpY2UubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTIuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybVByZWZlY3R1cmVTZXJ2aWNlKCl7XG4gICAgbGV0IHNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkU2VydmljZVByZWZlY3R1cmUnKTtcbiAgICBcbiAgICBpZihzZXJ2aWNlICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi9wcmVmZWN0dXJlL3NlcnZpY2UvbG9hZEZvcm1TZXJ2aWNlUHJlZmVjdHVyZVwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDMgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQzIC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9zZXJ2aWNlX25vbVwiLCBzZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfc2VydmljZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVByZWZlY3R1cmVcIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWZlY3R1cmVfcHJlZmVjdHVyZVNlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlU2VydmljZS5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RQcmVmZWN0dXJlU2VydmljZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlMy5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybVByZWZlY3R1cmVBdXRvcml0ZSgpe1xuICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRBdXRvcml0ZVByZWZlY3R1cmUnKTtcblxuICAgIGlmKGF1dG9yaXRlICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi9wcmVmZWN0dXJlL2F1dG9yaXRlL2xvYWRGb3JtQXV0b3JpdGVQcmVmZWN0dXJlXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NCAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDQgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX2F1dG9yaXRlX25vbVwiLCBhdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX2F1dG9yaXRlX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9wcmVmZWN0dXJlL2F1dG9yaXRlL2xvYWRGb3JtQXV0b3JpdGVQcmVmZWN0dXJlXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlZmVjdHVyZV9wcmVmZWN0dXJlQXV0b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlNC5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb24oKXtcbiAgICBsZXQgZm9uY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkRm9uY3Rpb25BbmltYXRldXInKTtcblxuICAgIGlmKGZvbmN0aW9uICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi9hbmltYXRldXIvZm9uY3Rpb24vbG9hZEZvcm1BbmltYXRldXJGb25jdGlvblwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDUgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ1IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX2ZvbmN0aW9uXCJdICNhbmltYXRldXJfZm9uY3Rpb25fbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX2ZvbmN0aW9uXCJdICNhbmltYXRldXJfZm9uY3Rpb25fbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX2ZvbmN0aW9uXCJdICNhbmltYXRldXJfZm9uY3Rpb25fX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbVwiLCBmb25jdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJhbmltYXRldXJfZm9uY3Rpb25fX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9hbmltYXRldXIvZm9uY3Rpb24vbG9hZEZvcm1BbmltYXRldXJGb25jdGlvblwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW5pbWF0ZXVyX2FuaW1hdGV1ckZvbmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24uYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbmltYXRldXJGb25jdGlvbi5zZWxlY3RlZEluZGV4ID0gc2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24ubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTUuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX2ZvbmN0aW9uXCJdICNhbmltYXRldXJfZm9uY3Rpb25fbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1BbmltYXRldXJTdGF0dXQoKXtcbiAgICBsZXQgc3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFN0YXR1dEFuaW1hdGV1cicpO1xuXG4gICAgaWYoc3RhdHV0ICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi9hbmltYXRldXIvc3RhdHV0L2xvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0XCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NiAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDYgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfc3RhdHV0XCJdICNhbmltYXRldXJfc3RhdHV0X25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfc3RhdHV0XCJdICNhbmltYXRldXJfc3RhdHV0X190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcImFuaW1hdGV1cl9zdGF0dXRfbm9tXCIsIHN0YXR1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJhbmltYXRldXJfc3RhdHV0X190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL3N0YXR1dC9sb2FkRm9ybUFuaW1hdGV1clN0YXR1dFwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0QW5pbWF0ZXVyU3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FuaW1hdGV1cl9hbmltYXRldXJTdGF0dXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbmltYXRldXJTdGF0dXQuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbmltYXRldXJTdGF0dXQuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdEFuaW1hdGV1clN0YXR1dC5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlNi5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfc3RhdHV0XCJdICNhbmltYXRldXJfc3RhdHV0X25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
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

var close = document.querySelector('.close');
var close2 = document.querySelector('.close2');
var close3 = document.querySelector('.close3');
var close4 = document.querySelector('.close4');
var close5 = document.querySelector('.close5');
var close6 = document.querySelector('.close6');
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
} // pop-up ajout service/autorité/statut/fonction dans entité tribunal/préfécture/animateur


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9tYWluLnNjc3M/MzRmZSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY2xvc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZTIiLCJjbG9zZTMiLCJjbG9zZTQiLCJjbG9zZTUiLCJjbG9zZTYiLCJvbmNsaWNrU3RhZ2UiLCJvbmNsaWNrVHJpYnVuYXV4Iiwib25jbGlja0FuaW1hdGV1ciIsIm9uY2xpY2tQcmVmZWN0dXJlIiwiYmx1ZUFycm93Iiwib3JhbmdlQXJyb3ciLCJwdXJwbGVBcnJvdyIsInJlZEFycm93IiwibXlEcm9wZG93bk1lbnUxIiwibXlEcm9wZG93bk1lbnUyIiwibXlEcm9wZG93bk1lbnUzIiwibXlEcm9wZG93bk1lbnU0IiwiYWN0aXZlU3RhZ2VMaXN0IiwiYWN0aXZlTGlldVN0YWdlIiwiYWN0aXZlVHJpYnVuYWxMaXN0IiwiYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSIsImFjdGl2ZVRyaWJ1bmFsU2VydmljZSIsImFjdGl2ZUFuaW1hdGV1ckxpc3QiLCJhY3RpdmVBbmltYXRldXJGb25jdGlvbiIsImFjdGl2ZUFuaW1hdGV1clN0YXR1dCIsImFjdGl2ZVByZWZlY3R1cmVMaXN0IiwiYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlIiwiYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2UiLCJibHVlQXJyb3dWYWx1ZSIsIm9yYW5nZUFycm93VmFsdWUiLCJwdXJwbGVBcnJvd1ZhbHVlIiwicmVkQXJyb3dWYWx1ZSIsInVybCIsIlVSTCIsInBhdGhuYW1lIiwid2luZG93Iiwib25sb2FkIiwiY2hhbmdlQWN0aXZlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwiLCJsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSIsImxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UiLCJsb2FkRm9ybVByZWZlY3R1cmVBdXRvcml0ZSIsImxvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb24iLCJsb2FkRm9ybUFuaW1hdGV1clN0YXR1dCIsImF1dG9yaXRlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXBvbnNlIiwidGV4dCIsImxlbmd0aCIsImlubmVySFRNTCIsImJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidG9rZW4iLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJib2R5IiwicmVzdWx0YXQiLCJqc29uIiwic2VsZWN0VHJpYnVuYWxBdXRvcml0ZSIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImFkZCIsInNlbGVjdGVkSW5kZXgiLCJjbGljayIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0Iiwic2VydmljZSIsInNlbGVjdFRyaWJ1bmFsU2VydmljZSIsInNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlIiwic2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlIiwiZm9uY3Rpb24iLCJzZWxlY3RBbmltYXRldXJGb25jdGlvbiIsInN0YXR1dCIsInNlbGVjdEFuaW1hdGV1clN0YXR1dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5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Q0MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBOUI7QUFDQSxzQkFBTTBFLE1BQU0sR0FBRzNFLFFBQVEsQ0FBQzRFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRCx3QkFBTSxDQUFDRSxZQUFQLENBQW9CLE9BQXBCLEVBQTZCTCxRQUFRLENBQUNNLEVBQXRDO0FBQ0FILHdCQUFNLENBQUNoQixJQUFQLEdBQWNhLFFBQVEsQ0FBQ1AsS0FBdkI7QUFDQTZCLHVDQUFxQixDQUFDZixHQUF0QixDQUEwQkosTUFBMUI7QUFDQW1CLHVDQUFxQixDQUFDZCxhQUF0QixHQUFzQ2MscUJBQXFCLENBQUNsQyxNQUF0QixHQUErQixDQUFyRTtBQUNBdEQsd0JBQU0sQ0FBQzJFLEtBQVA7QUFDSDtBQUNKLGVBZkQsRUFlR0MsS0FmSCxDQWVTLFVBQUNDLEtBQUQsRUFBVztBQUNoQkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsZUFqQkQ7QUFrQkgsYUEzQkQsTUEyQks7QUFDRG5GLHNCQUFRLENBQUNDLGFBQVQsQ0FBdUIscURBQXZCLEVBQThFcUYsU0FBOUUsQ0FBd0ZQLEdBQXhGLENBQTRGLE9BQTVGO0FBQ0g7QUFDSixXQWpDRDtBQWtDSDtBQUNKO0FBQ0osS0E5Q0QsRUE4Q0dHLEtBOUNILENBOENTLFVBQUNDLEtBQUQsRUFBVztBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxLQWhERDtBQWlESDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDMWtCRCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvYXBwLmpzXCIpO1xuIiwicmVxdWlyZSgnLi4vc2Nzcy9tYWluLnNjc3MnKTtcblxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbmNvbnN0IGNsb3NlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTInKTtcbmNvbnN0IGNsb3NlMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTMnKTtcbmNvbnN0IGNsb3NlNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTQnKTtcbmNvbnN0IGNsb3NlNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTUnKTtcbmNvbnN0IGNsb3NlNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTYnKTtcblxuXG5jb25zdCBvbmNsaWNrU3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25jbGlja19zdGFnZScpO1xuY29uc3Qgb25jbGlja1RyaWJ1bmF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3RyaWJ1bmF1eCcpO1xuY29uc3Qgb25jbGlja0FuaW1hdGV1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX2FuaW1hdGV1cicpO1xuY29uc3Qgb25jbGlja1ByZWZlY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25jbGlja19wcmVmZWN0dXJlJyk7XG5cbmNvbnN0IGJsdWVBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9ibHVlJyk7XG5jb25zdCBvcmFuZ2VBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9vcmFuZ2UnKTtcbmNvbnN0IHB1cnBsZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX3B1cnBsZScpO1xuY29uc3QgcmVkQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcmVkJyk7XG5cbmNvbnN0IG15RHJvcGRvd25NZW51MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3N0YWdlcycpO1xuY29uc3QgbXlEcm9wZG93bk1lbnUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfdHJpYnVuYXV4Jyk7XG5jb25zdCBteURyb3Bkb3duTWVudTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9hbmltYXRldXJzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9wcmVmZWN0dXJlcycpO1xuXG5jb25zdCBhY3RpdmVTdGFnZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3N0YWdlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVMaWV1U3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2xpZXVfc3RhZ2UnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3RyaWJ1bmFsX2F1dG9yaXRlJyk7XG5jb25zdCBhY3RpdmVUcmlidW5hbFNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbmNvbnN0IGFjdGl2ZUFuaW1hdGV1ckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9saXN0ZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyRm9uY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9mb25jdGlvbicpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9hbmltYXRldXJfc3RhdHV0Jyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfcHJlZmVjdHVyZV9saXN0ZScpO1xuY29uc3QgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2F1dG9yaXRlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfcHJlZmVjdHVyZV9zZXJ2aWNlJyk7XG5cbmxldCBibHVlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgb3JhbmdlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgcmVkQXJyb3dWYWx1ZSA9IDA7XG5cbmxldCB1cmwgPSBkb2N1bWVudC5VUkw7XG5sZXQgcGF0aG5hbWUgPSBuZXcgVVJMKHVybCkucGF0aG5hbWU7XG5cbndpbmRvdy5vbmxvYWQgPSBjaGFuZ2VBY3RpdmVCdXR0b24oKTtcblxub25jbGlja1N0YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihyZWRBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tUcmlidW5hdXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKGJsdWVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja0FuaW1hdGV1ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYob3JhbmdlQXJyb3dWYWx1ZSA9PSAwKXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrUHJlZmVjdHVyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYocHVycGxlQXJyb3dWYWx1ZSA9PSAwKXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVCdXR0b24oKXtcbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9zdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVTdGFnZUxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9zdGFnZS9saWV1U3RhZ2UnKSB7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlTGlldVN0YWdlLnN0eWxlLmNvbG9yID0gJyNmZjU3NDQnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vdHJpYnVuYWwnKSB7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsTGlzdC5zdHlsZS5jb2xvciA9ICcjNDA5OGYzJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9hdXRvcml0ZScpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZS5zdHlsZS5jb2xvciA9ICcjNDA5OGYzJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vdHJpYnVuYWwvc2VydmljZScpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxTZXJ2aWNlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL2FuaW1hdGV1cicpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJMaXN0LnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL2FuaW1hdGV1ci9mb25jdGlvbicpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyRm9uY3Rpb24uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL3N0YXR1dCcpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJTdGF0dXQuc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlJykge1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlTGlzdC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlL2F1dG9yaXRlJykge1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVBdXRvcml0ZS5zdHlsZS5jb2xvciA9ICcjOWMyZGIzJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cbn1cblxuaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlJykge1xuICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbn1cblxuLy8gcG9wLXVwIGFqb3V0IHNlcnZpY2UvYXV0b3JpdMOpL3N0YXR1dC9mb25jdGlvbiBkYW5zIGVudGl0w6kgdHJpYnVuYWwvcHLDqWbDqWN0dXJlL2FuaW1hdGV1clxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCgpO1xuICAgIGxvYWRGb3JtVHJpYnVuYWxTZXJ2aWNlKCk7XG4gICAgbG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSgpO1xuICAgIGxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlKCk7XG4gICAgbG9hZEZvcm1BbmltYXRldXJGb25jdGlvbigpO1xuICAgIGxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0KCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCgpe1xuICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRBdXRvcml0ZVRyaWJ1bmFsJyk7XG5cbiAgICBpZihhdXRvcml0ZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2F1dG9yaXRlX25vbVwiLCBhdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RUcmlidW5hbEF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX2F1dG9yaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxBdXRvcml0ZS5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZS5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1UcmlidW5hbFNlcnZpY2UoKXtcbiAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTZXJ2aWNlVHJpYnVuYWwnKTtcbiAgICBcbiAgICBpZihzZXJ2aWNlICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVRyaWJ1bmFsXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MiAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDIgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9zZXJ2aWNlX25vbVwiLCBzZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX3NlcnZpY2VfdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VUcmlidW5hbFwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbFNlcnZpY2UuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbFNlcnZpY2Uuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsU2VydmljZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlMi5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UoKXtcbiAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTZXJ2aWNlUHJlZmVjdHVyZScpO1xuICAgIFxuICAgIGlmKHNlcnZpY2UgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VQcmVmZWN0dXJlXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MyAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDMgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tXCIsIHNlcnZpY2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9wcmVmZWN0dXJlL3NlcnZpY2UvbG9hZEZvcm1TZXJ2aWNlUHJlZmVjdHVyZVwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlZmVjdHVyZV9wcmVmZWN0dXJlU2VydmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2Uuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UzLmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlKCl7XG4gICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEF1dG9yaXRlUHJlZmVjdHVyZScpO1xuXG4gICAgaWYoYXV0b3JpdGUgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVByZWZlY3R1cmVcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ0IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NCAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfYXV0b3JpdGVfbm9tXCIsIGF1dG9yaXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfYXV0b3JpdGVfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVByZWZlY3R1cmVcIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVmZWN0dXJlX3ByZWZlY3R1cmVBdXRvcml0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZS5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U0LmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1BbmltYXRldXJGb25jdGlvbigpe1xuICAgIGxldCBmb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRGb25jdGlvbkFuaW1hdGV1cicpO1xuXG4gICAgaWYoZm9uY3Rpb24gIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9mb25jdGlvbi9sb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NSAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDUgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfZm9uY3Rpb25cIl0gI2FuaW1hdGV1cl9mb25jdGlvbl9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9uY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfZm9uY3Rpb25cIl0gI2FuaW1hdGV1cl9mb25jdGlvbl9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfZm9uY3Rpb25cIl0gI2FuaW1hdGV1cl9mb25jdGlvbl9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJhbmltYXRldXJfZm9uY3Rpb25fbm9tXCIsIGZvbmN0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcImFuaW1hdGV1cl9mb25jdGlvbl9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9mb25jdGlvbi9sb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbmltYXRldXJfYW5pbWF0ZXVyRm9uY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbmltYXRldXJGb25jdGlvbi5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RBbmltYXRldXJGb25jdGlvbi5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlNS5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfZm9uY3Rpb25cIl0gI2FuaW1hdGV1cl9mb25jdGlvbl9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUFuaW1hdGV1clN0YXR1dCgpe1xuICAgIGxldCBzdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkU3RhdHV0QW5pbWF0ZXVyJyk7XG5cbiAgICBpZihzdGF0dXQgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9zdGF0dXQvbG9hZEZvcm1BbmltYXRldXJTdGF0dXRcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ2IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NiAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfc3RhdHV0XCJdICNhbmltYXRldXJfc3RhdHV0X25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX3N0YXR1dF9ub21cIiwgc3RhdHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcImFuaW1hdGV1cl9zdGF0dXRfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9hbmltYXRldXIvc3RhdHV0L2xvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0XCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RBbmltYXRldXJTdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW5pbWF0ZXVyX2FuaW1hdGV1clN0YXR1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1clN0YXR1dC5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1clN0YXR1dC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0QW5pbWF0ZXVyU3RhdHV0Lmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U2LmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
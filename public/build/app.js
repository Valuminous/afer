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
                if (resultat.error != null) {
                  document.querySelector('#error').innerHTML = "L'autorité existe déjà";
                } else if (resultat.value != null) {
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
                if (resultat.error != null) {
                  document.querySelector('#error2').innerHTML = "Le service existe déjà";
                } else if (resultat.value != null) {
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
                if (resultat.error != null) {
                  document.querySelector('#error4').innerHTML = "Le service existe déjà";
                } else if (resultat.value != null) {
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
                if (resultat.error != null) {
                  document.querySelector('#error3').innerHTML = "L'autorité existe déjà";
                } else if (resultat.value != null) {
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
                if (resultat.error != null) {
                  document.querySelector('#error5').innerHTML = "La fonction existe déjà";
                } else if (resultat.value != null) {
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
                if (resultat.error != null) {
                  document.querySelector('#error6').innerHTML = "Le statut existe déjà";
                } else if (resultat.value != null) {
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

  document.querySelector('form[name="animateur_statut"] #animateur_statut_nom').value = "";
}

function loadFormTribunal() {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJvbmNsaWNrU3RhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbmNsaWNrVHJpYnVuYXV4Iiwib25jbGlja0FuaW1hdGV1ciIsIm9uY2xpY2tQcmVmZWN0dXJlIiwiYmx1ZUFycm93Iiwib3JhbmdlQXJyb3ciLCJwdXJwbGVBcnJvdyIsInJlZEFycm93IiwibXlEcm9wZG93bk1lbnUxIiwibXlEcm9wZG93bk1lbnUyIiwibXlEcm9wZG93bk1lbnUzIiwibXlEcm9wZG93bk1lbnU0IiwiYWN0aXZlU3RhZ2VMaXN0IiwiYWN0aXZlTGlldVN0YWdlIiwiYWN0aXZlVHJpYnVuYWxMaXN0IiwiYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSIsImFjdGl2ZVRyaWJ1bmFsU2VydmljZSIsImFjdGl2ZUFuaW1hdGV1ckxpc3QiLCJhY3RpdmVBbmltYXRldXJGb25jdGlvbiIsImFjdGl2ZUFuaW1hdGV1clN0YXR1dCIsImFjdGl2ZVByZWZlY3R1cmVMaXN0IiwiYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlIiwiYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2UiLCJibHVlQXJyb3dWYWx1ZSIsIm9yYW5nZUFycm93VmFsdWUiLCJwdXJwbGVBcnJvd1ZhbHVlIiwicmVkQXJyb3dWYWx1ZSIsInVybCIsIlVSTCIsInBhdGhuYW1lIiwid2luZG93Iiwib25sb2FkIiwiY2hhbmdlQWN0aXZlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjbG9zZSIsImNsb3NlMiIsImNsb3NlMyIsImNsb3NlNCIsImNsb3NlNSIsImNsb3NlNiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCIsImxvYWRGb3JtVHJpYnVuYWxTZXJ2aWNlIiwibG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSIsImxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlIiwibG9hZEZvcm1BbmltYXRldXJGb25jdGlvbiIsImxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0IiwiYXV0b3JpdGUiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcG9uc2UiLCJ0ZXh0IiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiYnRuIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0b2tlbiIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsImJvZHkiLCJyZXN1bHRhdCIsImpzb24iLCJlcnJvciIsInNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUiLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJhZGQiLCJzZWxlY3RlZEluZGV4IiwiY2xpY2siLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc0xpc3QiLCJzZXJ2aWNlIiwic2VsZWN0VHJpYnVuYWxTZXJ2aWNlIiwic2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UiLCJzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUiLCJmb25jdGlvbiIsInNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uIiwic3RhdHV0Iiwic2VsZWN0QW5pbWF0ZXVyU3RhdHV0IiwibG9hZEZvcm1UcmlidW5hbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNB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dkIsQ0FBZjtBQUNBRCx3QkFBTSxDQUFDRSxZQUFQLENBQW9CLE9BQXBCLEVBQTZCTixRQUFRLENBQUNPLEVBQXRDO0FBQ0FILHdCQUFNLENBQUNqQixJQUFQLEdBQWNhLFFBQVEsQ0FBQ1AsS0FBdkI7QUFDQTZCLHVDQUFxQixDQUFDZCxHQUF0QixDQUEwQkosTUFBMUI7QUFDQWtCLHVDQUFxQixDQUFDYixhQUF0QixHQUFzQ2EscUJBQXFCLENBQUNsQyxNQUF0QixHQUErQixDQUFyRTtBQUNBZCx3QkFBTSxDQUFDb0MsS0FBUDtBQUNIO0FBQ0osZUFsQkQsRUFrQkdDLEtBbEJILENBa0JTLFVBQUNULEtBQUQsRUFBVztBQUNoQlUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0gsZUFwQkQ7QUFxQkgsYUE5QkQsTUE4Qks7QUFDRDFFLHNCQUFRLENBQUNDLGFBQVQsQ0FBdUIscURBQXZCLEVBQThFcUYsU0FBOUUsQ0FBd0ZOLEdBQXhGLENBQTRGLE9BQTVGO0FBQ0g7QUFDSixXQW5DRDtBQW9DSDtBQUNKO0FBQ0osS0FqREQsRUFpREdHLEtBakRILENBaURTLFVBQUNULEtBQUQsRUFBVztBQUNoQlUsYUFBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDSCxLQW5ERDtBQW9ESDs7QUFDRDFFLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxREFBdkIsRUFBOEVnRSxLQUE5RSxHQUFzRixFQUF0RjtBQUVIOztBQUVELFNBQVM4QixnQkFBVCxHQUEyQixDQUUxQixDOzs7Ozs7Ozs7OztBQ3RYRCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvYXBwLmpzXCIpO1xuIiwicmVxdWlyZSgnLi4vc2Nzcy9tYWluLnNjc3MnKTtcbnJlcXVpcmUoJy4uL2pzL3BvcFVwLmpzJyk7XG5cbmNvbnN0IG9uY2xpY2tTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3N0YWdlJyk7XG5jb25zdCBvbmNsaWNrVHJpYnVuYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfdHJpYnVuYXV4Jyk7XG5jb25zdCBvbmNsaWNrQW5pbWF0ZXVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfYW5pbWF0ZXVyJyk7XG5jb25zdCBvbmNsaWNrUHJlZmVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3ByZWZlY3R1cmUnKTtcblxuY29uc3QgYmx1ZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX2JsdWUnKTtcbmNvbnN0IG9yYW5nZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX29yYW5nZScpO1xuY29uc3QgcHVycGxlQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcHVycGxlJyk7XG5jb25zdCByZWRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9yZWQnKTtcblxuY29uc3QgbXlEcm9wZG93bk1lbnUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Rfc3RhZ2VzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF90cmlidW5hdXgnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X2FuaW1hdGV1cnMnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3ByZWZlY3R1cmVzJyk7XG5cbmNvbnN0IGFjdGl2ZVN0YWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfc3RhZ2VfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZUxpZXVTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfbGlldV9zdGFnZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV90cmlidW5hbF9saXN0ZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfc2VydmljZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2ZvbmN0aW9uJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJTdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9zdGF0dXQnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3ByZWZlY3R1cmVfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX3NlcnZpY2UnKTtcblxubGV0IGJsdWVBcnJvd1ZhbHVlID0gMDtcbmxldCBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbmxldCBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbmxldCByZWRBcnJvd1ZhbHVlID0gMDtcblxubGV0IHVybCA9IGRvY3VtZW50LlVSTDtcbmxldCBwYXRobmFtZSA9IG5ldyBVUkwodXJsKS5wYXRobmFtZTtcblxud2luZG93Lm9ubG9hZCA9IGNoYW5nZUFjdGl2ZUJ1dHRvbigpO1xuXG5vbmNsaWNrU3RhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKHJlZEFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja1RyaWJ1bmF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoYmx1ZUFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrQW5pbWF0ZXVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihvcmFuZ2VBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG9yYW5nZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tQcmVmZWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihwdXJwbGVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ1dHRvbigpe1xuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlJykge1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5jb2xvciA9ICcjZmY1NzQ0JztcbiAgICAgICAgYWN0aXZlU3RhZ2VMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlL2xpZXVTdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZUxpZXVTdGFnZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbCcpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbExpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9zZXJ2aWNlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzQwOThmMyc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uLnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9hbmltYXRldXIvc3RhdHV0Jykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUxpc3Quc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxufVxuXG5pZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlL3NlcnZpY2UnKSB7XG4gICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5jb2xvciA9ICcjOWMyZGIzJztcbiAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xufSIsIlxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbmNvbnN0IGNsb3NlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTInKTtcbmNvbnN0IGNsb3NlMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTMnKTtcbmNvbnN0IGNsb3NlNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTQnKTtcbmNvbnN0IGNsb3NlNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTUnKTtcbmNvbnN0IGNsb3NlNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTYnKTtcblxuLy8gcG9wLXVwIGFqb3V0IHNlcnZpY2UvYXV0b3JpdMOpL3N0YXR1dC9mb25jdGlvbiBkYW5zIGVudGl0w6kgdHJpYnVuYWwvcHLDqWbDqWN0dXJlL2FuaW1hdGV1clxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCgpO1xuICAgIGxvYWRGb3JtVHJpYnVuYWxTZXJ2aWNlKCk7XG4gICAgbG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSgpO1xuICAgIGxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlKCk7XG4gICAgbG9hZEZvcm1BbmltYXRldXJGb25jdGlvbigpO1xuICAgIGxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0KCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCgpe1xuICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRBdXRvcml0ZVRyaWJ1bmFsJyk7XG5cbiAgICBpZihhdXRvcml0ZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2F1dG9yaXRlX25vbVwiLCBhdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQuZXJyb3IgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpLmlubmVySFRNTCA9IFwiTCdhdXRvcml0w6kgZXhpc3RlIGTDqWrDoFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RUcmlidW5hbEF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX2F1dG9yaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxBdXRvcml0ZS5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZS5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1UcmlidW5hbFNlcnZpY2UoKXtcbiAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTZXJ2aWNlVHJpYnVuYWwnKTtcbiAgICBcbiAgICBpZihzZXJ2aWNlICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVRyaWJ1bmFsXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MiAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDIgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9zZXJ2aWNlX25vbVwiLCBzZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX3NlcnZpY2VfdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VUcmlidW5hbFwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC5lcnJvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjInKS5pbm5lckhUTUwgPSBcIkxlIHNlcnZpY2UgZXhpc3RlIGTDqWrDoFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbFNlcnZpY2UuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbFNlcnZpY2Uuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsU2VydmljZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlMi5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UoKXtcbiAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTZXJ2aWNlUHJlZmVjdHVyZScpO1xuICAgIFxuICAgIGlmKHNlcnZpY2UgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VQcmVmZWN0dXJlXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MyAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDMgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tXCIsIHNlcnZpY2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9wcmVmZWN0dXJlL3NlcnZpY2UvbG9hZEZvcm1TZXJ2aWNlUHJlZmVjdHVyZVwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LmVycm9yICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yNCcpLmlubmVySFRNTCA9IFwiTGUgc2VydmljZSBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcmVmZWN0dXJlU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVmZWN0dXJlX3ByZWZlY3R1cmVTZXJ2aWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlU2VydmljZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTMuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1QcmVmZWN0dXJlQXV0b3JpdGUoKXtcbiAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQXV0b3JpdGVQcmVmZWN0dXJlJyk7XG5cbiAgICBpZihhdXRvcml0ZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDQgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ0IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9ub21cIiwgYXV0b3JpdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LmVycm9yICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yMycpLmlubmVySFRNTCA9IFwiTCdhdXRvcml0w6kgZXhpc3RlIGTDqWrDoFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWZlY3R1cmVfcHJlZmVjdHVyZUF1dG9yaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTQuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uKCl7XG4gICAgbGV0IGZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEZvbmN0aW9uQW5pbWF0ZXVyJyk7XG5cbiAgICBpZihmb25jdGlvbiAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ1IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NSAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcImFuaW1hdGV1cl9mb25jdGlvbl9ub21cIiwgZm9uY3Rpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC5lcnJvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjUnKS5pbm5lckhUTUwgPSBcIkxhIGZvbmN0aW9uIGV4aXN0ZSBkw6lqw6BcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHRhdC52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FuaW1hdGV1cl9hbmltYXRldXJGb25jdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24uc2VsZWN0ZWRJbmRleCA9IHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U1LmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0KCl7XG4gICAgXG4gICAgbGV0IHN0YXR1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTdGF0dXRBbmltYXRldXInKTtcblxuICAgIGlmKHN0YXR1dCAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL3N0YXR1dC9sb2FkRm9ybUFuaW1hdGV1clN0YXR1dFwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDYgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ2IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfc3RhdHV0XCJdICNhbmltYXRldXJfc3RhdHV0X25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX3N0YXR1dF9ub21cIiwgc3RhdHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcImFuaW1hdGV1cl9zdGF0dXRfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9hbmltYXRldXIvc3RhdHV0L2xvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0XCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQuZXJyb3IgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3I2JykuaW5uZXJIVE1MID0gXCJMZSBzdGF0dXQgZXhpc3RlIGTDqWrDoFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0QW5pbWF0ZXVyU3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FuaW1hdGV1cl9hbmltYXRldXJTdGF0dXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbmltYXRldXJTdGF0dXQuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbmltYXRldXJTdGF0dXQuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdEFuaW1hdGV1clN0YXR1dC5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlNi5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfc3RhdHV0XCJdICNhbmltYXRldXJfc3RhdHV0X25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9ub20nKS52YWx1ZSA9IFwiXCI7XG5cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1UcmlidW5hbCgpe1xuXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
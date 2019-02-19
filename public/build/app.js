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
var close6 = document.querySelector('.close6');
var closeTribunal = document.querySelector('.closeTribunal');
var closePrefecture = document.querySelector('.closePrefecture'); // pop-up ajout service/autorité/statut/fonction dans entité tribunal/préfécture/animateur

document.onreadystatechange = function () {
  loadFormAutoriteTribunal();
  loadFormTribunalService();
  loadFormPrefectureService();
  loadFormPrefectureAutorite();
  loadFormAnimateurFonction();
  loadFormAnimateurStatut();
  loadFormTribunal();
  loadFormPrefecture();
  loadFormStagiaire();
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
}

function loadFormTribunal() {
  var tribunal = document.querySelector('#addTribunal');

  if (tribunal != null) {
    fetch("/admin/stage/loadFormTribunal", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCartTribunal .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCartTribunal .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="tribunal"] #tribunal_nom_tribunal').value.length != 0 && document.querySelector('form[name="tribunal"] #tribunal_adresse_tribunal').value.length != 0 && document.querySelector('form[name="tribunal"] #tribunal_numero_adresse_tribunal').value.length != 0 && document.querySelector('form[name="tribunal"] #tribunal_commune_tribunal').value.length != 0 && document.querySelector('form[name="tribunal"] #tribunal_tribunal_service').value != "" && document.querySelector('form[name="tribunal"] #tribunal_tribunal_autorite').value != "") {
              var tribunalNom = document.querySelector('form[name="tribunal"] #tribunal_nom_tribunal');
              var tribunalAdresse = document.querySelector('form[name="tribunal"] #tribunal_adresse_tribunal');
              var tribunalNumeroAdresse = document.querySelector('form[name="tribunal"] #tribunal_numero_adresse_tribunal');
              var tribunalCommune = document.querySelector('form[name="tribunal"] #tribunal_commune_tribunal');
              var tribunalAutorite = document.querySelector('form[name="tribunal"] #tribunal_tribunal_autorite');
              var tribunalService = document.querySelector('form[name="tribunal"] #tribunal_tribunal_service');
              var token = document.querySelector('form[name="tribunal"] #tribunal__token');
              var data = new FormData();
              data.append("tribunal_nom_tribunal", tribunalNom.value);
              data.append("tribunal_adresse_tribunal", tribunalAdresse.value);
              data.append("tribunal_numero_adresse_tribunal", tribunalNumeroAdresse.value);
              data.append("tribunal_commune_tribunal", tribunalCommune.value);
              data.append("tribunal_tribunal_autorite", tribunalAutorite.value);
              data.append("tribunal_tribunal_service", tribunalService.value);
              data.append("tribunal__token", token.value);
              fetch("/admin/stage/loadFormTribunal", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.json();
              }).then(function (resultat) {
                if (resultat.error != null) {
                  document.querySelector('#errorTribunal').innerHTML = "Le tribunal existe déjà";
                } else if (resultat.value != null) {
                  var selectTribunal = document.querySelector('#stage_tribunal');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
                  selectTribunal.add(option);
                  selectTribunal.selectedIndex = selectTribunal.length - 1;
                  closeTribunal.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
            }
          });
        }
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

function loadFormPrefecture() {
  var prefecture = document.querySelector('#addPrefecture');

  if (prefecture != null) {
    fetch("/admin/stage/loadFormPrefecture", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCartPrefecture .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCartPrefecture .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="prefecture"] #prefecture_nomPrefecture').value.length != 0 && document.querySelector('form[name="prefecture"] #prefecture_adressePrefecture').value.length != 0 && document.querySelector('form[name="prefecture"] #prefecture_numeroAdressePrefecture').value.length != 0 && document.querySelector('form[name="prefecture"] #prefecture_communePrefecture').value.length != 0 && document.querySelector('form[name="prefecture"] #prefecture_cpPrefecture').value.length != 0 && document.querySelector('form[name="prefecture"] #prefecture_prefectureService').value != "" && document.querySelector('form[name="prefecture"] #prefecture_prefectureAutorite').value != "") {
              var prefectureNom = document.querySelector('form[name="prefecture"] #prefecture_nomPrefecture');
              var prefectureAdresse = document.querySelector('form[name="prefecture"] #prefecture_adressePrefecture');
              var prefectureNumeroAdresse = document.querySelector('form[name="prefecture"] #prefecture_numeroAdressePrefecture');
              var prefectureCommune = document.querySelector('form[name="prefecture"] #prefecture_communePrefecture');
              var prefectureAutorite = document.querySelector('form[name="prefecture"] #prefecture_prefectureAutorite');
              var prefectureService = document.querySelector('form[name="prefecture"] #prefecture_prefectureService');
              var prefectureCp = document.querySelector('form[name="prefecture"] #prefecture_cpPrefecture');
              var token = document.querySelector('form[name="prefecture"] #prefecture__token');
              var data = new FormData();
              data.append("prefecture_nomPrefecture", prefectureNom.value);
              data.append("prefecture_adressePrefecture", prefectureAdresse.value);
              data.append("prefecture_numeroAdressePrefecture", prefectureNumeroAdresse.value);
              data.append("prefecture_communePrefecture", prefectureCommune.value);
              data.append("prefecture_prefectureAutorite", prefectureAutorite.value);
              data.append("prefecture_prefectureService", prefectureService.value);
              data.append("prefecture_cpPrefecture", prefectureCp.value);
              data.append("prefecture__token", token.value);
              fetch("/admin/stage/loadFormPrefecture", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.json();
              }).then(function (resultat) {
                if (resultat.error != null) {
                  document.querySelector('#errorPrefecture').innerHTML = "La préfecture existe déjà";
                } else if (resultat.value != null) {
                  var selectPrefecture = document.querySelector('#stage_prefecture');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
                  selectPrefecture.add(option);
                  selectPrefecture.selectedIndex = selectPrefecture.length - 1;
                  closePrefecture.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
            }
          });
        }
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}

function loadFormStagiaire() {
  var stagiaire = document.querySelector('#addStagiaire');

  if (stagiaire != null) {
    fetch("/admin/stage/loadFormStagiaire", {
      credentials: 'include'
    }).then(function (reponse) {
      return reponse.text();
    }).then(function (reponse) {
      if (reponse.length > 0) {
        document.querySelector('#modalCartStagiaire .modal-body').innerHTML = reponse;
        btn = document.querySelector('#modalCartStagiaire .modal-body button');

        if (btn != null) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (document.querySelector('form[name="stagiaire"] #stagiaire_nomStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_prenomStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_cpStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_communeStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_nomNaissanceStagiaire').value.length != 0 && // document.querySelector('form[name="stagiaire"] #stagiaire_dateNaissanceStagiaire').value.length != "" &&
            document.querySelector('form[name="stagiaire"] #stagiaire_lieuNaissanceStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_adresseStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_nationaliteStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_numeroPortableStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_numeroFixeStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_emailStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_numeroAdresseStagiaire').value.length != 0 && document.querySelector('form[name="stagiaire"] #stagiaire_civilite').value.length != "") {
              var stagiaireNom = document.querySelector('form[name="stagiaire"] #stagiaire_nomStagiaire');
              var stagiairePrenom = document.querySelector('form[name="stagiaire"] #stagiaire_prenomStagiaire');
              var stagiaireCp = document.querySelector('form[name="stagiaire"] #stagiaire_cpStagiaire');
              var stagiaireCommune = document.querySelector('form[name="stagiaire"] #stagiaire_communeStagiaire');
              var stagiaireNomNaissance = document.querySelector('form[name="stagiaire"] #stagiaire_nomNaissanceStagiaire');
              var stagiaireDateNaissance = document.querySelector('form[name="stagiaire"] #stagiaire_dateNaissanceStagiaire');
              var stagiaireLieuNaissance = document.querySelector('form[name="stagiaire"] #stagiaire_lieuNaissanceStagiaire');
              var stagiaireAdresse = document.querySelector('form[name="stagiaire"] #stagiaire_adresseStagiaire');
              var stagiaireNationalite = document.querySelector('form[name="stagiaire"] #stagiaire_nationaliteStagiaire');
              var stagiaireNumeroPortable = document.querySelector('form[name="stagiaire"] #stagiaire_numeroPortableStagiaire');
              var stagiaireNumeroFixe = document.querySelector('form[name="stagiaire"] #stagiaire_numeroFixeStagiaire');
              var stagiaireEmail = document.querySelector('form[name="stagiaire"] #stagiaire_emailStagiaire');
              var stagiaireCarteJeune = document.querySelector('form[name="stagiaire"] #stagiaire_carteJeuneStagiaire');
              var stagiairePartenaire = document.querySelector('form[name="stagiaire"] #stagiaire_partenaireStagiaire');
              var stagiaireAdherent = document.querySelector('form[name="stagiaire"] #stagiaire_adherentStagiaire');
              var stagiaireNumeroAdresse = document.querySelector('form[name="stagiaire"] #stagiaire_numeroAdresseStagiaire');
              var stagiaireCivilite = document.querySelector('form[name="stagiaire"] #stagiaire_civilite');
              var token = document.querySelector('form[name="stagiaire"] #stagiaire__token');
              var data = new FormData();
              data.append("stagiaire_nomStagiaire", stagiaireNom.value);
              data.append("stagiaire_prenomStagiaire", stagiairePrenom.value);
              data.append("stagiaire_cpStagiaire", stagiaireCp.value);
              data.append("stagiaire_communeStagiaire", stagiaireCommune.value);
              data.append("stagiaire_nomNaissanceStagiaire", stagiaireNomNaissance.value);
              data.append("stagiaire_dateNaissanceStagiaire", stagiaireDateNaissance.value);
              data.append("stagiaire_lieuNaissanceStagiaire", stagiaireLieuNaissance.value);
              data.append("stagiaire_adresseStagiaire", stagiaireAdresse.value);
              data.append("stagiaire_nationaliteStagiaire", stagiaireNationalite.value);
              data.append("stagiaire_numeroPortableStagiaire", stagiaireNumeroPortable.value);
              data.append("stagiaire_numeroFixeStagiaire", stagiaireNumeroFixe.value);
              data.append("stagiaire_emailStagiaire", stagiaireEmail.value);
              data.append("stagiaire_carteJeuneStagiaire", stagiaireCarteJeune.value);
              data.append("stagiaire_partenaireStagiaire", stagiairePartenaire.value);
              data.append("stagiaire_adherentStagiaire", stagiaireAdherent.value);
              data.append("stagiaire_numeroAdresseStagiaire", stagiaireNumeroAdresse.value);
              data.append("stagiaire_civilite", stagiaireCivilite.value);
              data.append("stagiaire", token.value);
              fetch("/admin/stage/loadFormStagiaire", {
                method: "POST",
                body: data,
                credentials: 'include'
              }).then(function (resultat) {
                return resultat.text();
              }).then(function (resultat) {
                console.log(resultat);

                if (resultat.error != null) {
                  document.querySelector('#errorStagiaire').innerHTML = "Le stagiaire existe déjà";
                } else if (resultat.value != null) {
                  var selectStagiaire = document.querySelector('#stage_stagiaires');
                  var option = document.createElement("option");
                  option.setAttribute('value', resultat.id);
                  option.text = resultat.value;
                  selectStagiaire.add(option);
                  selectStagiaire.selectedIndex = selectStagiaire.length - 1;
                  closeStaselectStagiaire.click();
                }
              }).catch(function (error) {
                console.log(error);
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJvbmNsaWNrU3RhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbmNsaWNrVHJpYnVuYXV4Iiwib25jbGlja0FuaW1hdGV1ciIsIm9uY2xpY2tQcmVmZWN0dXJlIiwiYmx1ZUFycm93Iiwib3JhbmdlQXJyb3ciLCJwdXJwbGVBcnJvdyIsInJlZEFycm93IiwibXlEcm9wZG93bk1lbnUxIiwibXlEcm9wZG93bk1lbnUyIiwibXlEcm9wZG93bk1lbnUzIiwibXlEcm9wZG93bk1lbnU0IiwiYWN0aXZlU3RhZ2VMaXN0IiwiYWN0aXZlTGlldVN0YWdlIiwiYWN0aXZlVHJpYnVuYWxMaXN0IiwiYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSIsImFjdGl2ZVRyaWJ1bmFsU2VydmljZSIsImFjdGl2ZUFuaW1hdGV1ckxpc3QiLCJhY3RpdmVBbmltYXRldXJGb25jdGlvbiIsImFjdGl2ZUFuaW1hdGV1clN0YXR1dCIsImFjdGl2ZVByZWZlY3R1cmVMaXN0IiwiYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlIiwiYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2UiLCJibHVlQXJyb3dWYWx1ZSIsIm9yYW5nZUFycm93VmFsdWUiLCJwdXJwbGVBcnJvd1ZhbHVlIiwicmVkQXJyb3dWYWx1ZSIsInVybCIsIlVSTCIsInBhdGhuYW1lIiwid2luZG93Iiwib25sb2FkIiwiY2hhbmdlQWN0aXZlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjbG9zZSIsImNsb3NlMiIsImNsb3NlMyIsImNsb3NlNCIsImNsb3NlNSIsImNsb3NlNiIsImNsb3NlVHJpYnVuYWwiLCJjbG9zZVByZWZlY3R1cmUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwiLCJsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSIsImxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UiLCJsb2FkRm9ybVByZWZlY3R1cmVBdXRvcml0ZSIsImxvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb24iLCJsb2FkRm9ybUFuaW1hdGV1clN0YXR1dCIsImxvYWRGb3JtVHJpYnVuYWwiLCJsb2FkRm9ybVByZWZlY3R1cmUiLCJsb2FkRm9ybVN0YWdpYWlyZSIsImF1dG9yaXRlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXBvbnNlIiwidGV4dCIsImxlbmd0aCIsImlubmVySFRNTCIsImJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidG9rZW4iLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJib2R5IiwicmVzdWx0YXQiLCJqc29uIiwiZXJyb3IiLCJzZWxlY3RUcmlidW5hbEF1dG9yaXRlIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlkIiwiYWRkIiwic2VsZWN0ZWRJbmRleCIsImNsaWNrIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0Iiwic2VydmljZSIsInNlbGVjdFRyaWJ1bmFsU2VydmljZSIsInNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlIiwic2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlIiwiZm9uY3Rpb24iLCJzZWxlY3RBbmltYXRldXJGb25jdGlvbiIsInN0YXR1dCIsInNlbGVjdEFuaW1hdGV1clN0YXR1dCIsInRyaWJ1bmFsIiwidHJpYnVuYWxOb20iLCJ0cmlidW5hbEFkcmVzc2UiLCJ0cmlidW5hbE51bWVyb0FkcmVzc2UiLCJ0cmlidW5hbENvbW11bmUiLCJ0cmlidW5hbEF1dG9yaXRlIiwidHJpYnVuYWxTZXJ2aWNlIiwic2VsZWN0VHJpYnVuYWwiLCJwcmVmZWN0dXJlIiwicHJlZmVjdHVyZU5vbSIsInByZWZlY3R1cmVBZHJlc3NlIiwicHJlZmVjdHVyZU51bWVyb0FkcmVzc2UiLCJwcmVmZWN0dXJlQ29tbXVuZSIsInByZWZlY3R1cmVBdXRvcml0ZSIsInByZWZlY3R1cmVTZXJ2aWNlIiwicHJlZmVjdHVyZUNwIiwic2VsZWN0UHJlZmVjdHVyZSIsInN0YWdpYWlyZSIsInN0YWdpYWlyZU5vbSIsInN0YWdpYWlyZVByZW5vbSIsInN0YWdpYWlyZUNwIiwic3RhZ2lhaXJlQ29tbXVuZSIsInN0YWdpYWlyZU5vbU5haXNzYW5jZSIsInN0YWdpYWlyZURhdGVOYWlzc2FuY2UiLCJzdGFnaWFpcmVMaWV1TmFpc3NhbmNlIiwic3RhZ2lhaXJlQWRyZXNzZSIsInN0YWdpYWlyZU5hdGlvbmFsaXRlIiwic3RhZ2lhaXJlTnVtZXJvUG9ydGFibGUiLCJzdGFnaWFpcmVOdW1lcm9GaXhlIiwic3RhZ2lhaXJlRW1haWwiLCJzdGFnaWFpcmVDYXJ0ZUpldW5lIiwic3RhZ2lhaXJlUGFydGVuYWlyZSIsInN0YWdpYWlyZUFkaGVyZW50Iiwic3RhZ2lhaXJlTnVtZXJvQWRyZXNzZSIsInN0YWdpYWlyZUNpdmlsaXRlIiwic2VsZWN0U3RhZ2lhaXJlIiwiY2xvc2VTdGFzZWxlY3RTdGFnaWFpcmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LElBQXJCLEVBQTBCO0FBQzdCLHNCQUFNaUUsZUFBZSxHQUFHdkksUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUF4QjtBQUNBLHNCQUFNZ0YsTUFBTSxHQUFHakYsUUFBUSxDQUFDa0YsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FELHdCQUFNLENBQUNFLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkJOLFFBQVEsQ0FBQ08sRUFBdEM7QUFDQUgsd0JBQU0sQ0FBQ2pCLElBQVAsR0FBY2EsUUFBUSxDQUFDUCxLQUF2QjtBQUNBaUUsaUNBQWUsQ0FBQ2xELEdBQWhCLENBQW9CSixNQUFwQjtBQUNBc0QsaUNBQWUsQ0FBQ2pELGFBQWhCLEdBQWdDaUQsZUFBZSxDQUFDdEUsTUFBaEIsR0FBeUIsQ0FBekQ7QUFDQXVFLHlDQUF1QixDQUFDakQsS0FBeEI7QUFDRjtBQUNKLGVBakJELEVBaUJHQyxLQWpCSCxDQWlCUyxVQUFDVCxLQUFELEVBQVc7QUFDaEJVLHVCQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNILGVBbkJEO0FBb0JQO0FBQ0osV0E3RUQ7QUE4RUg7QUFFSjtBQUNKLEtBMUZELEVBMEZHUyxLQTFGSCxDQTBGUyxVQUFDVCxLQUFELEVBQVc7QUFDaEJVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0gsS0E1RkQ7QUE2Rkg7QUFDSixDOzs7Ozs7Ozs7OztBQzdvQkQsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsInJlcXVpcmUoJy4uL3Njc3MvbWFpbi5zY3NzJyk7XG5yZXF1aXJlKCcuLi9qcy9wb3BVcC5qcycpO1xuXG5jb25zdCBvbmNsaWNrU3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25jbGlja19zdGFnZScpO1xuY29uc3Qgb25jbGlja1RyaWJ1bmF1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3RyaWJ1bmF1eCcpO1xuY29uc3Qgb25jbGlja0FuaW1hdGV1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX2FuaW1hdGV1cicpO1xuY29uc3Qgb25jbGlja1ByZWZlY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25jbGlja19wcmVmZWN0dXJlJyk7XG5cbmNvbnN0IGJsdWVBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9ibHVlJyk7XG5jb25zdCBvcmFuZ2VBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9vcmFuZ2UnKTtcbmNvbnN0IHB1cnBsZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX3B1cnBsZScpO1xuY29uc3QgcmVkQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcmVkJyk7XG5cbmNvbnN0IG15RHJvcGRvd25NZW51MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3N0YWdlcycpO1xuY29uc3QgbXlEcm9wZG93bk1lbnUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RfdHJpYnVuYXV4Jyk7XG5jb25zdCBteURyb3Bkb3duTWVudTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9hbmltYXRldXJzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF9wcmVmZWN0dXJlcycpO1xuXG5jb25zdCBhY3RpdmVTdGFnZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3N0YWdlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVMaWV1U3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2xpZXVfc3RhZ2UnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3RyaWJ1bmFsX2F1dG9yaXRlJyk7XG5jb25zdCBhY3RpdmVUcmlidW5hbFNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbmNvbnN0IGFjdGl2ZUFuaW1hdGV1ckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9saXN0ZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyRm9uY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9mb25jdGlvbicpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9hbmltYXRldXJfc3RhdHV0Jyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfcHJlZmVjdHVyZV9saXN0ZScpO1xuY29uc3QgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2F1dG9yaXRlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfcHJlZmVjdHVyZV9zZXJ2aWNlJyk7XG5cbmxldCBibHVlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgb3JhbmdlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG5sZXQgcmVkQXJyb3dWYWx1ZSA9IDA7XG5cbmxldCB1cmwgPSBkb2N1bWVudC5VUkw7XG5sZXQgcGF0aG5hbWUgPSBuZXcgVVJMKHVybCkucGF0aG5hbWU7XG5cbndpbmRvdy5vbmxvYWQgPSBjaGFuZ2VBY3RpdmVCdXR0b24oKTtcblxub25jbGlja1N0YWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihyZWRBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tUcmlidW5hdXguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKGJsdWVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja0FuaW1hdGV1ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYob3JhbmdlQXJyb3dWYWx1ZSA9PSAwKXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrUHJlZmVjdHVyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYocHVycGxlQXJyb3dWYWx1ZSA9PSAwKXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVCdXR0b24oKXtcbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9zdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVTdGFnZUxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9zdGFnZS9saWV1U3RhZ2UnKSB7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlTGlldVN0YWdlLnN0eWxlLmNvbG9yID0gJyNmZjU3NDQnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vdHJpYnVuYWwnKSB7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsTGlzdC5zdHlsZS5jb2xvciA9ICcjNDA5OGYzJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9hdXRvcml0ZScpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZS5zdHlsZS5jb2xvciA9ICcjNDA5OGYzJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vdHJpYnVuYWwvc2VydmljZScpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxTZXJ2aWNlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL2FuaW1hdGV1cicpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJMaXN0LnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL2FuaW1hdGV1ci9mb25jdGlvbicpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyRm9uY3Rpb24uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL3N0YXR1dCcpIHtcbiAgICAgICAgb3JhbmdlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJTdGF0dXQuc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlJykge1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlTGlzdC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlL2F1dG9yaXRlJykge1xuICAgICAgICBwdXJwbGVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVBdXRvcml0ZS5zdHlsZS5jb2xvciA9ICcjOWMyZGIzJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cbn1cblxuaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlJykge1xuICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2Uuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMTtcbn0iLCJjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuY29uc3QgY2xvc2UyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlMicpO1xuY29uc3QgY2xvc2UzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlMycpO1xuY29uc3QgY2xvc2U0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlNCcpO1xuY29uc3QgY2xvc2U1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlNScpO1xuY29uc3QgY2xvc2U2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlNicpO1xuY29uc3QgY2xvc2VUcmlidW5hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZVRyaWJ1bmFsJyk7XG5jb25zdCBjbG9zZVByZWZlY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VQcmVmZWN0dXJlJyk7XG5cbi8vIHBvcC11cCBham91dCBzZXJ2aWNlL2F1dG9yaXTDqS9zdGF0dXQvZm9uY3Rpb24gZGFucyBlbnRpdMOpIHRyaWJ1bmFsL3Byw6lmw6ljdHVyZS9hbmltYXRldXJcbmRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwoKTtcbiAgICBsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSgpO1xuICAgIGxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UoKTtcbiAgICBsb2FkRm9ybVByZWZlY3R1cmVBdXRvcml0ZSgpO1xuICAgIGxvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb24oKTtcbiAgICBsb2FkRm9ybUFuaW1hdGV1clN0YXR1dCgpO1xuICAgIGxvYWRGb3JtVHJpYnVuYWwoKTtcbiAgICBsb2FkRm9ybVByZWZlY3R1cmUoKTtcbiAgICBsb2FkRm9ybVN0YWdpYWlyZSgpO1xufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwoKSB7XG4gICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEF1dG9yaXRlVHJpYnVuYWwnKTtcblxuICAgIGlmIChhdXRvcml0ZSAhPSBudWxsKSB7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlL2xvYWRGb3JtQXV0b3JpdGVUcmlidW5hbFwiLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydCAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2F1dG9yaXRlX25vbVwiLCBhdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfYXV0b3JpdGVfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdGF0LmVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJykuaW5uZXJIVE1MID0gXCJMJ2F1dG9yaXTDqSBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlidW5hbF90cmlidW5hbF9hdXRvcml0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSgpIHtcbiAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTZXJ2aWNlVHJpYnVuYWwnKTtcblxuICAgIGlmIChzZXJ2aWNlICE9IG51bGwpIHtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VUcmlidW5hbFwiLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MiAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQyIC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9zZXJ2aWNlX25vbVwiLCBzZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9zZXJ2aWNlX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVRyaWJ1bmFsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdGF0LmVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yMicpLmlubmVySFRNTCA9IFwiTGUgc2VydmljZSBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbFNlcnZpY2Uuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsU2VydmljZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTIuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybVByZWZlY3R1cmVTZXJ2aWNlKCkge1xuICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFNlcnZpY2VQcmVmZWN0dXJlJyk7XG5cbiAgICBpZiAoc2VydmljZSAhPSBudWxsKSB7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VQcmVmZWN0dXJlXCIsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVwb25zZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQzIC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDMgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ0biAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfc2VydmljZV9ub21cIiwgc2VydmljZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVByZWZlY3R1cmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhdC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjQnKS5pbm5lckhUTUwgPSBcIkxlIHNlcnZpY2UgZXhpc3RlIGTDqWrDoFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRhdC52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWZlY3R1cmVfcHJlZmVjdHVyZVNlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RQcmVmZWN0dXJlU2VydmljZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1QcmVmZWN0dXJlQXV0b3JpdGUoKSB7XG4gICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEF1dG9yaXRlUHJlZmVjdHVyZScpO1xuXG4gICAgaWYgKGF1dG9yaXRlICE9IG51bGwpIHtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NCAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ0IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX2F1dG9yaXRlX25vbVwiLCBhdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVByZWZlY3R1cmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhdC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjMnKS5pbm5lckhUTUwgPSBcIkwnYXV0b3JpdMOpIGV4aXN0ZSBkw6lqw6BcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0YXQudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlZmVjdHVyZV9wcmVmZWN0dXJlQXV0b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTQuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uKCkge1xuICAgIGxldCBmb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRGb25jdGlvbkFuaW1hdGV1cicpO1xuXG4gICAgaWYgKGZvbmN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXBvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDUgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NSAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX2ZvbmN0aW9uXCJdICNhbmltYXRldXJfZm9uY3Rpb25fbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbVwiLCBmb25jdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhdC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjUnKS5pbm5lckhUTUwgPSBcIkxhIGZvbmN0aW9uIGV4aXN0ZSBkw6lqw6BcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0YXQudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbmltYXRldXJfYW5pbWF0ZXVyRm9uY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24uYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RBbmltYXRldXJGb25jdGlvbi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTUuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfZm9uY3Rpb25cIl0gI2FuaW1hdGV1cl9mb25jdGlvbl9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1BbmltYXRldXJTdGF0dXQoKSB7XG5cbiAgICBsZXQgc3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFN0YXR1dEFuaW1hdGV1cicpO1xuXG4gICAgaWYgKHN0YXR1dCAhPSBudWxsKSB7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9zdGF0dXQvbG9hZEZvcm1BbmltYXRldXJTdGF0dXRcIiwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXBvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDYgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NiAubW9kYWwtYm9keSBidXR0b24nKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfbm9tJykudmFsdWUubGVuZ3RoICE9IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX3N0YXR1dF9ub21cIiwgc3RhdHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJhbmltYXRldXJfc3RhdHV0X190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9zdGF0dXQvbG9hZEZvcm1BbmltYXRldXJTdGF0dXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhdC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjYnKS5pbm5lckhUTUwgPSBcIkxlIHN0YXR1dCBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0QW5pbWF0ZXVyU3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FuaW1hdGV1cl9hbmltYXRldXJTdGF0dXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyU3RhdHV0LmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbmltYXRldXJTdGF0dXQuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdEFuaW1hdGV1clN0YXR1dC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTYuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfc3RhdHV0XCJdICNhbmltYXRldXJfc3RhdHV0X25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRGb3JtVHJpYnVuYWwoKSB7XG4gICAgbGV0IHRyaWJ1bmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRyaWJ1bmFsJyk7XG5cbiAgICBpZiAodHJpYnVuYWwgIT0gbnVsbCkge1xuICAgICAgICBmZXRjaChcIi9hZG1pbi9zdGFnZS9sb2FkRm9ybVRyaWJ1bmFsXCIsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnRUcmlidW5hbCAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydFRyaWJ1bmFsIC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF9ub21fdHJpYnVuYWwnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF9hZHJlc3NlX3RyaWJ1bmFsJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfbnVtZXJvX2FkcmVzc2VfdHJpYnVuYWwnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF9jb21tdW5lX3RyaWJ1bmFsJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfdHJpYnVuYWxfc2VydmljZScpLnZhbHVlICE9IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfdHJpYnVuYWxfYXV0b3JpdGUnKS52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyaWJ1bmFsTm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxcIl0gI3RyaWJ1bmFsX25vbV90cmlidW5hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmlidW5hbEFkcmVzc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfYWRyZXNzZV90cmlidW5hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmlidW5hbE51bWVyb0FkcmVzc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfbnVtZXJvX2FkcmVzc2VfdHJpYnVuYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpYnVuYWxDb21tdW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxcIl0gI3RyaWJ1bmFsX2NvbW11bmVfdHJpYnVuYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF90cmlidW5hbF9hdXRvcml0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmlidW5hbFNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfdHJpYnVuYWxfc2VydmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfbm9tX3RyaWJ1bmFsXCIsIHRyaWJ1bmFsTm9tLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2FkcmVzc2VfdHJpYnVuYWxcIiwgdHJpYnVuYWxBZHJlc3NlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX251bWVyb19hZHJlc3NlX3RyaWJ1bmFsXCIsIHRyaWJ1bmFsTnVtZXJvQWRyZXNzZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9jb21tdW5lX3RyaWJ1bmFsXCIsIHRyaWJ1bmFsQ29tbXVuZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF90cmlidW5hbF9hdXRvcml0ZVwiLCB0cmlidW5hbEF1dG9yaXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX3RyaWJ1bmFsX3NlcnZpY2VcIiwgdHJpYnVuYWxTZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vc3RhZ2UvbG9hZEZvcm1UcmlidW5hbFwiLCB7IG1ldGhvZDogXCJQT1NUXCIsYm9keTogZGF0YSxjcmVkZW50aWFsczogJ2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQuZXJyb3IgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JUcmlidW5hbCcpLmlubmVySFRNTCA9IFwiTGUgdHJpYnVuYWwgZXhpc3RlIGTDqWrDoFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RUcmlidW5hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFnZV90cmlidW5hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWwuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUcmlidW5hbC5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBsb2FkRm9ybVByZWZlY3R1cmUoKSB7XG4gICAgbGV0IHByZWZlY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJlZmVjdHVyZScpO1xuXG4gICAgaWYgKHByZWZlY3R1cmUgIT0gbnVsbCkge1xuICAgICAgICBmZXRjaChcIi9hZG1pbi9zdGFnZS9sb2FkRm9ybVByZWZlY3R1cmVcIiwge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnRQcmVmZWN0dXJlIC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0UHJlZmVjdHVyZSAubW9kYWwtYm9keSBidXR0b24nKTtcbiAgICAgICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlXCJdICNwcmVmZWN0dXJlX25vbVByZWZlY3R1cmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfYWRyZXNzZVByZWZlY3R1cmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfbnVtZXJvQWRyZXNzZVByZWZlY3R1cmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfY29tbXVuZVByZWZlY3R1cmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfY3BQcmVmZWN0dXJlJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlXCJdICNwcmVmZWN0dXJlX3ByZWZlY3R1cmVTZXJ2aWNlJykudmFsdWUgIT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfcHJlZmVjdHVyZUF1dG9yaXRlJykudmFsdWUgIT0gXCJcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmVjdHVyZU5vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfbm9tUHJlZmVjdHVyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmVjdHVyZUFkcmVzc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlXCJdICNwcmVmZWN0dXJlX2FkcmVzc2VQcmVmZWN0dXJlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmZWN0dXJlTnVtZXJvQWRyZXNzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfbnVtZXJvQWRyZXNzZVByZWZlY3R1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZWZlY3R1cmVDb21tdW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9jb21tdW5lUHJlZmVjdHVyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmVjdHVyZUF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9wcmVmZWN0dXJlQXV0b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9wcmVmZWN0dXJlU2VydmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmVjdHVyZUNwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9jcFByZWZlY3R1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfbm9tUHJlZmVjdHVyZVwiLCBwcmVmZWN0dXJlTm9tLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX2FkcmVzc2VQcmVmZWN0dXJlXCIsIHByZWZlY3R1cmVBZHJlc3NlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX251bWVyb0FkcmVzc2VQcmVmZWN0dXJlXCIsIHByZWZlY3R1cmVOdW1lcm9BZHJlc3NlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX2NvbW11bmVQcmVmZWN0dXJlXCIsIHByZWZlY3R1cmVDb21tdW5lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX3ByZWZlY3R1cmVBdXRvcml0ZVwiLCBwcmVmZWN0dXJlQXV0b3JpdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfcHJlZmVjdHVyZVNlcnZpY2VcIiwgcHJlZmVjdHVyZVNlcnZpY2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfY3BQcmVmZWN0dXJlXCIsIHByZWZlY3R1cmVDcC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL3N0YWdlL2xvYWRGb3JtUHJlZmVjdHVyZVwiLCB7IG1ldGhvZDogXCJQT1NUXCIsYm9keTogZGF0YSxjcmVkZW50aWFsczogJ2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LmVycm9yICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yUHJlZmVjdHVyZScpLmlubmVySFRNTCA9IFwiTGEgcHLDqWZlY3R1cmUgZXhpc3RlIGTDqWrDoFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcmVmZWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWdlX3ByZWZlY3R1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0UHJlZmVjdHVyZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUHJlZmVjdHVyZS5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRGb3JtU3RhZ2lhaXJlKCkge1xuICAgIGxldCBzdGFnaWFpcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkU3RhZ2lhaXJlJyk7XG5cbiAgICBpZiAoc3RhZ2lhaXJlICE9IG51bGwpIHtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vc3RhZ2UvbG9hZEZvcm1TdGFnaWFpcmVcIiwge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnRTdGFnaWFpcmUgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnRTdGFnaWFpcmUgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGJ0biAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwic3RhZ2lhaXJlXCJdICNzdGFnaWFpcmVfbm9tU3RhZ2lhaXJlJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9wcmVub21TdGFnaWFpcmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX2NwU3RhZ2lhaXJlJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9jb21tdW5lU3RhZ2lhaXJlJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9ub21OYWlzc2FuY2VTdGFnaWFpcmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX2RhdGVOYWlzc2FuY2VTdGFnaWFpcmUnKS52YWx1ZS5sZW5ndGggIT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX2xpZXVOYWlzc2FuY2VTdGFnaWFpcmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX2FkcmVzc2VTdGFnaWFpcmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX25hdGlvbmFsaXRlU3RhZ2lhaXJlJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9udW1lcm9Qb3J0YWJsZVN0YWdpYWlyZScpLnZhbHVlLmxlbmd0aCAhPSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwic3RhZ2lhaXJlXCJdICNzdGFnaWFpcmVfbnVtZXJvRml4ZVN0YWdpYWlyZScpLnZhbHVlLmxlbmd0aCAhPSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwic3RhZ2lhaXJlXCJdICNzdGFnaWFpcmVfZW1haWxTdGFnaWFpcmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX251bWVyb0FkcmVzc2VTdGFnaWFpcmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX2NpdmlsaXRlJykudmFsdWUubGVuZ3RoICE9IFwiXCIpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFnaWFpcmVOb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9ub21TdGFnaWFpcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWdpYWlyZVByZW5vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX3ByZW5vbVN0YWdpYWlyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhZ2lhaXJlQ3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9jcFN0YWdpYWlyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhZ2lhaXJlQ29tbXVuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX2NvbW11bmVTdGFnaWFpcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWdpYWlyZU5vbU5haXNzYW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX25vbU5haXNzYW5jZVN0YWdpYWlyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhZ2lhaXJlRGF0ZU5haXNzYW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX2RhdGVOYWlzc2FuY2VTdGFnaWFpcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWdpYWlyZUxpZXVOYWlzc2FuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9saWV1TmFpc3NhbmNlU3RhZ2lhaXJlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFnaWFpcmVBZHJlc3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwic3RhZ2lhaXJlXCJdICNzdGFnaWFpcmVfYWRyZXNzZVN0YWdpYWlyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhZ2lhaXJlTmF0aW9uYWxpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9uYXRpb25hbGl0ZVN0YWdpYWlyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhZ2lhaXJlTnVtZXJvUG9ydGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9udW1lcm9Qb3J0YWJsZVN0YWdpYWlyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhZ2lhaXJlTnVtZXJvRml4ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX251bWVyb0ZpeGVTdGFnaWFpcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWdpYWlyZUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwic3RhZ2lhaXJlXCJdICNzdGFnaWFpcmVfZW1haWxTdGFnaWFpcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWdpYWlyZUNhcnRlSmV1bmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9jYXJ0ZUpldW5lU3RhZ2lhaXJlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFnaWFpcmVQYXJ0ZW5haXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwic3RhZ2lhaXJlXCJdICNzdGFnaWFpcmVfcGFydGVuYWlyZVN0YWdpYWlyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhZ2lhaXJlQWRoZXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJzdGFnaWFpcmVcIl0gI3N0YWdpYWlyZV9hZGhlcmVudFN0YWdpYWlyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhZ2lhaXJlTnVtZXJvQWRyZXNzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInN0YWdpYWlyZVwiXSAjc3RhZ2lhaXJlX251bWVyb0FkcmVzc2VTdGFnaWFpcmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWdpYWlyZUNpdmlsaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwic3RhZ2lhaXJlXCJdICNzdGFnaWFpcmVfY2l2aWxpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwic3RhZ2lhaXJlXCJdICNzdGFnaWFpcmVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInN0YWdpYWlyZV9ub21TdGFnaWFpcmVcIiwgc3RhZ2lhaXJlTm9tLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJzdGFnaWFpcmVfcHJlbm9tU3RhZ2lhaXJlXCIsIHN0YWdpYWlyZVByZW5vbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwic3RhZ2lhaXJlX2NwU3RhZ2lhaXJlXCIsIHN0YWdpYWlyZUNwLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJzdGFnaWFpcmVfY29tbXVuZVN0YWdpYWlyZVwiLCBzdGFnaWFpcmVDb21tdW5lLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJzdGFnaWFpcmVfbm9tTmFpc3NhbmNlU3RhZ2lhaXJlXCIsIHN0YWdpYWlyZU5vbU5haXNzYW5jZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwic3RhZ2lhaXJlX2RhdGVOYWlzc2FuY2VTdGFnaWFpcmVcIiwgc3RhZ2lhaXJlRGF0ZU5haXNzYW5jZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwic3RhZ2lhaXJlX2xpZXVOYWlzc2FuY2VTdGFnaWFpcmVcIiwgc3RhZ2lhaXJlTGlldU5haXNzYW5jZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwic3RhZ2lhaXJlX2FkcmVzc2VTdGFnaWFpcmVcIiwgc3RhZ2lhaXJlQWRyZXNzZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwic3RhZ2lhaXJlX25hdGlvbmFsaXRlU3RhZ2lhaXJlXCIsIHN0YWdpYWlyZU5hdGlvbmFsaXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJzdGFnaWFpcmVfbnVtZXJvUG9ydGFibGVTdGFnaWFpcmVcIiwgc3RhZ2lhaXJlTnVtZXJvUG9ydGFibGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInN0YWdpYWlyZV9udW1lcm9GaXhlU3RhZ2lhaXJlXCIsIHN0YWdpYWlyZU51bWVyb0ZpeGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInN0YWdpYWlyZV9lbWFpbFN0YWdpYWlyZVwiLCBzdGFnaWFpcmVFbWFpbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwic3RhZ2lhaXJlX2NhcnRlSmV1bmVTdGFnaWFpcmVcIiwgc3RhZ2lhaXJlQ2FydGVKZXVuZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwic3RhZ2lhaXJlX3BhcnRlbmFpcmVTdGFnaWFpcmVcIiwgc3RhZ2lhaXJlUGFydGVuYWlyZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwic3RhZ2lhaXJlX2FkaGVyZW50U3RhZ2lhaXJlXCIsIHN0YWdpYWlyZUFkaGVyZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJzdGFnaWFpcmVfbnVtZXJvQWRyZXNzZVN0YWdpYWlyZVwiLCBzdGFnaWFpcmVOdW1lcm9BZHJlc3NlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJzdGFnaWFpcmVfY2l2aWxpdGVcIiwgc3RhZ2lhaXJlQ2l2aWxpdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInN0YWdpYWlyZVwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vc3RhZ2UvbG9hZEZvcm1TdGFnaWFpcmVcIiwgeyBtZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGRhdGEsY3JlZGVudGlhbHM6ICdpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0LnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRhdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC5lcnJvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvclN0YWdpYWlyZScpLmlubmVySFRNTCA9IFwiTGUgc3RhZ2lhaXJlIGV4aXN0ZSBkw6lqw6BcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0U3RhZ2lhaXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWdlX3N0YWdpYWlyZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RTdGFnaWFpcmUuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RTdGFnaWFpcmUuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFN0YWdpYWlyZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlU3Rhc2VsZWN0U3RhZ2lhaXJlLmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
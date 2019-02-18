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
              console.log(prefectureAutorite.value);
              data.append("prefecture_nomPrefecture", prefectureNom.value);
              data.append("prefecture_adressePrefecture", prefectureAdresse.value);
              data.append("prefecture_numeroAdressePrefecture", prefectureNumeroAdresse.value);
              data.append("prefecture_communePrefecture", prefectureCommune.value);
              data.append("prefecturePrefectureAutorite", prefectureAutorite.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJvbmNsaWNrU3RhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbmNsaWNrVHJpYnVuYXV4Iiwib25jbGlja0FuaW1hdGV1ciIsIm9uY2xpY2tQcmVmZWN0dXJlIiwiYmx1ZUFycm93Iiwib3JhbmdlQXJyb3ciLCJwdXJwbGVBcnJvdyIsInJlZEFycm93IiwibXlEcm9wZG93bk1lbnUxIiwibXlEcm9wZG93bk1lbnUyIiwibXlEcm9wZG93bk1lbnUzIiwibXlEcm9wZG93bk1lbnU0IiwiYWN0aXZlU3RhZ2VMaXN0IiwiYWN0aXZlTGlldVN0YWdlIiwiYWN0aXZlVHJpYnVuYWxMaXN0IiwiYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSIsImFjdGl2ZVRyaWJ1bmFsU2VydmljZSIsImFjdGl2ZUFuaW1hdGV1ckxpc3QiLCJhY3RpdmVBbmltYXRldXJGb25jdGlvbiIsImFjdGl2ZUFuaW1hdGV1clN0YXR1dCIsImFjdGl2ZVByZWZlY3R1cmVMaXN0IiwiYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlIiwiYWN0aXZlUHJlZmVjdHVyZVNlcnZpY2UiLCJibHVlQXJyb3dWYWx1ZSIsIm9yYW5nZUFycm93VmFsdWUiLCJwdXJwbGVBcnJvd1ZhbHVlIiwicmVkQXJyb3dWYWx1ZSIsInVybCIsIlVSTCIsInBhdGhuYW1lIiwid2luZG93Iiwib25sb2FkIiwiY2hhbmdlQWN0aXZlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjbG9zZSIsImNsb3NlMiIsImNsb3NlMyIsImNsb3NlNCIsImNsb3NlNSIsImNsb3NlNiIsImNsb3NlVHJpYnVuYWwiLCJjbG9zZVByZWZlY3R1cmUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwiLCJsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSIsImxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UiLCJsb2FkRm9ybVByZWZlY3R1cmVBdXRvcml0ZSIsImxvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb24iLCJsb2FkRm9ybUFuaW1hdGV1clN0YXR1dCIsImxvYWRGb3JtVHJpYnVuYWwiLCJsb2FkRm9ybVByZWZlY3R1cmUiLCJhdXRvcml0ZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVwb25zZSIsInRleHQiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJidG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInRva2VuIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwiYm9keSIsInJlc3VsdGF0IiwianNvbiIsImVycm9yIiwic2VsZWN0VHJpYnVuYWxBdXRvcml0ZSIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImFkZCIsInNlbGVjdGVkSW5kZXgiLCJjbGljayIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsInNlcnZpY2UiLCJzZWxlY3RUcmlidW5hbFNlcnZpY2UiLCJzZWxlY3RQcmVmZWN0dXJlU2VydmljZSIsInNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZSIsImZvbmN0aW9uIiwic2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24iLCJzdGF0dXQiLCJzZWxlY3RBbmltYXRldXJTdGF0dXQiLCJ0cmlidW5hbCIsInRyaWJ1bmFsTm9tIiwidHJpYnVuYWxBZHJlc3NlIiwidHJpYnVuYWxOdW1lcm9BZHJlc3NlIiwidHJpYnVuYWxDb21tdW5lIiwidHJpYnVuYWxBdXRvcml0ZSIsInRyaWJ1bmFsU2VydmljZSIsInNlbGVjdFRyaWJ1bmFsIiwicHJlZmVjdHVyZSIsInByZWZlY3R1cmVOb20iLCJwcmVmZWN0dXJlQWRyZXNzZSIsInByZWZlY3R1cmVOdW1lcm9BZHJlc3NlIiwicHJlZmVjdHVyZUNvbW11bmUiLCJwcmVmZWN0dXJlQXV0b3JpdGUiLCJwcmVmZWN0dXJlU2VydmljZSIsInByZWZlY3R1cmVDcCIsInNlbGVjdFByZWZlY3R1cmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQUEsbUJBQU8sQ0FBQyxrREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVA7O0FBRUEsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQSxJQUFNRSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2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RCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvYXBwLmpzXCIpO1xuIiwicmVxdWlyZSgnLi4vc2Nzcy9tYWluLnNjc3MnKTtcbnJlcXVpcmUoJy4uL2pzL3BvcFVwLmpzJyk7XG5cbmNvbnN0IG9uY2xpY2tTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3N0YWdlJyk7XG5jb25zdCBvbmNsaWNrVHJpYnVuYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfdHJpYnVuYXV4Jyk7XG5jb25zdCBvbmNsaWNrQW5pbWF0ZXVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfYW5pbWF0ZXVyJyk7XG5jb25zdCBvbmNsaWNrUHJlZmVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3ByZWZlY3R1cmUnKTtcblxuY29uc3QgYmx1ZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX2JsdWUnKTtcbmNvbnN0IG9yYW5nZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX29yYW5nZScpO1xuY29uc3QgcHVycGxlQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcHVycGxlJyk7XG5jb25zdCByZWRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9yZWQnKTtcblxuY29uc3QgbXlEcm9wZG93bk1lbnUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Rfc3RhZ2VzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF90cmlidW5hdXgnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X2FuaW1hdGV1cnMnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3ByZWZlY3R1cmVzJyk7XG5cbmNvbnN0IGFjdGl2ZVN0YWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfc3RhZ2VfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZUxpZXVTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfbGlldV9zdGFnZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV90cmlidW5hbF9saXN0ZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfc2VydmljZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2ZvbmN0aW9uJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJTdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9zdGF0dXQnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3ByZWZlY3R1cmVfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX3NlcnZpY2UnKTtcblxubGV0IGJsdWVBcnJvd1ZhbHVlID0gMDtcbmxldCBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbmxldCBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbmxldCByZWRBcnJvd1ZhbHVlID0gMDtcblxubGV0IHVybCA9IGRvY3VtZW50LlVSTDtcbmxldCBwYXRobmFtZSA9IG5ldyBVUkwodXJsKS5wYXRobmFtZTtcblxud2luZG93Lm9ubG9hZCA9IGNoYW5nZUFjdGl2ZUJ1dHRvbigpO1xuXG5vbmNsaWNrU3RhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKHJlZEFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja1RyaWJ1bmF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoYmx1ZUFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrQW5pbWF0ZXVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihvcmFuZ2VBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG9yYW5nZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tQcmVmZWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihwdXJwbGVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ1dHRvbigpe1xuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlJykge1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5jb2xvciA9ICcjZmY1NzQ0JztcbiAgICAgICAgYWN0aXZlU3RhZ2VMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlL2xpZXVTdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZUxpZXVTdGFnZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbCcpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbExpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9zZXJ2aWNlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzQwOThmMyc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uLnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9hbmltYXRldXIvc3RhdHV0Jykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUxpc3Quc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxufVxuXG5pZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlL3NlcnZpY2UnKSB7XG4gICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5jb2xvciA9ICcjOWMyZGIzJztcbiAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xufSIsImNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG5jb25zdCBjbG9zZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UyJyk7XG5jb25zdCBjbG9zZTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UzJyk7XG5jb25zdCBjbG9zZTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2U0Jyk7XG5jb25zdCBjbG9zZTUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2U1Jyk7XG5jb25zdCBjbG9zZTYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2U2Jyk7XG5jb25zdCBjbG9zZVRyaWJ1bmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlVHJpYnVuYWwnKTtcbmNvbnN0IGNsb3NlUHJlZmVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZVByZWZlY3R1cmUnKTtcblxuLy8gcG9wLXVwIGFqb3V0IHNlcnZpY2UvYXV0b3JpdMOpL3N0YXR1dC9mb25jdGlvbiBkYW5zIGVudGl0w6kgdHJpYnVuYWwvcHLDqWbDqWN0dXJlL2FuaW1hdGV1clxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCgpO1xuICAgIGxvYWRGb3JtVHJpYnVuYWxTZXJ2aWNlKCk7XG4gICAgbG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSgpO1xuICAgIGxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlKCk7XG4gICAgbG9hZEZvcm1BbmltYXRldXJGb25jdGlvbigpO1xuICAgIGxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0KCk7XG4gICAgbG9hZEZvcm1UcmlidW5hbCgpO1xuICAgIGxvYWRGb3JtUHJlZmVjdHVyZSgpO1xufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWwoKSB7XG4gICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEF1dG9yaXRlVHJpYnVuYWwnKTtcblxuICAgIGlmIChhdXRvcml0ZSAhPSBudWxsKSB7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlL2xvYWRGb3JtQXV0b3JpdGVUcmlidW5hbFwiLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydCAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2F1dG9yaXRlX25vbVwiLCBhdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfYXV0b3JpdGVfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdGF0LmVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJykuaW5uZXJIVE1MID0gXCJMJ2F1dG9yaXTDqSBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlidW5hbF90cmlidW5hbF9hdXRvcml0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSgpIHtcbiAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTZXJ2aWNlVHJpYnVuYWwnKTtcblxuICAgIGlmIChzZXJ2aWNlICE9IG51bGwpIHtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VUcmlidW5hbFwiLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MiAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQyIC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9zZXJ2aWNlX25vbVwiLCBzZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9zZXJ2aWNlX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVRyaWJ1bmFsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdGF0LmVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yMicpLmlubmVySFRNTCA9IFwiTGUgc2VydmljZSBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbFNlcnZpY2Uuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsU2VydmljZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTIuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybVByZWZlY3R1cmVTZXJ2aWNlKCkge1xuICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFNlcnZpY2VQcmVmZWN0dXJlJyk7XG5cbiAgICBpZiAoc2VydmljZSAhPSBudWxsKSB7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VQcmVmZWN0dXJlXCIsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVwb25zZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQzIC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDMgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ0biAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfc2VydmljZV9ub21cIiwgc2VydmljZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVByZWZlY3R1cmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhdC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjQnKS5pbm5lckhUTUwgPSBcIkxlIHNlcnZpY2UgZXhpc3RlIGTDqWrDoFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRhdC52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWZlY3R1cmVfcHJlZmVjdHVyZVNlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RQcmVmZWN0dXJlU2VydmljZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1QcmVmZWN0dXJlQXV0b3JpdGUoKSB7XG4gICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEF1dG9yaXRlUHJlZmVjdHVyZScpO1xuXG4gICAgaWYgKGF1dG9yaXRlICE9IG51bGwpIHtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NCAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ0IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX2F1dG9yaXRlX25vbVwiLCBhdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVByZWZlY3R1cmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhdC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjMnKS5pbm5lckhUTUwgPSBcIkwnYXV0b3JpdMOpIGV4aXN0ZSBkw6lqw6BcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0YXQudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlZmVjdHVyZV9wcmVmZWN0dXJlQXV0b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTQuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uKCkge1xuICAgIGxldCBmb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRGb25jdGlvbkFuaW1hdGV1cicpO1xuXG4gICAgaWYgKGZvbmN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXBvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDUgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NSAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX2ZvbmN0aW9uXCJdICNhbmltYXRldXJfZm9uY3Rpb25fbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbVwiLCBmb25jdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhdC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjUnKS5pbm5lckhUTUwgPSBcIkxhIGZvbmN0aW9uIGV4aXN0ZSBkw6lqw6BcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0YXQudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbmltYXRldXJfYW5pbWF0ZXVyRm9uY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24uYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RBbmltYXRldXJGb25jdGlvbi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTUuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfZm9uY3Rpb25cIl0gI2FuaW1hdGV1cl9mb25jdGlvbl9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1BbmltYXRldXJTdGF0dXQoKSB7XG5cbiAgICBsZXQgc3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFN0YXR1dEFuaW1hdGV1cicpO1xuXG4gICAgaWYgKHN0YXR1dCAhPSBudWxsKSB7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9zdGF0dXQvbG9hZEZvcm1BbmltYXRldXJTdGF0dXRcIiwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXBvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDYgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NiAubW9kYWwtYm9keSBidXR0b24nKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfbm9tJykudmFsdWUubGVuZ3RoICE9IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX3N0YXR1dF9ub21cIiwgc3RhdHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJhbmltYXRldXJfc3RhdHV0X190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9zdGF0dXQvbG9hZEZvcm1BbmltYXRldXJTdGF0dXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRhdC5lcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjYnKS5pbm5lckhUTUwgPSBcIkxlIHN0YXR1dCBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0QW5pbWF0ZXVyU3RhdHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FuaW1hdGV1cl9hbmltYXRldXJTdGF0dXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyU3RhdHV0LmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbmltYXRldXJTdGF0dXQuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdEFuaW1hdGV1clN0YXR1dC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTYuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJhbmltYXRldXJfc3RhdHV0XCJdICNhbmltYXRldXJfc3RhdHV0X25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRGb3JtVHJpYnVuYWwoKSB7XG4gICAgbGV0IHRyaWJ1bmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRyaWJ1bmFsJyk7XG5cbiAgICBpZiAodHJpYnVuYWwgIT0gbnVsbCkge1xuICAgICAgICBmZXRjaChcIi9hZG1pbi9zdGFnZS9sb2FkRm9ybVRyaWJ1bmFsXCIsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnRUcmlidW5hbCAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydFRyaWJ1bmFsIC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGlmIChidG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF9ub21fdHJpYnVuYWwnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF9hZHJlc3NlX3RyaWJ1bmFsJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfbnVtZXJvX2FkcmVzc2VfdHJpYnVuYWwnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF9jb21tdW5lX3RyaWJ1bmFsJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfdHJpYnVuYWxfc2VydmljZScpLnZhbHVlICE9IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfdHJpYnVuYWxfYXV0b3JpdGUnKS52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyaWJ1bmFsTm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxcIl0gI3RyaWJ1bmFsX25vbV90cmlidW5hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmlidW5hbEFkcmVzc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfYWRyZXNzZV90cmlidW5hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmlidW5hbE51bWVyb0FkcmVzc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfbnVtZXJvX2FkcmVzc2VfdHJpYnVuYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpYnVuYWxDb21tdW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxcIl0gI3RyaWJ1bmFsX2NvbW11bmVfdHJpYnVuYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF90cmlidW5hbF9hdXRvcml0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmlidW5hbFNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbFwiXSAjdHJpYnVuYWxfdHJpYnVuYWxfc2VydmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsXCJdICN0cmlidW5hbF9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfbm9tX3RyaWJ1bmFsXCIsIHRyaWJ1bmFsTm9tLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2FkcmVzc2VfdHJpYnVuYWxcIiwgdHJpYnVuYWxBZHJlc3NlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX251bWVyb19hZHJlc3NlX3RyaWJ1bmFsXCIsIHRyaWJ1bmFsTnVtZXJvQWRyZXNzZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9jb21tdW5lX3RyaWJ1bmFsXCIsIHRyaWJ1bmFsQ29tbXVuZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF90cmlidW5hbF9hdXRvcml0ZVwiLCB0cmlidW5hbEF1dG9yaXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX3RyaWJ1bmFsX3NlcnZpY2VcIiwgdHJpYnVuYWxTZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vc3RhZ2UvbG9hZEZvcm1UcmlidW5hbFwiLCB7IG1ldGhvZDogXCJQT1NUXCIsYm9keTogZGF0YSxjcmVkZW50aWFsczogJ2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQuZXJyb3IgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JUcmlidW5hbCcpLmlubmVySFRNTCA9IFwiTGUgdHJpYnVuYWwgZXhpc3RlIGTDqWrDoFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RUcmlidW5hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFnZV90cmlidW5hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWwuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUcmlidW5hbC5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBsb2FkRm9ybVByZWZlY3R1cmUoKSB7XG4gICAgbGV0IHByZWZlY3R1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJlZmVjdHVyZScpO1xuXG4gICAgaWYgKHByZWZlY3R1cmUgIT0gbnVsbCkge1xuICAgICAgICBmZXRjaChcIi9hZG1pbi9zdGFnZS9sb2FkRm9ybVByZWZlY3R1cmVcIiwge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnRQcmVmZWN0dXJlIC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0UHJlZmVjdHVyZSAubW9kYWwtYm9keSBidXR0b24nKTtcbiAgICAgICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlXCJdICNwcmVmZWN0dXJlX25vbVByZWZlY3R1cmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfYWRyZXNzZVByZWZlY3R1cmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfbnVtZXJvQWRyZXNzZVByZWZlY3R1cmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfY29tbXVuZVByZWZlY3R1cmUnKS52YWx1ZS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfY3BQcmVmZWN0dXJlJykudmFsdWUubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlXCJdICNwcmVmZWN0dXJlX3ByZWZlY3R1cmVTZXJ2aWNlJykudmFsdWUgIT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfcHJlZmVjdHVyZUF1dG9yaXRlJykudmFsdWUgIT0gXCJcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmVjdHVyZU5vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfbm9tUHJlZmVjdHVyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmVjdHVyZUFkcmVzc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlXCJdICNwcmVmZWN0dXJlX2FkcmVzc2VQcmVmZWN0dXJlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmZWN0dXJlTnVtZXJvQWRyZXNzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVcIl0gI3ByZWZlY3R1cmVfbnVtZXJvQWRyZXNzZVByZWZlY3R1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZWZlY3R1cmVDb21tdW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9jb21tdW5lUHJlZmVjdHVyZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmVjdHVyZUF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9wcmVmZWN0dXJlQXV0b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9wcmVmZWN0dXJlU2VydmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmVjdHVyZUNwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9jcFByZWZlY3R1cmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZVwiXSAjcHJlZmVjdHVyZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbmNvbnNvbGUubG9nKHByZWZlY3R1cmVBdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9ub21QcmVmZWN0dXJlXCIsIHByZWZlY3R1cmVOb20udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfYWRyZXNzZVByZWZlY3R1cmVcIiwgcHJlZmVjdHVyZUFkcmVzc2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfbnVtZXJvQWRyZXNzZVByZWZlY3R1cmVcIiwgcHJlZmVjdHVyZU51bWVyb0FkcmVzc2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfY29tbXVuZVByZWZlY3R1cmVcIiwgcHJlZmVjdHVyZUNvbW11bmUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVQcmVmZWN0dXJlQXV0b3JpdGVcIiwgcHJlZmVjdHVyZUF1dG9yaXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX3ByZWZlY3R1cmVTZXJ2aWNlXCIsIHByZWZlY3R1cmVTZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX2NwUHJlZmVjdHVyZVwiLCBwcmVmZWN0dXJlQ3AudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9zdGFnZS9sb2FkRm9ybVByZWZlY3R1cmVcIiwgeyBtZXRob2Q6IFwiUE9TVFwiLGJvZHk6IGRhdGEsY3JlZGVudGlhbHM6ICdpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC5lcnJvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvclByZWZlY3R1cmUnKS5pbm5lckhUTUwgPSBcIkxhIHByw6lmZWN0dXJlIGV4aXN0ZSBkw6lqw6BcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJlZmVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFnZV9wcmVmZWN0dXJlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZS5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFByZWZlY3R1cmUuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFByZWZlY3R1cmUubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVByZWZlY3R1cmUuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvbWFpbi5zY3NzPzM0ZmUiXSwibmFtZXMiOlsicmVxdWlyZSIsIm9uY2xpY2tTdGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2tUcmlidW5hdXgiLCJvbmNsaWNrQW5pbWF0ZXVyIiwib25jbGlja1ByZWZlY3R1cmUiLCJibHVlQXJyb3ciLCJvcmFuZ2VBcnJvdyIsInB1cnBsZUFycm93IiwicmVkQXJyb3ciLCJteURyb3Bkb3duTWVudTEiLCJteURyb3Bkb3duTWVudTIiLCJteURyb3Bkb3duTWVudTMiLCJteURyb3Bkb3duTWVudTQiLCJhY3RpdmVTdGFnZUxpc3QiLCJhY3RpdmVMaWV1U3RhZ2UiLCJhY3RpdmVUcmlidW5hbExpc3QiLCJhY3RpdmVUcmlidW5hbEF1dG9yaXRlIiwiYWN0aXZlVHJpYnVuYWxTZXJ2aWNlIiwiYWN0aXZlQW5pbWF0ZXVyTGlzdCIsImFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uIiwiYWN0aXZlQW5pbWF0ZXVyU3RhdHV0IiwiYWN0aXZlUHJlZmVjdHVyZUxpc3QiLCJhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUiLCJhY3RpdmVQcmVmZWN0dXJlU2VydmljZSIsImJsdWVBcnJvd1ZhbHVlIiwib3JhbmdlQXJyb3dWYWx1ZSIsInB1cnBsZUFycm93VmFsdWUiLCJyZWRBcnJvd1ZhbHVlIiwidXJsIiwiVVJMIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjaGFuZ2VBY3RpdmVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5Iiwib3BhY2l0eSIsImNvbG9yIiwiZm9udFdlaWdodCIsImNsb3NlIiwiY2xvc2UyIiwiY2xvc2UzIiwiY2xvc2U0IiwiY2xvc2U1IiwiY2xvc2U2Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwibG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsIiwibG9hZEZvcm1UcmlidW5hbFNlcnZpY2UiLCJsb2FkRm9ybVByZWZlY3R1cmVTZXJ2aWNlIiwibG9hZEZvcm1QcmVmZWN0dXJlQXV0b3JpdGUiLCJsb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uIiwibG9hZEZvcm1BbmltYXRldXJTdGF0dXQiLCJhdXRvcml0ZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVwb25zZSIsInRleHQiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJidG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInRva2VuIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwiYm9keSIsInJlc3VsdGF0IiwianNvbiIsImVycm9yIiwic2VsZWN0VHJpYnVuYWxBdXRvcml0ZSIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImFkZCIsInNlbGVjdGVkSW5kZXgiLCJjbGljayIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsInNlcnZpY2UiLCJzZWxlY3RUcmlidW5hbFNlcnZpY2UiLCJzZWxlY3RQcmVmZWN0dXJlU2VydmljZSIsInNlbGVjdFByZWZlY3R1cmVBdXRvcml0ZSIsImZvbmN0aW9uIiwic2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24iLCJzdGF0dXQiLCJzZWxlY3RBbmltYXRldXJTdGF0dXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FB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d0JBQU0sQ0FBQ0UsWUFBUCxDQUFvQixPQUFwQixFQUE2Qk4sUUFBUSxDQUFDTyxFQUF0QztBQUNBSCx3QkFBTSxDQUFDakIsSUFBUCxHQUFjYSxRQUFRLENBQUNQLEtBQXZCO0FBQ0E2Qix1Q0FBcUIsQ0FBQ2QsR0FBdEIsQ0FBMEJKLE1BQTFCO0FBQ0FrQix1Q0FBcUIsQ0FBQ2IsYUFBdEIsR0FBc0NhLHFCQUFxQixDQUFDbEMsTUFBdEIsR0FBK0IsQ0FBckU7QUFDQWQsd0JBQU0sQ0FBQ29DLEtBQVA7QUFDSDtBQUNKLGVBbEJELEVBa0JHQyxLQWxCSCxDQWtCUyxVQUFDVCxLQUFELEVBQVc7QUFDaEJVLHVCQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNILGVBcEJEO0FBcUJILGFBOUJELE1BOEJLO0FBQ0QxRSxzQkFBUSxDQUFDQyxhQUFULENBQXVCLHFEQUF2QixFQUE4RXFGLFNBQTlFLENBQXdGTixHQUF4RixDQUE0RixPQUE1RjtBQUNIO0FBQ0osV0FwQ0Q7QUFxQ0g7QUFDSjtBQUNKLEtBakRELEVBaURHRyxLQWpESCxDQWlEUyxVQUFDVCxLQUFELEVBQVc7QUFDaEJVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0gsS0FuREQ7QUFvREg7QUFDSixDOzs7Ozs7Ozs7OztBQy9XRCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvYXBwLmpzXCIpO1xuIiwicmVxdWlyZSgnLi4vc2Nzcy9tYWluLnNjc3MnKTtcbnJlcXVpcmUoJy4uL2pzL3BvcFVwLmpzJyk7XG5cbmNvbnN0IG9uY2xpY2tTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3N0YWdlJyk7XG5jb25zdCBvbmNsaWNrVHJpYnVuYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfdHJpYnVuYXV4Jyk7XG5jb25zdCBvbmNsaWNrQW5pbWF0ZXVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfYW5pbWF0ZXVyJyk7XG5jb25zdCBvbmNsaWNrUHJlZmVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3ByZWZlY3R1cmUnKTtcblxuY29uc3QgYmx1ZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX2JsdWUnKTtcbmNvbnN0IG9yYW5nZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX29yYW5nZScpO1xuY29uc3QgcHVycGxlQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcHVycGxlJyk7XG5jb25zdCByZWRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9yZWQnKTtcblxuY29uc3QgbXlEcm9wZG93bk1lbnUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Rfc3RhZ2VzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF90cmlidW5hdXgnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X2FuaW1hdGV1cnMnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3ByZWZlY3R1cmVzJyk7XG5cbmNvbnN0IGFjdGl2ZVN0YWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfc3RhZ2VfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZUxpZXVTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfbGlldV9zdGFnZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV90cmlidW5hbF9saXN0ZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfc2VydmljZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2ZvbmN0aW9uJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJTdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9zdGF0dXQnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3ByZWZlY3R1cmVfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX3NlcnZpY2UnKTtcblxubGV0IGJsdWVBcnJvd1ZhbHVlID0gMDtcbmxldCBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbmxldCBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbmxldCByZWRBcnJvd1ZhbHVlID0gMDtcblxubGV0IHVybCA9IGRvY3VtZW50LlVSTDtcbmxldCBwYXRobmFtZSA9IG5ldyBVUkwodXJsKS5wYXRobmFtZTtcblxud2luZG93Lm9ubG9hZCA9IGNoYW5nZUFjdGl2ZUJ1dHRvbigpO1xuXG5vbmNsaWNrU3RhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKHJlZEFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja1RyaWJ1bmF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoYmx1ZUFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrQW5pbWF0ZXVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihvcmFuZ2VBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG9yYW5nZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tQcmVmZWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihwdXJwbGVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ1dHRvbigpe1xuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlJykge1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5jb2xvciA9ICcjZmY1NzQ0JztcbiAgICAgICAgYWN0aXZlU3RhZ2VMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlL2xpZXVTdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZUxpZXVTdGFnZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbCcpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbExpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9zZXJ2aWNlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzQwOThmMyc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uLnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9hbmltYXRldXIvc3RhdHV0Jykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUxpc3Quc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxufVxuXG5pZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlL3NlcnZpY2UnKSB7XG4gICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5jb2xvciA9ICcjOWMyZGIzJztcbiAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xufSIsIlxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbmNvbnN0IGNsb3NlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTInKTtcbmNvbnN0IGNsb3NlMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTMnKTtcbmNvbnN0IGNsb3NlNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTQnKTtcbmNvbnN0IGNsb3NlNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTUnKTtcbmNvbnN0IGNsb3NlNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZTYnKTtcblxuLy8gcG9wLXVwIGFqb3V0IHNlcnZpY2UvYXV0b3JpdMOpL3N0YXR1dC9mb25jdGlvbiBkYW5zIGVudGl0w6kgdHJpYnVuYWwvcHLDqWbDqWN0dXJlL2FuaW1hdGV1clxuZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCgpO1xuICAgIGxvYWRGb3JtVHJpYnVuYWxTZXJ2aWNlKCk7XG4gICAgbG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSgpO1xuICAgIGxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlKCk7XG4gICAgbG9hZEZvcm1BbmltYXRldXJGb25jdGlvbigpO1xuICAgIGxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0KCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCgpe1xuICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRBdXRvcml0ZVRyaWJ1bmFsJyk7XG5cbiAgICBpZihhdXRvcml0ZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2F1dG9yaXRlX25vbVwiLCBhdXRvcml0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvYXV0b3JpdGUvbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQuZXJyb3IgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpLmlubmVySFRNTCA9IFwiTCdhdXRvcml0w6kgZXhpc3RlIGTDqWrDoFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RUcmlidW5hbEF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX2F1dG9yaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxBdXRvcml0ZS5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZS5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1UcmlidW5hbFNlcnZpY2UoKXtcbiAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTZXJ2aWNlVHJpYnVuYWwnKTtcbiAgICBcbiAgICBpZihzZXJ2aWNlICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVRyaWJ1bmFsXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MiAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDIgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfc2VydmljZVwiXSAjdHJpYnVuYWxfc2VydmljZV9ub20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0cmlidW5hbF9zZXJ2aWNlX25vbVwiLCBzZXJ2aWNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX3NlcnZpY2VfdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vdHJpYnVuYWwvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VUcmlidW5hbFwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC5lcnJvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjInKS5pbm5lckhUTUwgPSBcIkxlIHNlcnZpY2UgZXhpc3RlIGTDqWrDoFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0VHJpYnVuYWxTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWJ1bmFsX3RyaWJ1bmFsX3NlcnZpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbFNlcnZpY2UuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbFNlcnZpY2Uuc2VsZWN0ZWRJbmRleCA9IHNlbGVjdFRyaWJ1bmFsU2VydmljZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlMi5jbGljaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtUHJlZmVjdHVyZVNlcnZpY2UoKXtcbiAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTZXJ2aWNlUHJlZmVjdHVyZScpO1xuICAgIFxuICAgIGlmKHNlcnZpY2UgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VQcmVmZWN0dXJlXCIsIHtjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVwb25zZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MyAubW9kYWwtYm9keScpLmlubmVySFRNTCA9IHJlcG9uc2U7XG4gICAgICAgICAgICAgICAgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDMgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX3NlcnZpY2VcIl0gI3ByZWZlY3R1cmVfc2VydmljZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tXCIsIHNlcnZpY2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9zZXJ2aWNlX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi9wcmVmZWN0dXJlL3NlcnZpY2UvbG9hZEZvcm1TZXJ2aWNlUHJlZmVjdHVyZVwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LmVycm9yICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yNCcpLmlubmVySFRNTCA9IFwiTGUgc2VydmljZSBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcmVmZWN0dXJlU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVmZWN0dXJlX3ByZWZlY3R1cmVTZXJ2aWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlU2VydmljZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTMuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1QcmVmZWN0dXJlQXV0b3JpdGUoKXtcbiAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQXV0b3JpdGVQcmVmZWN0dXJlJyk7XG5cbiAgICBpZihhdXRvcml0ZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDQgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ0IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9ub21cIiwgYXV0b3JpdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LmVycm9yICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yMycpLmlubmVySFRNTCA9IFwiTCdhdXRvcml0w6kgZXhpc3RlIGTDqWrDoFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWZlY3R1cmVfcHJlZmVjdHVyZUF1dG9yaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTQuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uKCl7XG4gICAgbGV0IGZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEZvbmN0aW9uQW5pbWF0ZXVyJyk7XG5cbiAgICBpZihmb25jdGlvbiAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ1IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NSAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcImFuaW1hdGV1cl9mb25jdGlvbl9ub21cIiwgZm9uY3Rpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC5lcnJvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjUnKS5pbm5lckhUTUwgPSBcIkxhIGZvbmN0aW9uIGV4aXN0ZSBkw6lqw6BcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHRhdC52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FuaW1hdGV1cl9hbmltYXRldXJGb25jdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24uc2VsZWN0ZWRJbmRleCA9IHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U1LmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0KCl7XG4gICAgbGV0IHN0YXR1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTdGF0dXRBbmltYXRldXInKTtcblxuICAgIGlmKHN0YXR1dCAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL3N0YXR1dC9sb2FkRm9ybUFuaW1hdGV1clN0YXR1dFwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDYgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ2IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJhbmltYXRldXJfc3RhdHV0X25vbVwiLCBzdGF0dXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX3N0YXR1dF9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9zdGF0dXQvbG9hZEZvcm1BbmltYXRldXJTdGF0dXRcIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC5lcnJvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjYnKS5pbm5lckhUTUwgPSBcIkxlIHN0YXR1dCBleGlzdGUgZMOpasOgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RBbmltYXRldXJTdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW5pbWF0ZXVyX2FuaW1hdGV1clN0YXR1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1clN0YXR1dC5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1clN0YXR1dC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0QW5pbWF0ZXVyU3RhdHV0Lmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U2LmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
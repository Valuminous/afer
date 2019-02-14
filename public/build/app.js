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

var autorite = document.getElementById('autoriteInput');
var button = document.querySelector('.ajouter');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsImF1dG9yaXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZSIsImNsb3NlMiIsImNsb3NlMyIsImNsb3NlNCIsImNsb3NlNSIsImNsb3NlNiIsIm9uY2xpY2tTdGFnZSIsIm9uY2xpY2tUcmlidW5hdXgiLCJvbmNsaWNrQW5pbWF0ZXVyIiwib25jbGlja1ByZWZlY3R1cmUiLCJibHVlQXJyb3ciLCJvcmFuZ2VBcnJvdyIsInB1cnBsZUFycm93IiwicmVkQXJyb3ciLCJteURyb3Bkb3duTWVudTEiLCJteURyb3Bkb3duTWVudTIiLCJteURyb3Bkb3duTWVudTMiLCJteURyb3Bkb3duTWVudTQiLCJhY3RpdmVTdGFnZUxpc3QiLCJhY3RpdmVMaWV1U3RhZ2UiLCJhY3RpdmVUcmlidW5hbExpc3QiLCJhY3RpdmVUcmlidW5hbEF1dG9yaXRlIiwiYWN0aXZlVHJpYnVuYWxTZXJ2aWNlIiwiYWN0aXZlQW5pbWF0ZXVyTGlzdCIsImFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uIiwiYWN0aXZlQW5pbWF0ZXVyU3RhdHV0IiwiYWN0aXZlUHJlZmVjdHVyZUxpc3QiLCJhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUiLCJhY3RpdmVQcmVmZWN0dXJlU2VydmljZSIsImJsdWVBcnJvd1ZhbHVlIiwib3JhbmdlQXJyb3dWYWx1ZSIsInB1cnBsZUFycm93VmFsdWUiLCJyZWRBcnJvd1ZhbHVlIiwidXJsIiwiVVJMIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjaGFuZ2VBY3RpdmVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5Iiwib3BhY2l0eSIsImNvbG9yIiwiZm9udFdlaWdodCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImxvYWRGb3JtQXV0b3JpdGVUcmlidW5hbCIsImxvYWRGb3JtVHJpYnVuYWxTZXJ2aWNlIiwibG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSIsImxvYWRGb3JtUHJlZmVjdHVyZUF1dG9yaXRlIiwibG9hZEZvcm1BbmltYXRldXJGb25jdGlvbiIsImxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0IiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXBvbnNlIiwidGV4dCIsImxlbmd0aCIsImlubmVySFRNTCIsImJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidG9rZW4iLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJib2R5IiwicmVzdWx0YXQiLCJqc29uIiwic2VsZWN0VHJpYnVuYWxBdXRvcml0ZSIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImFkZCIsInNlbGVjdGVkSW5kZXgiLCJjbGljayIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0Iiwic2VydmljZSIsInNlbGVjdFRyaWJ1bmFsU2VydmljZSIsInNlbGVjdFByZWZlY3R1cmVTZXJ2aWNlIiwic2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlIiwiZm9uY3Rpb24iLCJzZWxlY3RBbmltYXRldXJGb25jdGlvbiIsInN0YXR1dCIsInNlbGVjdEFuaW1hdGV1clN0YXR1dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3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QUNDLElBQVQsRUFBUDtBQUNILGVBSEQsRUFJQ2hCLElBSkQsQ0FJTSxVQUFDZSxRQUFELEVBQWM7QUFFaEIsb0JBQUdBLFFBQVEsQ0FBQ1AsS0FBVCxJQUFrQixJQUFyQixFQUEwQjtBQUN0QixzQkFBTTZCLHFCQUFxQixHQUFHaEcsUUFBUSxDQUFDRyxhQUFULENBQXVCLDRCQUF2QixDQUE5QjtBQUNBLHNCQUFNMEUsTUFBTSxHQUFHN0UsUUFBUSxDQUFDOEUsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FELHdCQUFNLENBQUNFLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkJMLFFBQVEsQ0FBQ00sRUFBdEM7QUFDQUgsd0JBQU0sQ0FBQ2hCLElBQVAsR0FBY2EsUUFBUSxDQUFDUCxLQUF2QjtBQUNBNkIsdUNBQXFCLENBQUNmLEdBQXRCLENBQTBCSixNQUExQjtBQUNBbUIsdUNBQXFCLENBQUNkLGFBQXRCLEdBQXNDYyxxQkFBcUIsQ0FBQ2xDLE1BQXRCLEdBQStCLENBQXJFO0FBQ0FyRCx3QkFBTSxDQUFDMEUsS0FBUDtBQUNIO0FBQ0osZUFmRCxFQWVHQyxLQWZILENBZVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxlQWpCRDtBQWtCSCxhQTNCRCxNQTJCSztBQUNEckYsc0JBQVEsQ0FBQ0csYUFBVCxDQUF1QixxREFBdkIsRUFBOEVxRixTQUE5RSxDQUF3RlAsR0FBeEYsQ0FBNEYsT0FBNUY7QUFDSDtBQUNKLFdBakNEO0FBa0NIO0FBQ0o7QUFDSixLQTlDRCxFQThDR0csS0E5Q0gsQ0E4Q1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEtBaEREO0FBaURIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUM3a0JELHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9hcHAuanNcIik7XG4iLCJyZXF1aXJlKCcuLi9zY3NzL21haW4uc2NzcycpO1xuXG5jb25zdCBhdXRvcml0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvcml0ZUlucHV0Jyk7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ham91dGVyJyk7XG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuY29uc3QgY2xvc2UyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlMicpO1xuY29uc3QgY2xvc2UzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlMycpO1xuY29uc3QgY2xvc2U0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlNCcpO1xuY29uc3QgY2xvc2U1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlNScpO1xuY29uc3QgY2xvc2U2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlNicpO1xuXG5cbmNvbnN0IG9uY2xpY2tTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3N0YWdlJyk7XG5jb25zdCBvbmNsaWNrVHJpYnVuYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfdHJpYnVuYXV4Jyk7XG5jb25zdCBvbmNsaWNrQW5pbWF0ZXVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uY2xpY2tfYW5pbWF0ZXVyJyk7XG5jb25zdCBvbmNsaWNrUHJlZmVjdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmNsaWNrX3ByZWZlY3R1cmUnKTtcblxuY29uc3QgYmx1ZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX2JsdWUnKTtcbmNvbnN0IG9yYW5nZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuZ2xlX29yYW5nZScpO1xuY29uc3QgcHVycGxlQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5nbGVfcHVycGxlJyk7XG5jb25zdCByZWRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmdsZV9yZWQnKTtcblxuY29uc3QgbXlEcm9wZG93bk1lbnUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3Rfc3RhZ2VzJyk7XG5jb25zdCBteURyb3Bkb3duTWVudTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdF90cmlidW5hdXgnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X2FuaW1hdGV1cnMnKTtcbmNvbnN0IG15RHJvcGRvd25NZW51NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0X3ByZWZlY3R1cmVzJyk7XG5cbmNvbnN0IGFjdGl2ZVN0YWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfc3RhZ2VfbGlzdGUnKTtcbmNvbnN0IGFjdGl2ZUxpZXVTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfbGlldV9zdGFnZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV90cmlidW5hbF9saXN0ZScpO1xuY29uc3QgYWN0aXZlVHJpYnVuYWxBdXRvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVRyaWJ1bmFsU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfdHJpYnVuYWxfc2VydmljZScpO1xuY29uc3QgYWN0aXZlQW5pbWF0ZXVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJGb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVfYW5pbWF0ZXVyX2ZvbmN0aW9uJyk7XG5jb25zdCBhY3RpdmVBbmltYXRldXJTdGF0dXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX2FuaW1hdGV1cl9zdGF0dXQnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX2xpc3RlJyk7XG5jb25zdCBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlX3ByZWZlY3R1cmVfYXV0b3JpdGUnKTtcbmNvbnN0IGFjdGl2ZVByZWZlY3R1cmVTZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9wcmVmZWN0dXJlX3NlcnZpY2UnKTtcblxubGV0IGJsdWVBcnJvd1ZhbHVlID0gMDtcbmxldCBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbmxldCBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbmxldCByZWRBcnJvd1ZhbHVlID0gMDtcblxubGV0IHVybCA9IGRvY3VtZW50LlVSTDtcbmxldCBwYXRobmFtZSA9IG5ldyBVUkwodXJsKS5wYXRobmFtZTtcblxud2luZG93Lm9ubG9hZCA9IGNoYW5nZUFjdGl2ZUJ1dHRvbigpO1xuXG5vbmNsaWNrU3RhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmKHJlZEFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDA7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmVkQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxufSlcblxub25jbGlja1RyaWJ1bmF1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgaWYoYmx1ZUFycm93VmFsdWUgPT0gMCl7XG4gICAgICAgIGJsdWVBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAwO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBwdXJwbGVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMDtcbiAgICB9XG59KVxuXG5vbmNsaWNrQW5pbWF0ZXVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihvcmFuZ2VBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG9yYW5nZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbm9uY2xpY2tQcmVmZWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBpZihwdXJwbGVBcnJvd1ZhbHVlID09IDApe1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgIHJlZEFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAwO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMDtcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAwO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ1dHRvbigpe1xuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlJykge1xuICAgICAgICByZWRBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUxLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZVN0YWdlTGlzdC5zdHlsZS5jb2xvciA9ICcjZmY1NzQ0JztcbiAgICAgICAgYWN0aXZlU3RhZ2VMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHJlZEFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3N0YWdlL2xpZXVTdGFnZScpIHtcbiAgICAgICAgcmVkQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51MS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVMaWV1U3RhZ2Uuc3R5bGUuY29sb3IgPSAnI2ZmNTc0NCc7XG4gICAgICAgIGFjdGl2ZUxpZXVTdGFnZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICByZWRBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbCcpIHtcbiAgICAgICAgYmx1ZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlVHJpYnVuYWxMaXN0LnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbExpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgYmx1ZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3RyaWJ1bmFsL2F1dG9yaXRlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM0MDk4ZjMnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbEF1dG9yaXRlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIGJsdWVBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi90cmlidW5hbC9zZXJ2aWNlJykge1xuICAgICAgICBibHVlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBteURyb3Bkb3duTWVudTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG15RHJvcGRvd25NZW51Mi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBhY3RpdmVUcmlidW5hbFNlcnZpY2Uuc3R5bGUuY29sb3IgPSAnIzQwOThmMyc7XG4gICAgICAgIGFjdGl2ZVRyaWJ1bmFsU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBibHVlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuY29sb3IgPSAnI2ZmOTczOCc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckxpc3Quc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgb3JhbmdlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09ICcvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uJykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1ckZvbmN0aW9uLnN0eWxlLmNvbG9yID0gJyNmZjk3MzgnO1xuICAgICAgICBhY3RpdmVBbmltYXRldXJGb25jdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICBvcmFuZ2VBcnJvd1ZhbHVlID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9hbmltYXRldXIvc3RhdHV0Jykge1xuICAgICAgICBvcmFuZ2VBcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIG15RHJvcGRvd25NZW51My5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnUzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGFjdGl2ZUFuaW1hdGV1clN0YXR1dC5zdHlsZS5jb2xvciA9ICcjZmY5NzM4JztcbiAgICAgICAgYWN0aXZlQW5pbWF0ZXVyU3RhdHV0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIG9yYW5nZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUxpc3Quc3R5bGUuY29sb3IgPSAnIzljMmRiMyc7XG4gICAgICAgIGFjdGl2ZVByZWZlY3R1cmVMaXN0LnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PSAnL2FkbWluL3ByZWZlY3R1cmUvYXV0b3JpdGUnKSB7XG4gICAgICAgIHB1cnBsZUFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgbXlEcm9wZG93bk1lbnU0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgYWN0aXZlUHJlZmVjdHVyZUF1dG9yaXRlLnN0eWxlLmNvbG9yID0gJyM5YzJkYjMnO1xuICAgICAgICBhY3RpdmVQcmVmZWN0dXJlQXV0b3JpdGUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcbiAgICAgICAgcHVycGxlQXJyb3dWYWx1ZSA9IDE7XG4gICAgfVxufVxuXG5pZiAocGF0aG5hbWUgPT0gJy9hZG1pbi9wcmVmZWN0dXJlL3NlcnZpY2UnKSB7XG4gICAgcHVycGxlQXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgIG15RHJvcGRvd25NZW51NC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBteURyb3Bkb3duTWVudTQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5jb2xvciA9ICcjOWMyZGIzJztcbiAgICBhY3RpdmVQcmVmZWN0dXJlU2VydmljZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgIHB1cnBsZUFycm93VmFsdWUgPSAxO1xufVxuXG4vLyBwb3AtdXAgYWpvdXQgc2VydmljZS9hdXRvcml0w6kvc3RhdHV0L2ZvbmN0aW9uIGRhbnMgZW50aXTDqSB0cmlidW5hbC9wcsOpZsOpY3R1cmUvYW5pbWF0ZXVyXG5kb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsKCk7XG4gICAgbG9hZEZvcm1UcmlidW5hbFNlcnZpY2UoKTtcbiAgICBsb2FkRm9ybVByZWZlY3R1cmVTZXJ2aWNlKCk7XG4gICAgbG9hZEZvcm1QcmVmZWN0dXJlQXV0b3JpdGUoKTtcbiAgICBsb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uKCk7XG4gICAgbG9hZEZvcm1BbmltYXRldXJTdGF0dXQoKTtcbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1BdXRvcml0ZVRyaWJ1bmFsKCl7XG4gICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEF1dG9yaXRlVHJpYnVuYWwnKTtcblxuICAgIGlmKGF1dG9yaXRlICE9IG51bGwpe1xuICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWxcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQgLm1vZGFsLWJvZHkgYnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICBpZihidG4gIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9hdXRvcml0ZVwiXSAjdHJpYnVuYWxfYXV0b3JpdGVfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwidHJpYnVuYWxfYXV0b3JpdGVcIl0gI3RyaWJ1bmFsX2F1dG9yaXRlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfYXV0b3JpdGVfbm9tXCIsIGF1dG9yaXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX2F1dG9yaXRlX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlVHJpYnVuYWxcIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4geyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdFRyaWJ1bmFsQXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpYnVuYWxfdHJpYnVuYWxfYXV0b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHJlc3VsdGF0LmlkIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcmVzdWx0YXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmlidW5hbEF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJpYnVuYWxBdXRvcml0ZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0VHJpYnVuYWxBdXRvcml0ZS5sZW5ndGggLSAxIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlLmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX2F1dG9yaXRlXCJdICN0cmlidW5hbF9hdXRvcml0ZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybVRyaWJ1bmFsU2VydmljZSgpe1xuICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFNlcnZpY2VUcmlidW5hbCcpO1xuICAgIFxuICAgIGlmKHNlcnZpY2UgIT0gbnVsbCl7XG4gICAgICAgIGZldGNoKFwiL2FkbWluL3RyaWJ1bmFsL3NlcnZpY2UvbG9hZEZvcm1TZXJ2aWNlVHJpYnVuYWxcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQyIC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MiAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX3NlcnZpY2VcIl0gI3RyaWJ1bmFsX3NlcnZpY2Vfbm9tJykudmFsdWUubGVuZ3RoICE9IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJ0cmlidW5hbF9zZXJ2aWNlXCJdICN0cmlidW5hbF9zZXJ2aWNlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX3NlcnZpY2VcIl0gI3RyaWJ1bmFsX3NlcnZpY2VfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInRyaWJ1bmFsX3NlcnZpY2Vfbm9tXCIsIHNlcnZpY2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwidHJpYnVuYWxfc2VydmljZV90b2tlblwiLCB0b2tlbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcIi9hZG1pbi90cmlidW5hbC9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVRyaWJ1bmFsXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RUcmlidW5hbFNlcnZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpYnVuYWxfdHJpYnVuYWxfc2VydmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsU2VydmljZS5hZGQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaWJ1bmFsU2VydmljZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0VHJpYnVuYWxTZXJ2aWNlLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2UyLmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInRyaWJ1bmFsX3NlcnZpY2VcIl0gI3RyaWJ1bmFsX3NlcnZpY2Vfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1QcmVmZWN0dXJlU2VydmljZSgpe1xuICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFNlcnZpY2VQcmVmZWN0dXJlJyk7XG4gICAgXG4gICAgaWYoc2VydmljZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9zZXJ2aWNlL2xvYWRGb3JtU2VydmljZVByZWZlY3R1cmVcIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQzIC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0MyAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfc2VydmljZVwiXSAjcHJlZmVjdHVyZV9zZXJ2aWNlX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2VfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcInByZWZlY3R1cmVfc2VydmljZV9ub21cIiwgc2VydmljZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwcmVmZWN0dXJlX3NlcnZpY2VfX3Rva2VuXCIsIHRva2VuLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL3ByZWZlY3R1cmUvc2VydmljZS9sb2FkRm9ybVNlcnZpY2VQcmVmZWN0dXJlXCIsIHttZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhLCBjcmVkZW50aWFsczonaW5jbHVkZSd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0YXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0YXQudmFsdWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcmVmZWN0dXJlU2VydmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVmZWN0dXJlX3ByZWZlY3R1cmVTZXJ2aWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UuYWRkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RQcmVmZWN0dXJlU2VydmljZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0UHJlZmVjdHVyZVNlcnZpY2UubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTMuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9zZXJ2aWNlXCJdICNwcmVmZWN0dXJlX3NlcnZpY2Vfbm9tJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEZvcm1QcmVmZWN0dXJlQXV0b3JpdGUoKXtcbiAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQXV0b3JpdGVQcmVmZWN0dXJlJyk7XG5cbiAgICBpZihhdXRvcml0ZSAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDQgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ0IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXV0b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJwcmVmZWN0dXJlX2F1dG9yaXRlXCJdICNwcmVmZWN0dXJlX2F1dG9yaXRlX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cInByZWZlY3R1cmVfYXV0b3JpdGVcIl0gI3ByZWZlY3R1cmVfYXV0b3JpdGVfX3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9ub21cIiwgYXV0b3JpdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicHJlZmVjdHVyZV9hdXRvcml0ZV9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vcHJlZmVjdHVyZS9hdXRvcml0ZS9sb2FkRm9ybUF1dG9yaXRlUHJlZmVjdHVyZVwiLCB7bWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgY3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGF0Lmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRhdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdGF0LnZhbHVlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWZlY3R1cmVfcHJlZmVjdHVyZUF1dG9yaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJlZmVjdHVyZUF1dG9yaXRlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RQcmVmZWN0dXJlQXV0b3JpdGUubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTQuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwicHJlZmVjdHVyZV9hdXRvcml0ZVwiXSAjcHJlZmVjdHVyZV9hdXRvcml0ZV9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkRm9ybUFuaW1hdGV1ckZvbmN0aW9uKCl7XG4gICAgbGV0IGZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEZvbmN0aW9uQW5pbWF0ZXVyJyk7XG5cbiAgICBpZihmb25jdGlvbiAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge2NyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb25zZS50ZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXBvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXBvbnNlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ1IC5tb2RhbC1ib2R5JykuaW5uZXJIVE1MID0gcmVwb25zZTtcbiAgICAgICAgICAgICAgICBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDYXJ0NSAubW9kYWwtYm9keSBidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIGlmKGJ0biAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpLnZhbHVlLmxlbmd0aCAhPSAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb25jdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChcImFuaW1hdGV1cl9mb25jdGlvbl9ub21cIiwgZm9uY3Rpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX2ZvbmN0aW9uX190b2tlblwiLCB0b2tlbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL2ZvbmN0aW9uL2xvYWRGb3JtQW5pbWF0ZXVyRm9uY3Rpb25cIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FuaW1hdGV1cl9hbmltYXRldXJGb25jdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcmVzdWx0YXQuaWQgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSByZXN1bHRhdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyRm9uY3Rpb24uc2VsZWN0ZWRJbmRleCA9IHNlbGVjdEFuaW1hdGV1ckZvbmN0aW9uLmxlbmd0aCAtIDEgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U1LmNsaWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9mb25jdGlvblwiXSAjYW5pbWF0ZXVyX2ZvbmN0aW9uX25vbScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRGb3JtQW5pbWF0ZXVyU3RhdHV0KCl7XG4gICAgbGV0IHN0YXR1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTdGF0dXRBbmltYXRldXInKTtcblxuICAgIGlmKHN0YXR1dCAhPSBudWxsKXtcbiAgICAgICAgZmV0Y2goXCIvYWRtaW4vYW5pbWF0ZXVyL3N0YXR1dC9sb2FkRm9ybUFuaW1hdGV1clN0YXR1dFwiLCB7Y3JlZGVudGlhbHM6J2luY2x1ZGUnfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXBvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmKHJlcG9uc2UubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsQ2FydDYgLm1vZGFsLWJvZHknKS5pbm5lckhUTUwgPSByZXBvbnNlO1xuICAgICAgICAgICAgICAgIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbENhcnQ2IC5tb2RhbC1ib2R5IGJ1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnRuICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9ub20nKS52YWx1ZS5sZW5ndGggIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImFuaW1hdGV1cl9zdGF0dXRcIl0gI2FuaW1hdGV1cl9zdGF0dXRfbm9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9fdG9rZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJhbmltYXRldXJfc3RhdHV0X25vbVwiLCBzdGF0dXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiYW5pbWF0ZXVyX3N0YXR1dF9fdG9rZW5cIiwgdG9rZW4udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiL2FkbWluL2FuaW1hdGV1ci9zdGF0dXQvbG9hZEZvcm1BbmltYXRldXJTdGF0dXRcIiwge21ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGNyZWRlbnRpYWxzOidpbmNsdWRlJ30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdGF0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRhdC5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0YXQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRhdC52YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEFuaW1hdGV1clN0YXR1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbmltYXRldXJfYW5pbWF0ZXVyU3RhdHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCByZXN1bHRhdC5pZCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHJlc3VsdGF0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyU3RhdHV0LmFkZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0QW5pbWF0ZXVyU3RhdHV0LnNlbGVjdGVkSW5kZXggPSBzZWxlY3RBbmltYXRldXJTdGF0dXQubGVuZ3RoIC0gMSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTYuY2xpY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiYW5pbWF0ZXVyX3N0YXR1dFwiXSAjYW5pbWF0ZXVyX3N0YXR1dF9ub20nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
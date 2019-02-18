//require jQuery normally
const $ = require('jquery');
global.$ = global.jQuery = $;
require('../scss/main.scss');
require('../js/popUp.js');
require('../../vendor/eternicode/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js');
require('../../vendor/eternicode/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js');

const onclickStage = document.querySelector('.onclick_stage');
const onclickTribunaux = document.querySelector('.onclick_tribunaux');
const onclickAnimateur = document.querySelector('.onclick_animateur');
const onclickPrefecture = document.querySelector('.onclick_prefecture');

const blueArrow = document.querySelector('.angle_blue');
const orangeArrow = document.querySelector('.angle_orange');
const purpleArrow = document.querySelector('.angle_purple');
const redArrow = document.querySelector('.angle_red');

const myDropdownMenu1 = document.querySelector('.list_stages');
const myDropdownMenu2 = document.querySelector('.list_tribunaux');
const myDropdownMenu3 = document.querySelector('.list_animateurs');
const myDropdownMenu4 = document.querySelector('.list_prefectures');

const activeStageList = document.querySelector('.active_stage_liste');
const activeLieuStage = document.querySelector('.active_lieu_stage');
const activeTribunalList = document.querySelector('.active_tribunal_liste');
const activeTribunalAutorite = document.querySelector('.active_tribunal_autorite');
const activeTribunalService = document.querySelector('.active_tribunal_service');
const activeAnimateurList = document.querySelector('.active_animateur_liste');
const activeAnimateurFonction = document.querySelector('.active_animateur_fonction');
const activeAnimateurStatut = document.querySelector('.active_animateur_statut');
const activePrefectureList = document.querySelector('.active_prefecture_liste');
const activePrefectureAutorite = document.querySelector('.active_prefecture_autorite');
const activePrefectureService = document.querySelector('.active_prefecture_service');

let blueArrowValue = 0;
let orangeArrowValue = 0;
let purpleArrowValue = 0;
let redArrowValue = 0;

let url = document.URL;
let pathname = new URL(url).pathname;

window.onload = changeActiveButton();

onclickStage.addEventListener('click', function(){
    if(redArrowValue == 0){
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
    }
    else{
        redArrow.style.transform = 'rotate(0deg)';
        myDropdownMenu1.style.display = 'none';
        myDropdownMenu1.style.opacity = '0';
        redArrowValue = 0;
    }
})

onclickTribunaux.addEventListener('click', function(){
    if(blueArrowValue == 0){
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
    }
    else{
        blueArrow.style.transform = 'rotate(0deg)';
        myDropdownMenu2.style.display = 'none';
        myDropdownMenu2.style.opacity = '0';
        blueArrowValue = 0;
    }
})

onclickAnimateur.addEventListener('click', function(){
    if(orangeArrowValue == 0){
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
    }
    else{
        orangeArrow.style.transform = 'rotate(0deg)';
        myDropdownMenu3.style.display = 'none';
        myDropdownMenu3.style.opacity = '0';
        orangeArrowValue = 0;
    }
})

onclickPrefecture.addEventListener('click', function(){
    if(purpleArrowValue == 0){
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
    }
    else{
        purpleArrow.style.transform = 'rotate(0deg)';
        myDropdownMenu4.style.display = 'none';
        myDropdownMenu4.style.opacity = '0';
        purpleArrowValue = 0;
    }
})

function changeActiveButton(){
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
require('../scss/main.scss');

const blueArrow = document.querySelector('.angle_blue');
const orangeArrow = document.querySelector('.angle_orange');
const purpleArrow = document.querySelector('.angle_purple');
const redArrow = document.querySelector('.angle_red');

const myDropdownMenu1 = document.querySelector('.list_stages');
const myDropdownMenu2 = document.querySelector('.list_tribunaux');
const myDropdownMenu3 = document.querySelector('.list_animateurs');
const myDropdownMenu4 = document.querySelector('.list_prefectures');

let blueArrowValue = 0;
let orangeArrowValue = 0;
let purpleArrowValue = 0;
let redArrowValue = 0;

blueArrow.addEventListener('click', function(){
    if(blueArrowValue == 0){
        blueArrow.style.transform = 'rotate(90deg)';
        myDropdownMenu2.style.display = 'block';
        myDropdownMenu2.style.opacity = '1';
        blueArrowValue = 1;
    }
    else{
        blueArrow.style.transform = 'rotate(0deg)';
        myDropdownMenu2.style.display = 'none';
        myDropdownMenu2.style.opacity = '0';
        blueArrowValue = 0;
    }
})

orangeArrow.addEventListener('click', function(){
    if(orangeArrowValue == 0){
        orangeArrow.style.transform = 'rotate(90deg)';
        myDropdownMenu3.style.display = 'block';
        myDropdownMenu3.style.opacity = '1';
        orangeArrowValue = 1;
    }
    else{
        orangeArrow.style.transform = 'rotate(0deg)';
        myDropdownMenu3.style.display = 'none';
        myDropdownMenu3.style.opacity = '0';
        orangeArrowValue = 0;
    }
})

purpleArrow.addEventListener('click', function(){
    if(purpleArrowValue == 0){
        purpleArrow.style.transform = 'rotate(90deg)';
        myDropdownMenu4.style.display = 'block';
        myDropdownMenu4.style.opacity = '1';
        purpleArrowValue = 1;
    }
    else{
        purpleArrow.style.transform = 'rotate(0deg)';
        myDropdownMenu4.style.display = 'none';
        myDropdownMenu4.style.opacity = '0';
        purpleArrowValue = 0;
    }
})

redArrow.addEventListener('click', function(){
    if(redArrowValue == 0){
        redArrow.style.transform = 'rotate(90deg)';
        myDropdownMenu1.style.display = 'block';
        myDropdownMenu1.style.opacity = '1';
        redArrowValue = 1;
    }
    else{
        redArrow.style.transform = 'rotate(0deg)';
        myDropdownMenu1.style.display = 'none';
        myDropdownMenu1.style.opacity = '0';
        redArrowValue = 0;
    }
})
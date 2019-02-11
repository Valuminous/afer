require('../scss/main.scss');

const blueArrow = document.querySelector('.angle_blue');
const orangeArrow = document.querySelector('.angle_orange');
const purpleArrow = document.querySelector('.angle_purple');

let blueArrowValue = 0;
let orangeArrowValue = 0;
let purpleArrowValue = 0;

blueArrow.addEventListener('click', function(){
    if(blueArrowValue == 0){
        blueArrow.style.transform = 'rotate(90deg)';
        blueArrowValue = 1;
    }
    else{
        blueArrow.style.transform = 'rotate(0deg)';
        blueArrowValue = 0;
    }
})

orangeArrow.addEventListener('click', function(){
    if(orangeArrowValue == 0){
        orangeArrow.style.transform = 'rotate(90deg)';
        orangeArrowValue = 1;
    }
    else{
        orangeArrow.style.transform = 'rotate(0deg)';
        orangeArrowValue = 0;
    }
})

purpleArrow.addEventListener('click', function(){
    if(purpleArrowValue == 0){
        purpleArrow.style.transform = 'rotate(90deg)';
        purpleArrowValue = 1;
    }
    else{
        purpleArrow.style.transform = 'rotate(0deg)';
        purpleArrowValue = 0;
    }
})
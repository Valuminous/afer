require('../scss/main.scss');

const autorite = document.getElementById('autoriteInput');

const button = document.querySelector('.ajouter');
const close = document.querySelector('.close');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');

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


document.onreadystatechange = function () {
    loadFormAutoriteTribunal();
    loadFormTribunalService();
    loadFormPrefectureService();
    loadFormPrefectureAutorite();
}

function loadFormAutoriteTribunal(){
    let autorite = document.querySelector('#addAutoriteTribunal');

    if(autorite != null){
        fetch("/admin/tribunal/autorite/loadFormAutoriteTribunal", {credentials:'include'})
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if(reponse.length > 0){
                document.querySelector('#modalCart .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCart .modal-body button');

                if(btn != null){
                    btn.addEventListener('click', function(e){
                        e.preventDefault();

                        if(document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom').value.length != 0){

                            console.log('coucou');

                            let autorite = document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom');
                            let token = document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite__token');
                            let data = new FormData();
                            data.append("tribunal_autorite_nom", autorite.value);
                            data.append("tribunal_autorite__token", token.value);

                            fetch("/admin/tribunal/autorite/loadFormAutoriteTribunal", {method: "POST", body: data, credentials:'include'})

                            .then((resultat) => {
                                return resultat.text();
                            })
                            .then((resultat) => {

                                let resultatJson = JSON.parse(resultat);

                                if(resultatJson.value != null){
                                    const selectTribunalAutorite = document.querySelector('#tribunal_tribunal_autorite');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultatJson.id )
                                    option.text = resultatJson.value;
                                    selectTribunalAutorite.add(option);
                                    selectTribunalAutorite.selectedIndex = selectTribunalAutorite.length - 1 ;
                                    close.click(); 
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                        }else{
                            document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom').classList.add('error')
                        }
                    })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}

function loadFormTribunalService(){
    let service = document.querySelector('#addServiceTribunal');
    
    if(service != null){
        fetch("/admin/tribunal/service/loadFormServiceTribunal", {credentials:'include'})
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if(reponse.length > 0){
                document.querySelector('#modalCart2 .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCart2 .modal-body button');

                if(btn != null){
                    btn.addEventListener('click', function(e){
                        e.preventDefault();

                        if(document.querySelector('form[name="tribunal_service"] #tribunal_service_nom').value.length != 0){

                            let service = document.querySelector('form[name="tribunal_service"] #tribunal_service_nom');
                            let token = document.querySelector('form[name="tribunal_service"] #tribunal_service__token');
                            let data = new FormData();
                            data.append("tribunal_service_nom", service.value);
                            data.append("tribunal_service_token", token.value);

                            fetch("/admin/tribunal/service/loadFormServiceTribunal", {method: "POST", body: data, credentials:'include'})

                            .then((resultat) => {
                                return resultat.text();
                            })
                            .then((resultat) => {

                                let resultatJson = JSON.parse(resultat);

                                if(resultatJson.value != null){
                                    const selectTribunalService = document.querySelector('#tribunal_tribunal_service');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultatJson.id )
                                    option.text = resultatJson.value;
                                    selectTribunalService.add(option);
                                    selectTribunalService.selectedIndex = selectTribunalService.length - 1 ;
                                    close2.click(); 
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                        }else{
                            document.querySelector('form[name="tribunal_service"] #tribunal_service_nom').classList.add('error')
                        }
                    })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}

function loadFormPrefectureService(){
    let service = document.querySelector('#addServicePrefecture');
    
    if(service != null){
        fetch("/admin/prefecture/service/loadFormServicePrefecture", {credentials:'include'})
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if(reponse.length > 0){
                document.querySelector('#modalCart3 .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCart3 .modal-body button');

                if(btn != null){
                    btn.addEventListener('click', function(e){
                        e.preventDefault();

                        if(document.querySelector('form[name="prefecture_service"] #prefecture_service_nom').value.length != 0){

                            let service = document.querySelector('form[name="prefecture_service"] #prefecture_service_nom');
                            let token = document.querySelector('form[name="prefecture_service"] #prefecture_service__token');
                            let data = new FormData();
                            data.append("prefecture_service_nom", service.value);
                            data.append("prefecture_service__token", token.value);

                            fetch("/admin/prefecture/service/loadFormServicePrefecture", {method: "POST", body: data, credentials:'include'})

                            .then((resultat) => {
                                return resultat.text();
                            })
                            .then((resultat) => {
                                let resultatJson = JSON.parse(resultat);

                                if(resultatJson.value != null){
                                    const selectPrefectureService = document.querySelector('#prefecture_prefectureService');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultatJson.id )
                                    option.text = resultatJson.value;
                                    selectPrefectureService.add(option);
                                    selectPrefectureService.selectedIndex = selectPrefectureService.length - 1 ;
                                    close3.click(); 
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                        }else{
                            document.querySelector('form[name="prefecture_service"] #prefecture_service_nom').classList.add('error')
                        }
                    })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}

function loadFormPrefectureAutorite(){
    let autorite = document.querySelector('#addAutoritePrefecture');

    if(autorite != null){
        fetch("/admin/prefecture/autorite/loadFormAutoritePrefecture", {credentials:'include'})
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if(reponse.length > 0){
                document.querySelector('#modalCart4 .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCart4 .modal-body button');

                if(btn != null){
                    btn.addEventListener('click', function(e){
                        e.preventDefault();

                        if(document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite_nom').value.length != 0){

                            let autorite = document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite_nom');
                            let token = document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite__token');
                            let data = new FormData();

                            data.append("prefecture_autorite_nom", autorite.value);
                            data.append("prefecture_autorite__token", token.value);

                            fetch("/admin/prefecture/autorite/loadFormAutoritePrefecture", {method: "POST", body: data, credentials:'include'})

                            .then((resultat) => {
                                return resultat.text();
                            })
                            .then((resultat) => {

                                let resultatJson = JSON.parse(resultat);

                                if(resultatJson.value != null){
                                    const selectPrefectureAutorite = document.querySelector('#prefecture_prefectureAutorite');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultatJson.id )
                                    option.text = resultatJson.value;
                                    selectPrefectureAutorite.add(option);
                                    selectPrefectureAutorite.selectedIndex = selectPrefectureAutorite.length - 1 ;
                                    close4.click(); 
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                        }else{
                            document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite_nom').classList.add('error')
                        }
                    })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}

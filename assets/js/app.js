require('../scss/main.scss');

const autorite = document.getElementById('autoriteInput');

const button = document.querySelector('.ajouter');
const close = document.querySelector('.close');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');
const close5 = document.querySelector('.close5');
const close6 = document.querySelector('.close6');


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

// pop-up ajout service/autorité/statut/fonction dans entité tribunal/préfécture/animateur
document.onreadystatechange = function () {
    loadFormAutoriteTribunal();
    loadFormTribunalService();
    loadFormPrefectureService();
    loadFormPrefectureAutorite();
    loadFormAnimateurFonction();
    loadFormAnimateurStatut();
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

                            let autorite = document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom');
                            let token = document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite__token');
                            let data = new FormData();
                            data.append("tribunal_autorite_nom", autorite.value);
                            data.append("tribunal_autorite__token", token.value);

                            fetch("/admin/tribunal/autorite/loadFormAutoriteTribunal", {method: "POST", body: data, credentials:'include'})

                            .then((resultat) => {
                                return resultat.json();
                            })
                            .then((resultat) => { 

                                if(resultat.value != null){
                                    const selectTribunalAutorite = document.querySelector('#tribunal_tribunal_autorite');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultat.id )
                                    option.text = resultat.value;
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
                                return resultat.json();
                            })
                            .then((resultat) => {

                                if(resultat.value != null){
                                    const selectTribunalService = document.querySelector('#tribunal_tribunal_service');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultat.id )
                                    option.text = resultat.value;
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
                                return resultat.json();
                            })
                            .then((resultat) => {

                                if(resultat.value != null){
                                    const selectPrefectureService = document.querySelector('#prefecture_prefectureService');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultat.id )
                                    option.text = resultat.value;
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
                                return resultat.json();
                            })
                            .then((resultat) => {

                                if(resultat.value != null){
                                    const selectPrefectureAutorite = document.querySelector('#prefecture_prefectureAutorite');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultat.id )
                                    option.text = resultat.value;
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

function loadFormAnimateurFonction(){
    let fonction = document.querySelector('#addFonctionAnimateur');

    if(fonction != null){
        fetch("/admin/animateur/fonction/loadFormAnimateurFonction", {credentials:'include'})
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if(reponse.length > 0){
                document.querySelector('#modalCart5 .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCart5 .modal-body button');

                if(btn != null){
                    btn.addEventListener('click', function(e){
                        e.preventDefault();

                        if(document.querySelector('form[name="animateur_fonction"] #animateur_fonction_nom').value.length != 0){

                            let fonction = document.querySelector('form[name="animateur_fonction"] #animateur_fonction_nom');
                            let token = document.querySelector('form[name="animateur_fonction"] #animateur_fonction__token');
                            let data = new FormData();

                            data.append("animateur_fonction_nom", fonction.value);
                            data.append("animateur_fonction__token", token.value);
                            
                            fetch("/admin/animateur/fonction/loadFormAnimateurFonction", {method: "POST", body: data, credentials:'include'})
                            .then((resultat) => {
                                return resultat.json();
                            })
                            .then((resultat) => {

                                if(resultat.value != null){
                                    const selectAnimateurFonction = document.querySelector('#animateur_animateurFonction');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultat.id )
                                    option.text = resultat.value;
                                    selectAnimateurFonction.add(option);
                                    selectAnimateurFonction.selectedIndex = selectAnimateurFonction.length - 1 ;
                                    close5.click(); 
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                        }else{
                            document.querySelector('form[name="animateur_fonction"] #animateur_fonction_nom').classList.add('error')
                        }
                    })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}

function loadFormAnimateurStatut(){
    let statut = document.querySelector('#addStatutAnimateur');

    if(statut != null){
        fetch("/admin/animateur/statut/loadFormAnimateurStatut", {credentials:'include'})
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if(reponse.length > 0){
                document.querySelector('#modalCart6 .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCart6 .modal-body button');

                if(btn != null){
                    btn.addEventListener('click', function(e){
                        e.preventDefault();

                        if(document.querySelector('form[name="animateur_statut"] #animateur_statut_nom').value.length != 0){
                            
                            let statut = document.querySelector('form[name="animateur_statut"] #animateur_statut_nom');
                            let token = document.querySelector('form[name="animateur_statut"] #animateur_statut__token');
                            let data = new FormData();
                            

                            data.append("animateur_statut_nom", statut.value);
                            data.append("animateur_statut__token", token.value);
                            fetch("/admin/animateur/statut/loadFormAnimateurStatut", {method: "POST", body: data, credentials:'include'})
                            .then((resultat) => {
                                return resultat.json();
                            })
                            .then((resultat) => {

                                if(resultat.value != null){
                                    const selectAnimateurStatut = document.querySelector('#animateur_animateurStatut');
                                    const option = document.createElement("option");
                                    option.setAttribute('value', resultat.id )
                                    option.text = resultat.value;
                                    selectAnimateurStatut.add(option);
                                    selectAnimateurStatut.selectedIndex = selectAnimateurStatut.length - 1 ;
                                    close6.click(); 
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                        }else{
                            document.querySelector('form[name="animateur_statut"] #animateur_statut_nom').classList.add('error')
                        }
                    })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}
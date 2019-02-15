
const close = document.querySelector('.close');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');
const close5 = document.querySelector('.close5');
const close6 = document.querySelector('.close6');

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

                                if(resultat.error != null){
                                document.querySelector('#error').innerHTML = "L'autorité existe déjà";
                                
                                }else if(resultat.value != null){
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
                                if(resultat.error != null){
                                    document.querySelector('#error2').innerHTML = "Le service existe déjà";

                                }else if(resultat.value != null){
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

                                if(resultat.error != null){
                                    document.querySelector('#error4').innerHTML = "Le service existe déjà";

                                }else if(resultat.value != null){
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

                                if(resultat.error != null){
                                    document.querySelector('#error3').innerHTML = "L'autorité existe déjà";

                                }else if(resultat.value != null){
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

                                if(resultat.error != null){
                                    document.querySelector('#error5').innerHTML = "La fonction existe déjà";

                                }else if(resultat.value != null){
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

                                if(resultat.error != null){
                                    document.querySelector('#error6').innerHTML = "Le statut existe déjà";

                                }else if(resultat.value != null){
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
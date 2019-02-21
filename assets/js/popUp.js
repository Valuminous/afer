const close = document.querySelector('.close');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');
const close5 = document.querySelector('.close5');
const close6 = document.querySelector('.close6');
const closeTribunal = document.querySelector('.closeTribunal');
const closePrefecture = document.querySelector('.closePrefecture');
const closeStagiaire = document.querySelector('.closeStagiaire');

// pop-up ajout service/autorité/statut/fonction dans entité tribunal/préfécture/animateur
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
}
function loadFormAutoriteTribunal() {
    let autorite = document.querySelector('#addAutoriteTribunal');

    if (autorite != null) {
        fetch("/admin/tribunal/autorite/loadFormAutoriteTribunal", {
                credentials: 'include'
            })
            .then((reponse) => {
                return reponse.text();
            })
            .then((reponse) => {
                if (reponse.length > 0) {
                    document.querySelector('#modalCart .modal-body').innerHTML = reponse;
                    btn = document.querySelector('#modalCart .modal-body button');

                    if (btn != null) {
                        btn.addEventListener('click', function (e) {
                            e.preventDefault();

                            if (document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom').value.length != 0) {

                                let autorite = document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom');
                                let token = document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite__token');
                                let data = new FormData();
                                data.append("tribunal_autorite_nom", autorite.value);
                                data.append("tribunal_autorite__token", token.value);

                                fetch("/admin/tribunal/autorite/loadFormAutoriteTribunal", {
                                        method: "POST",
                                        body: data,
                                        credentials: 'include'
                                    })

                                    .then((resultat) => {
                                        return resultat.json();
                                    })
                                    .then((resultat) => {

                                        if (resultat.error != null) {
                                            document.querySelector('#error').innerHTML = "L'autorité existe déjà";

                                        } else if (resultat.value != null) {
                                            const selectTribunalAutorite = document.querySelector('#tribunal_tribunal_autorite');
                                            const option = document.createElement("option");
                                            option.setAttribute('value', resultat.id)
                                            option.text = resultat.value;
                                            selectTribunalAutorite.add(option);
                                            selectTribunalAutorite.selectedIndex = selectTribunalAutorite.length - 1;
                                            close.click();
                                        }
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                            } else {
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

function loadFormTribunalService() {
    let service = document.querySelector('#addServiceTribunal');

    if (service != null) {
        fetch("/admin/tribunal/service/loadFormServiceTribunal", {
                credentials: 'include'
            })
            .then((reponse) => {
                return reponse.text();
            })
            .then((reponse) => {
                if (reponse.length > 0) {
                    document.querySelector('#modalCart2 .modal-body').innerHTML = reponse;
                    btn = document.querySelector('#modalCart2 .modal-body button');

                    if (btn != null) {
                        btn.addEventListener('click', function (e) {
                            e.preventDefault();

                            if (document.querySelector('form[name="tribunal_service"] #tribunal_service_nom').value.length != 0) {

                                let service = document.querySelector('form[name="tribunal_service"] #tribunal_service_nom');
                                let token = document.querySelector('form[name="tribunal_service"] #tribunal_service__token');
                                let data = new FormData();
                                data.append("tribunal_service_nom", service.value);
                                data.append("tribunal_service_token", token.value);

                                fetch("/admin/tribunal/service/loadFormServiceTribunal", {
                                        method: "POST",
                                        body: data,
                                        credentials: 'include'
                                    })
                                    .then((resultat) => {
                                        return resultat.json();
                                    })
                                    .then((resultat) => {
                                        if (resultat.error != null) {
                                            document.querySelector('#error2').innerHTML = "Le service existe déjà";

                                        } else if (resultat.value != null) {
                                            const selectTribunalService = document.querySelector('#tribunal_tribunal_service');
                                            const option = document.createElement("option");
                                            option.setAttribute('value', resultat.id)
                                            option.text = resultat.value;
                                            selectTribunalService.add(option);
                                            selectTribunalService.selectedIndex = selectTribunalService.length - 1;
                                            close2.click();
                                        }
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                            } else {
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

function loadFormPrefectureService() {
    let service = document.querySelector('#addServicePrefecture');

    if (service != null) {
        fetch("/admin/prefecture/service/loadFormServicePrefecture", {
                credentials: 'include'
            })
            .then((reponse) => {
                return reponse.text();
            })
            .then((reponse) => {
                if (reponse.length > 0) {
                    document.querySelector('#modalCart3 .modal-body').innerHTML = reponse;
                    btn = document.querySelector('#modalCart3 .modal-body button');

                    if (btn != null) {
                        btn.addEventListener('click', function (e) {
                            e.preventDefault();

                            if (document.querySelector('form[name="prefecture_service"] #prefecture_service_nom').value.length != 0) {

                                let service = document.querySelector('form[name="prefecture_service"] #prefecture_service_nom');
                                let token = document.querySelector('form[name="prefecture_service"] #prefecture_service__token');
                                let data = new FormData();
                                data.append("prefecture_service_nom", service.value);
                                data.append("prefecture_service__token", token.value);

                                fetch("/admin/prefecture/service/loadFormServicePrefecture", {
                                        method: "POST",
                                        body: data,
                                        credentials: 'include'
                                    })
                                    .then((resultat) => {
                                        return resultat.json();
                                    })
                                    .then((resultat) => {

                                        if (resultat.error != null) {
                                            document.querySelector('#error4').innerHTML = "Le service existe déjà";

                                        } else if (resultat.value != null) {
                                            const selectPrefectureService = document.querySelector('#prefecture_prefectureService');
                                            const option = document.createElement("option");
                                            option.setAttribute('value', resultat.id)
                                            option.text = resultat.value;
                                            selectPrefectureService.add(option);
                                            selectPrefectureService.selectedIndex = selectPrefectureService.length - 1;
                                            close3.click();
                                        }
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                            } else {
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

function loadFormPrefectureAutorite() {
    let autorite = document.querySelector('#addAutoritePrefecture');

    if (autorite != null) {
        fetch("/admin/prefecture/autorite/loadFormAutoritePrefecture", {
                credentials: 'include'
            })
            .then((reponse) => {
                return reponse.text();
            })
            .then((reponse) => {
                if (reponse.length > 0) {
                    document.querySelector('#modalCart4 .modal-body').innerHTML = reponse;
                    btn = document.querySelector('#modalCart4 .modal-body button');

                    if (btn != null) {
                        btn.addEventListener('click', function (e) {
                            e.preventDefault();

                            if (document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite_nom').value.length != 0) {

                                let autorite = document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite_nom');
                                let token = document.querySelector('form[name="prefecture_autorite"] #prefecture_autorite__token');
                                let data = new FormData();

                                data.append("prefecture_autorite_nom", autorite.value);
                                data.append("prefecture_autorite__token", token.value);

                                fetch("/admin/prefecture/autorite/loadFormAutoritePrefecture", {
                                        method: "POST",
                                        body: data,
                                        credentials: 'include'
                                    })
                                    .then((resultat) => {
                                        return resultat.json();
                                    })
                                    .then((resultat) => {

                                        if (resultat.error != null) {
                                            document.querySelector('#error3').innerHTML = "L'autorité existe déjà";

                                        } else if (resultat.value != null) {
                                            const selectPrefectureAutorite = document.querySelector('#prefecture_prefectureAutorite');
                                            const option = document.createElement("option");
                                            option.setAttribute('value', resultat.id)
                                            option.text = resultat.value;
                                            selectPrefectureAutorite.add(option);
                                            selectPrefectureAutorite.selectedIndex = selectPrefectureAutorite.length - 1;
                                            close4.click();
                                        }
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                            } else {
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

function loadFormAnimateurFonction() {
    let fonction = document.querySelector('#addFonctionAnimateur');

    if (fonction != null) {
        fetch("/admin/animateur/fonction/loadFormAnimateurFonction", {
                credentials: 'include'
            })
            .then((reponse) => {
                return reponse.text();
            })
            .then((reponse) => {
                if (reponse.length > 0) {
                    document.querySelector('#modalCart5 .modal-body').innerHTML = reponse;
                    btn = document.querySelector('#modalCart5 .modal-body button');

                    if (btn != null) {
                        btn.addEventListener('click', function (e) {
                            e.preventDefault();

                            if (document.querySelector('form[name="animateur_fonction"] #animateur_fonction_nom').value.length != 0) {

                                let fonction = document.querySelector('form[name="animateur_fonction"] #animateur_fonction_nom');
                                let token = document.querySelector('form[name="animateur_fonction"] #animateur_fonction__token');
                                let data = new FormData();

                                data.append("animateur_fonction_nom", fonction.value);
                                data.append("animateur_fonction__token", token.value);

                                fetch("/admin/animateur/fonction/loadFormAnimateurFonction", {
                                        method: "POST",
                                        body: data,
                                        credentials: 'include'
                                    })
                                    .then((resultat) => {
                                        return resultat.json();
                                    })
                                    .then((resultat) => {

                                        if (resultat.error != null) {
                                            document.querySelector('#error5').innerHTML = "La fonction existe déjà";

                                        } else if (resultat.value != null) {
                                            const selectAnimateurFonction = document.querySelector('#animateur_animateurFonction');
                                            const option = document.createElement("option");
                                            option.setAttribute('value', resultat.id)
                                            option.text = resultat.value;
                                            selectAnimateurFonction.add(option);
                                            selectAnimateurFonction.selectedIndex = selectAnimateurFonction.length - 1;
                                            close5.click();
                                        }
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                            } else {
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

function loadFormAnimateurStatut() {

    let statut = document.querySelector('#addStatutAnimateur');

    if (statut != null) {
        fetch("/admin/animateur/statut/loadFormAnimateurStatut", {
                credentials: 'include'
            })
            .then((reponse) => {
                return reponse.text();
            })
            .then((reponse) => {
                if (reponse.length > 0) {
                    document.querySelector('#modalCart6 .modal-body').innerHTML = reponse;
                    btn = document.querySelector('#modalCart6 .modal-body button');


                    if (btn != null) {
                        btn.addEventListener('click', function (e) {
                            e.preventDefault();
                            if (document.querySelector('form[name="animateur_statut"] #animateur_statut_nom').value.length != 0) {

                                let statut = document.querySelector('form[name="animateur_statut"] #animateur_statut_nom');
                                let token = document.querySelector('form[name="animateur_statut"] #animateur_statut__token');
                                let data = new FormData();


                                data.append("animateur_statut_nom", statut.value);
                                data.append("animateur_statut__token", token.value);
                                fetch("/admin/animateur/statut/loadFormAnimateurStatut", {
                                        method: "POST",
                                        body: data,
                                        credentials: 'include'
                                    })
                                    .then((resultat) => {
                                        return resultat.json();
                                    })
                                    .then((resultat) => {

                                        if (resultat.error != null) {
                                            document.querySelector('#error6').innerHTML = "Le statut existe déjà";

                                        } else if (resultat.value != null) {
                                            const selectAnimateurStatut = document.querySelector('#animateur_animateurStatut');
                                            const option = document.createElement("option");
                                            option.setAttribute('value', resultat.id)
                                            option.text = resultat.value;
                                            selectAnimateurStatut.add(option);
                                            selectAnimateurStatut.selectedIndex = selectAnimateurStatut.length - 1;
                                            close6.click();
                                        }
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                            } else {
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


function loadFormTribunal() {
    let tribunal = document.querySelector('#addTribunal');

    if (tribunal != null) {
        fetch("/admin/stage/loadFormTribunal", {
                credentials: 'include'
            })
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if (reponse.length > 0) {
                document.querySelector('#modalCartTribunal .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCartTribunal .modal-body button');
                if (btn != null) {
                    btn.addEventListener('click', function (e) {
                        e.preventDefault();
                        if (document.querySelector('form[name="tribunal"] #tribunal_nom_tribunal').value.length != 0 &&
                            document.querySelector('form[name="tribunal"] #tribunal_adresse_tribunal').value.length != 0 &&
                            document.querySelector('form[name="tribunal"] #tribunal_numero_adresse_tribunal').value.length != 0 &&
                            document.querySelector('form[name="tribunal"] #tribunal_commune_tribunal').value.length != 0 &&
                            document.querySelector('form[name="tribunal"] #tribunal_tribunal_service').value != "" &&
                            document.querySelector('form[name="tribunal"] #tribunal_tribunal_autorite').value != "") {
                            let tribunalNom = document.querySelector('form[name="tribunal"] #tribunal_nom_tribunal');
                            let tribunalAdresse = document.querySelector('form[name="tribunal"] #tribunal_adresse_tribunal');
                            let tribunalNumeroAdresse = document.querySelector('form[name="tribunal"] #tribunal_numero_adresse_tribunal');
                            let tribunalCommune = document.querySelector('form[name="tribunal"] #tribunal_commune_tribunal');
                            let tribunalAutorite = document.querySelector('form[name="tribunal"] #tribunal_tribunal_autorite');
                            let tribunalService = document.querySelector('form[name="tribunal"] #tribunal_tribunal_service');
                            let token = document.querySelector('form[name="tribunal"] #tribunal__token');
                            let data = new FormData();
                            data.append("tribunal_nom_tribunal", tribunalNom.value);
                            data.append("tribunal_adresse_tribunal", tribunalAdresse.value);
                            data.append("tribunal_numero_adresse_tribunal", tribunalNumeroAdresse.value);
                            data.append("tribunal_commune_tribunal", tribunalCommune.value);
                            data.append("tribunal_tribunal_autorite", tribunalAutorite.value);
                            data.append("tribunal_tribunal_service", tribunalService.value);
                            data.append("tribunal__token", token.value);
                            fetch("/admin/stage/loadFormTribunal", { method: "POST",body: data,credentials: 'include'})
                                .then((resultat) => {
                                    return resultat.json();
                                })
                                .then((resultat) => {
                        
                                    if(resultat.error != null){
                                       document.querySelector('#errorTribunal').innerHTML = "Le tribunal existe déjà";
                                    }else if(resultat.value != null){
                                       const selectTribunal = document.querySelector('#stage_tribunal');
                                       const option = document.createElement("option");
                                       option.setAttribute('value', resultat.id )
                                       option.text = resultat.value;
                                       selectTribunal.add(option);
                                       selectTribunal.selectedIndex = selectTribunal.length - 1 ;
                                       closeTribunal.click(); 
                                    }
                                }).catch((error) => {
                                    console.log(error);
                                });
                            }
                    })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}



function loadFormPrefecture() {
    let prefecture = document.querySelector('#addPrefecture');

    if (prefecture != null) {
        fetch("/admin/stage/loadFormPrefecture", {credentials: 'include'})
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if (reponse.length > 0) {
                document.querySelector('#modalCartPrefecture .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCartPrefecture .modal-body button');
                if (btn != null) {
                    btn.addEventListener('click', function (e) {
                        e.preventDefault();
                        if (document.querySelector('form[name="prefecture"] #prefecture_nomPrefecture').value.length != 0 &&
                            document.querySelector('form[name="prefecture"] #prefecture_adressePrefecture').value.length != 0 &&
                            document.querySelector('form[name="prefecture"] #prefecture_numeroAdressePrefecture').value.length != 0 &&
                            document.querySelector('form[name="prefecture"] #prefecture_communePrefecture').value.length != 0 &&
                            document.querySelector('form[name="prefecture"] #prefecture_cpPrefecture').value.length != 0 &&
                            document.querySelector('form[name="prefecture"] #prefecture_prefectureService').value != "" &&
                            document.querySelector('form[name="prefecture"] #prefecture_prefectureAutorite').value != "" ) {

                                let prefectureNom = document.querySelector('form[name="prefecture"] #prefecture_nomPrefecture');
                                let prefectureAdresse = document.querySelector('form[name="prefecture"] #prefecture_adressePrefecture');
                                let prefectureNumeroAdresse = document.querySelector('form[name="prefecture"] #prefecture_numeroAdressePrefecture');
                                let prefectureCommune = document.querySelector('form[name="prefecture"] #prefecture_communePrefecture');
                                let prefectureAutorite = document.querySelector('form[name="prefecture"] #prefecture_prefectureAutorite');
                                let prefectureService = document.querySelector('form[name="prefecture"] #prefecture_prefectureService');
                                let prefectureCp = document.querySelector('form[name="prefecture"] #prefecture_cpPrefecture');
                                let token = document.querySelector('form[name="prefecture"] #prefecture__token');
                                let data = new FormData();

                                data.append("prefecture_nomPrefecture", prefectureNom.value);
                                data.append("prefecture_adressePrefecture", prefectureAdresse.value);
                                data.append("prefecture_numeroAdressePrefecture", prefectureNumeroAdresse.value);
                                data.append("prefecture_communePrefecture", prefectureCommune.value);
                                data.append("prefecture_prefectureAutorite", prefectureAutorite.value);
                                data.append("prefecture_prefectureService", prefectureService.value);
                                data.append("prefecture_cpPrefecture", prefectureCp.value);
                                data.append("prefecture__token", token.value);

                                fetch("/admin/stage/loadFormPrefecture", { method: "POST",body: data,credentials: 'include'})
                                .then((resultat) => {
                                    return resultat.json();
                                })
                                .then((resultat) => {
                                  
                                    if(resultat.error != null){
                                       document.querySelector('#errorPrefecture').innerHTML = "La préfecture existe déjà";
                                    }else if(resultat.value != null){
                                       const selectPrefecture = document.querySelector('#stage_prefecture');
                                       const option = document.createElement("option");
                                       option.setAttribute('value', resultat.id )
                                       option.text = resultat.value;
                                       selectPrefecture.add(option);
                                       selectPrefecture.selectedIndex = selectPrefecture.length - 1 ;
                                       closePrefecture.click(); 
                                    }
                                }).catch((error) => {
                                    console.log(error);
                                });
                        }
                    })
                }
            
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}


function loadFormStagiaire() {
    let stagiaire = document.querySelector('#addStagiaire');

    if (stagiaire != null) {
        fetch("/admin/stage/loadFormStagiaire", {credentials: 'include'})
        .then((reponse) => {
            return reponse.text();
        })
        .then((reponse) => {
            if (reponse.length > 0) {
                document.querySelector('#modalCartStagiaire .modal-body').innerHTML = reponse;
                btn = document.querySelector('#modalCartStagiaire .modal-body button');
                if (btn != null) {
                    btn.addEventListener('click', function (e) {
                        e.preventDefault();
                        if (document.querySelector('form[name="stagiaire"] #stagiaire_nomStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_prenomStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_cpStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_communeStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_nomNaissanceStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_dateNaissanceStagiaire_day').value.length != "" &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_dateNaissanceStagiaire_month').value.length != "" &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_dateNaissanceStagiaire_year').value.length != "" &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_lieuNaissanceStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_adresseStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_nationaliteStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_numeroPortableStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_numeroFixeStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_emailStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_numeroAdresseStagiaire').value.length != 0 &&
                            document.querySelector('form[name="stagiaire"] #stagiaire_civilite').value.length != ""){

       

                                let stagiaireNom = document.querySelector('form[name="stagiaire"] #stagiaire_nomStagiaire');
                                let stagiairePrenom = document.querySelector('form[name="stagiaire"] #stagiaire_prenomStagiaire');
                                let stagiaireCp = document.querySelector('form[name="stagiaire"] #stagiaire_cpStagiaire');
                                let stagiaireCommune = document.querySelector('form[name="stagiaire"] #stagiaire_communeStagiaire');
                                let stagiaireNomNaissance = document.querySelector('form[name="stagiaire"] #stagiaire_nomNaissanceStagiaire');
                                let stagiaireDateNaissance = document.querySelector('form[name="stagiaire"] #stagiaire_dateNaissanceStagiaire_year').value+"-"+
                                                             document.querySelector('form[name="stagiaire"] #stagiaire_dateNaissanceStagiaire_month').value+"-"+
                                                             document.querySelector('form[name="stagiaire"] #stagiaire_dateNaissanceStagiaire_day').value;
                                let stagiaireLieuNaissance = document.querySelector('form[name="stagiaire"] #stagiaire_lieuNaissanceStagiaire');
                                let stagiaireAdresse = document.querySelector('form[name="stagiaire"] #stagiaire_adresseStagiaire');
                                let stagiaireNationalite = document.querySelector('form[name="stagiaire"] #stagiaire_nationaliteStagiaire');
                                let stagiaireNumeroPortable = document.querySelector('form[name="stagiaire"] #stagiaire_numeroPortableStagiaire');
                                let stagiaireNumeroFixe = document.querySelector('form[name="stagiaire"] #stagiaire_numeroFixeStagiaire');
                                let stagiaireEmail = document.querySelector('form[name="stagiaire"] #stagiaire_emailStagiaire');
                                let stagiaireCarteJeune = document.querySelector('form[name="stagiaire"] #stagiaire_carteJeuneStagiaire');
                                let stagiairePartenaire = document.querySelector('form[name="stagiaire"] #stagiaire_partenaireStagiaire');
                                let stagiaireAdherent = document.querySelector('form[name="stagiaire"] #stagiaire_adherentStagiaire');
                                let stagiaireNumeroAdresse = document.querySelector('form[name="stagiaire"] #stagiaire_numeroAdresseStagiaire');
                                let stagiaireCivilite = document.querySelector('form[name="stagiaire"] #stagiaire_civilite');
                                let token = document.querySelector('form[name="stagiaire"] #stagiaire__token');
                                let data = new FormData();
                              
                                data.append("stagiaire_nomStagiaire", stagiaireNom.value);
                                data.append("stagiaire_prenomStagiaire", stagiairePrenom.value);
                                data.append("stagiaire_cpStagiaire", stagiaireCp.value);
                                data.append("stagiaire_communeStagiaire", stagiaireCommune.value);
                                data.append("stagiaire_nomNaissanceStagiaire", stagiaireNomNaissance.value);
                                data.append("stagiaire_dateNaissanceStagiaire", stagiaireDateNaissance);
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

                                fetch("/admin/stage/loadFormStagiaire", { method: "POST",body: data,credentials: 'include'})
                                .then((resultat) => {
                                    return resultat.json();
                                })
                                .then((resultat) => {
                                    if(resultat.error != null){
                                       document.querySelector('#errorStagiaire').innerHTML = "Le stagiaire existe déjà";
                                    }else if(resultat.value != null){
                                       const selectStagiaire = document.querySelector('#stage_stagiaires');
                                       const div = document.createElement("div");
                                       div.classList.add('form-check');
                                       
                                       const input = document.createElement("input");
                                       input.setAttribute('value', resultat.id );
                                       input.setAttribute('type','checkbox');
                                       input.setAttribute('id',"stage_stagiaires_"+resultat.id);
                                       input.classList.add('form-check-input');
                                       const label = document.createElement("label");

                                       label.classList.add('form-check-label');
                                       label.innerHTML = resultat.value;

                                        div.appendChild(input);
                                        div.appendChild(label);

                                       selectStagiaire.appendChild(div);
                                       input.click();
                                       closeStagiaire.click(); 
                                    }
                                }).catch((error) => {
                                    console.log(error);
                                });
                        }
                    })
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}
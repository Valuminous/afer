document.onreadystatechange = function () {
    if( document.readyState === 'complete' ){  
        verifAutoriteTribunal();
        myBoxAutoriteTribunal = $('#autoriteTribunalDelete');
        verifServiceTribunal();
        myBoxServiceTribunal = $('#tribunalServiceDelete');
    }
}

//Fonction vérification si l'autorité existe ou non pour les tribunaux
function verifAutoriteTribunal(){
    let btnDelete = document.querySelectorAll('.tribunalAutoriteDelete');
    [].forEach.call( btnDelete, (btnElement) => {
        btnElement.addEventListener('click', (e)=>{

            e.preventDefault();
            let id = btnElement.getAttribute('data-id');
            data = new FormData();
            data.append('id',id);

            fetch("/admin/tribunal/autorite/supprAlertFormAutoriteTribunal", { method: "POST", body: data, credentials: 'include'
            })
            .then((reponse) => {
                return reponse.json();
            })
            .then((reponse) => {

                if (reponse.error != null) {

                    console.log('erreur');

                } else {

                    if(reponse.nb === 0) {
                        document.querySelector('.modal-body').innerHTML = "Vous êtes sur le point de supprimer une autorité";
                        myBoxAutoriteTribunal.modal('show');
                        document.querySelector('.btn-danger').href = "/admin/tribunal/autorite/"+id+"/supprimer";
                        document.querySelector('.btn-danger').style.display = 'block';
                    } else {
                        document.querySelector('.modal-body').innerHTML = "Vous ne pouvez pas supprimer cette autorité car elle est utilisée dans un tribunal";
                        document.querySelector('.btn-danger').style.display = 'none';
                        myBoxAutoriteTribunal.modal('show');
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
        })
    })  
}

//Fonction vérification si le service existe ou non pour les tribunaux
function verifServiceTribunal(){
    let btnDelete = document.querySelectorAll('.tribunalServiceDelete');
    [].forEach.call( btnDelete, (btnElement) => {
        btnElement.addEventListener('click', (e)=>{

            e.preventDefault();
            let id = btnElement.getAttribute('data-id');
            data = new FormData();
            data.append('id',id);

            fetch("/admin/tribunal/autorite/supprAlertFormServiceTribunal", { method: "POST", body: data, credentials: 'include'
            })
            .then((reponse) => {
                return reponse.json();
            })
            .then((reponse) => {

                if (reponse.error != null) {

                    console.log('erreur');

                } else {

                    if(reponse.nb === 0) {
                        document.querySelector('.modal-body').innerHTML = "Vous êtes sur le point de supprimer un service";
                        myBoxServiceTribunal.modal('show');
                        document.querySelector('.btn-danger').href = "/admin/tribunal/service/"+id+"/supprimer";
                        document.querySelector('.btn-danger').style.display = 'block';
                    } else {
                        document.querySelector('.modal-body').innerHTML = "Vous ne pouvez pas supprimer ce service car il est utilisé dans un tribunal";
                        document.querySelector('.btn-danger').style.display = 'none';
                        myBoxServiceTribunal.modal('show');
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
        })
    })  
}
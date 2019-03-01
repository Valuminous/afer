inputCommune();

function inputCommune() {
    
    let commune = document.querySelector('#lieu_stage_nom_commune');
     
    commune.addEventListener('keyup', function (e) {
        if (commune.textLength > 2) {
            fetch("/admin/stage/lieucommune", {credentials: 'include'})
            .then((reponse) => { 
                return reponse.text();
            })
            .then((reponse) => {
                if (reponse.length > 0) {
                let data = new FormData();
                data.append("lieu_stage_nom_commune", commune.value);
                
                fetch("/admin/stage/lieucommune", {method: "POST",body: data,credentials: 'include'})
                    .then((resultat) => {
                        return resultat.json();
                    })
                    .then((resultat) => {
                        let selection = document.getElementById('select');
                        console.log(resultat);
                        selection.style.top = commune.offsetLeft+commune.offsetHeight;
                        selection.style.left = commune.offsetLeft;
                        selection.style.width = commune.offsetWidth;
                        for (let i = 0; i < resultat.length; i++) {
                            const ville = document.createElement("p");
                            ville.textContent = resultat[i]['nomCommune']+"("+resultat[i]['cp']+")";
                            selection.appendChild(ville);
                            selection.classList.remove('listeHidden');
                        }

                        let longitude = document.getElementById('lieu_stage_longitude');
                        let latitude = document.getElementById('lieu_stage_latitude');

                        longitude.innerHTML = resultat[i]['longitude'];
                        latitude.innerHTML = resultat[i]['latitude'];

                    }).catch((error) => {
                        console.log(error);
                    });
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    });
}



    
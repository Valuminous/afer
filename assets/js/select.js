inputCommune();

function inputCommune() {
    let commune = document.querySelector('#lieu_stage_nom_commune');
   
  
    commune.addEventListener('keyup', function (e) {
    if (commune.textLength > 2) {
        fetch("/admin/stage/lieucommune", {
                credentials: 'include'
            })
            .then((reponse) => {
               
                return reponse.text();
            })
            .then((reponse) => {
                
                if (reponse.length > 0) {
                                let data = new FormData();
                                data.append("lieu_stage_nom_commune", commune.value);
                               

                                fetch("/admin/stage/lieucommune", {
                                        method: "POST",
                                        body: data,
                                        credentials: 'include'
                                    })

                                    .then((resultat) => {
                                        return resultat.json();
                                    })
                                    .then((resultat) => {

                                        let selection = document.getElementById('select');
                                        
                                        selection.style.top = commune.offsetLeft+10+"px";
                                        selection.style.left = commune.offsetLeft;
 
                                        for (let i = 0; i < resultat.length; i++) {
                                            const ville = document.createElement("p");
                                            ville.textContent = resultat[i]['nomCommune'];
                                            selection.appendChild(ville);
                                        }
                                    }).catch((error) => {
                                        console.log(error);
                                    });
                //             } else {
                //                 document.querySelector('form[name="tribunal_autorite"] #tribunal_autorite_nom').classList.add('error')
                //             }
                //         })
                //     }
                }
            }).catch((error) => {
                console.log(error);
            });
    }
});
}



    
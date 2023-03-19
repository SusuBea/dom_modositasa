window.addEventListener("load", init)



function init(){
    const LISTA = ["futas", "uszas", "eves", "alvas"];
    const listaHossz = LISTA.length;
    const FELSOROLAS = document.getElementById("felsorolas")
    let  htmlVALTOZO1 = divKiir(LISTA) 
    const MASKEPP = document.getElementsByClassName("maskepp")[0]
    let htmlVALTOZO = listabaKiir(LISTA, FELSOROLAS);
    kiir(htmlVALTOZO, FELSOROLAS)
    FELSOROLAS.addEventListener("click", klikkeles)
    kiir(htmlVALTOZO1, MASKEPP);


    //megfogtuk az összes gomb elemet
    const gombELEMEK = document.querySelectorAll(".maskepp button")
    
    //rátesszük az eseménykezelőt a gomb elemekre
    for (let index = 0; index < LISTA.length; index++) {
        gombELEMEK[index].addEventListener("click", hatter)
        
    }

}

function listabaKiir(LISTA, FELSOROLAS){
    let htmlVALTOZO = "<ul>"
    for (let index = 0; index < LISTA.length; index++) {
    // htmlVALTOZO += "<li>" + LISTA[index] + "</li>" 
    htmlVALTOZO += `<li> ${LISTA[index]} </li>`
    }
    htmlVALTOZO += "</ul>"
    // FELSOROLAS.innerHTML += htmlVALTOZO
    // kiir(htmlVALTOZO, FELSOROLAS)
    return htmlVALTOZO;
}

function kiir(mit, hova){
    hova.innerHTML += mit

}

function klikkeles(event){
    tartalom = event.target.innerHTML;
    console.log(tartalom);

}

function divKiir(LISTA){
    let htmlVALTOZO = ""
    for (let index = 0; index < LISTA.length; index++) {
    // htmlVALTOZO += "<li>" + LISTA[index] + "</li>" 
    htmlVALTOZO += `<div class="divek"><p>${LISTA[index]}</p> <button>OK</button> </div>`
    }
    htmlVALTOZO += ""
    // FELSOROLAS.innerHTML += htmlVALTOZO
    // kiir(htmlVALTOZO, FELSOROLAS)
    return htmlVALTOZO;
}


function hatter(event){
    //ezzel megfogjuk a elemhez tartozó szülőt (ebben az esetben a gomb szülője ---> a div-et)
    console.log(event.target.parentNode)
    const ELEM = event.target.parentNode;
    ELEM.classList.add("hatter")
}
 // traigo mi etiqueta de html a una variable
let animado = document.querySelectorAll(".animado")

function mostrarHeader(){
    for(let i = 0; i < animado.length; i++){
         //por cada etiqueta en la que exista la variable animado le agregale el estilo
        if(animado[i]){
            animado[i].style.opacity= 1
        }
    }
}

window.addEventListener("load", mostrarHeader)
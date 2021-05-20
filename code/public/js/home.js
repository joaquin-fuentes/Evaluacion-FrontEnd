let animado = document.querySelectorAll(".animado")




function mostrarHeader(){
    for(let i = 0; i < animado.length; i++){
        if(animado[i]){
            animado[i].style.opacity= 1
        }
    }
}

window.addEventListener("load", mostrarHeader)
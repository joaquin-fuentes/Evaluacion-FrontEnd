   // traigo mi etiqueta de html a una variable

const open = document.querySelector(".open")
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")
 //cuando realice click en mi variable...
open.addEventListener("click", function (){
    //le agrego una clase a la variable elegida
    modal.classList.add("show")
})
 //cuando realice click en mi variable...
close.addEventListener("click", function (){
     //le quito una clase a la variable elegida
     modal.classList.remove("show")
})
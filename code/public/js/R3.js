const open = document.querySelector(".open")
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")

open.addEventListener("click", function (){
    return modal.classList.add("show")
})

close.addEventListener("click", function (){
    return modal.classList.remove("show")
})
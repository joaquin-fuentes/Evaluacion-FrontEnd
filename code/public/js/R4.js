window.addEventListener("load", function() {

   

    fetch("https://restcountries.eu/rest/v2/all")
    .then(function(res){
      return   res.json()
    })
    .then(function(datos){
        
       console.log(datos)
       const fila = document.querySelector("tbody")
        for (let i = 0; i < 20; i++){

            let nombre = datos[i].name
            let capital = datos[i].capital
            let habitantes = datos[i].population
            let region = datos[i].name
            let superficie = datos[i].area
            let bandera = "<img src= " + datos[i].flag + ">"

            console.log(nombre.id)
            

            fila.innerHTML +=    
            "<tr>" +
            "<td>" + nombre + "</td>" +
            "<td>" + capital + "</td>"+
            "<td>" + habitantes + "</td>"+
            "<td>" + region + "</td>"+
            "<td>" + superficie + "</td>"+
            "<td>" + bandera + "</td>" 
            "</tr>";
        }
    
    })
})
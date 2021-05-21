window.addEventListener("load", function() {

   

    fetch("https://restcountries.eu/rest/v2/all")
    .then(function(res){
      return   res.json()
    })
    .then(function(datos){
        
       const tabla = document.querySelector("table")
        for (let i = 0; i < 6; i++){

            let nombre = datos[i].name
            let capital = datos[i].capital
            let habitantes = datos[i].population
            let region = datos[i].name
            let superficie = datos[i].area
            let bandera = "<img src= " + datos[i].flag + ">"


            tabla.innerHTML +=    
            "<tr>" +
            "<td>" + "<p>" + nombre + "</p>" + "</td>" +
            "<td>" + "<p>" +"Capital:"+ capital + "</p>" +  "</td>"+
            "<td>" + "<p>" + habitantes + " habitantes" + "</p>" +  "</td>"+
            "<td>" + "<p>" +"Región: "+ region +"</p>" +  "</td>"+
            "<td>" + "<p>" +"Superficie: "+ superficie +" km²"+"</p>" +  "</td>"+
            "<td>" + "<p>" + bandera + "</p>" + "</td>" 
            "</tr>";
        }
    
    })
})
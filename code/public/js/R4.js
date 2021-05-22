
window.addEventListener("load", function() {

   
//traigo la Api 
    fetch("https://restcountries.eu/rest/v2/all")
    // cuando la tenga la paso a JSON
    .then(function(res){
      return   res.json()
    })
    //obtengo los datos de la api
    .then(function(datos){
        // traigo mi etiqueta de html a una variable
       const tabla = document.querySelector("table")
       
       //realizo el for, sólo hasta 6 por que sino son muchísimos datos
        for (let i = 0; i < 6; i++){
            
            // paso los datos especificos que necesitare a variables para utilizar
            let nombre = datos[i].name
            let capital = datos[i].capital
            let habitantes = datos[i].population
            let region = datos[i].name
            let superficie = datos[i].area
            let bandera = "<img src= " + datos[i].flag + ">"

            // le agrego una porcion de html a mi etiqueta
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
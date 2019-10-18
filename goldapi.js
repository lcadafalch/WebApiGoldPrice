



function httpGet(theUrl, callback) {
    console.log("Ejecutando peticion a " + theUrl)
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl);
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")
    xmlHttp.send();

}
function procesaResultado(texto) {
    //   console.log("retorno")
    let datos = JSON.parse(texto);
    let arrFechas = datos.dataset.data
    let fechaUsuario = "1995-03-05";
    let valorOro = buscaValorOroFecha(arrFechas, fechaUsuario);



    console.log(valorOro);
}


function buscaValorOroFecha(arrFechas, fechaUsuario) { // función de buscar el valor del oro 

    for (let i = 0; i < arrFechas.length; i++) {

        let fecha = arrFechas[i][0];
        let valordelOro = arrFechas[i][1];
        if (fecha == fechaUsuario) {
           return valordelOro; 
        }
    }
    return 0;
}
    

// BINDS / EVENT LISTENERS


///EJECUCION
httpGet("https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_EUR.json?api_key=QM8Dtv2xn3-dKZJ6rhoq", procesaResultado)



















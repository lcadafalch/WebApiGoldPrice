



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
    let arrFechas = datos.dataset.data // retorno del servidor / api



    let fechaUsuario = "1995-03-20"; // fecha del usuario



// TODO sacar datos de dia, mes y año
// crear una string de fecha



    let valorOro = buscaValorOroUsuario(arrFechas, fechaUsuario); // busca valor oro
    
    
    // imprime valor oro
    let resultadoValor = document.querySelectorAll(".resultadoValor")[0]
    resultadoValor.innerHTML = valorOro;





    console.log(valorOro);
}

 function buscaValorOroFecha(arrFechas,fechaUsuario) {
    for (let i = 0; i < arrFechas.length; i++) {

        let fecha = arrFechas[i][0];
        let valordelOro = arrFechas[i][1];
        if (fecha == fechaUsuario) {
            return valordelOro;
        }
    }
    return 0;
 }


function buscaValorOroUsuario(arrFechas, fechaUsuario) { // función de buscar el valor del oro 

    let valordelOro = buscaValorOroFecha(arrFechas,fechaUsuario)
 
/*
//TODO: cambiar fechaUsuario (añadir o quitar dias)
var fecha = new Date(fechaUsuario);
var dias = 2; // Número de días a agregar
fecha.setDate(fecha.getDate() + dias);

console.log(fecha)
let valordelOro = buscaValorOroFecha(arrFechas,fecha)
*/



    return valordelOro;
}


// BINDS / EVENT LISTENERS


let butonValor = document.getElementById("butonValor")
butonValor.addEventListener("click", function () {

    httpGet("https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_EUR.json?api_key=QM8Dtv2xn3-dKZJ6rhoq", procesaResultado)


}
);


///EJECUCION



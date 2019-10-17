



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
function imprime (texto){
 //   console.log("retorno")
 let datos = JSON.parse(texto);

 function fechas (datos){
 datos.dataset


 }

    
}
 httpGet("https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_EUR.json?api_key=QM8Dtv2xn3-dKZJ6rhoq",imprime)




























// function imprimeCliente(objCliente) {
//     document.write(objCliente.name)
// }
// function listaClientes(objClientes) {
//     for (let i = 0; i < objClientes.firstClients.length; i++) {
//         imprimeCliente(objClientes.firstClients[i])
//     }
// }
// function imprime(texto) {
//     callback
//     let objClientes = JSON.parse(texto); listaClientes(objClientes)
// } function imprime(texto) { //callback
//     console.log(texto)
# Gold price api 
Gold price api que aparece el día en base a una fecha
.
## Description
El proyecto consta en realizar una consulta http a una consulta externa a una api  con una consulta Http a una Api externa , a partir de una fecha proporcionada por el usuario.

## Features


1. Llamadas Http
2. Funciones
3. Listeners de botones

## How does it work? 
realización de la  llamada http Json
```
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

```

## Stack Utilizado
 
Se ha usado Javascript vanilla para este proyecto

## Future improvements

Se está trabajando en mejoras visuales del CSS y también en aplicar una gráfica interactiva con la librería de Highcharts o chart.js

## License
[MIT](https://choosealicense.com/licenses/mit/)
import { tresEnRaya } from './tresenraya.js';

var tres = new tresEnRaya();
var condicion = true;

function vista() {
    var div = document.getElementById("tabla");
    var tabla = document.createElement("TABLE");
    tabla.setAttribute("border", "2px");
    tabla.style.height = "500px";
    tabla.style.width = "500px";
    var cont = 0;
    for (let i = 0; i < 3; i++) {
        var fila = document.createElement("tr");
        for (let j = 1; j <= 3; j++) {
            var columna = document.createElement("td");
            columna.setAttribute("id", "" + cont);
            columna.addEventListener("click", toque, false);
            columna.style.textAlign = 'center';
            fila.appendChild(columna);
            cont++;
        }
        tabla.appendChild(fila);
    }
    div.appendChild(tabla);
}
vista();

function toque(event) {
    if (condicion) {
        var celda=parseInt(event.target.id);
        if (tres.mapa[celda] == 0) {
            tres.elegircelda(celda);
        }else {
            window.alert("No puedes pulsar sobre una celda seleccionada");
        }
        dibujar();

        switch (tres.ganador()) {
            case 0:
                break;
            case 1: alert("Ha ganado el jugador1"); condicion = false; break;
            case 2: alert("Ha ganado el jugador2"); condicion = false; break;
            case 3: alert("Empate"); condicion = false; break;
        }
    }
    if(!condicion){
        var boton= document.getElementById("volver");
        boton.style.display='block';
        boton.addEventListener("click", volver, false);
    }
}

function dibujar() {
    for (let i = 0; i < 9; i++) {
        if (tres.mapa[i] == 0) document.getElementById("" + i).style = "background-color: white";
        if (tres.mapa[i] == 1) document.getElementById("" + i).style = "background-color: red"
        if (tres.mapa[i] == 2) document.getElementById("" + i).style = "background-color: blue"
    }
}

function volver() {
    condicion=true;
    tres=new tresEnRaya();
    resetearTabla();
    document.getElementById("volver").style.display='none';
}

function resetearTabla(){
    for (let i = 0; i < 9; i++) {
        document.getElementById("" + i).style = "background-color: white";
    }
}
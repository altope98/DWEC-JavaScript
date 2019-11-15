var cadena = prompt("Introduce cadena");
invierteCadena(cadena);
function invierteCadena(cadena) {
    var cont = cadena.length
    var cadenaInvertida = "";
    do {
        cadenaInvertida = cadenaInvertida + cadena.charAt(cont)
        cont--;
    } while (cont >= 0)
    document.write(cadenaInvertida);
}

function inviertePalabras(cadena) {
    var cont = cadena.length
    var x = 0;
    var arr = [];
    var cadenaInvertida = "";
    do {
        if (cadena.charAt(cont) == " ") {
            arr[x] = cadenaInvertida + cadena.charAt(cont)
            cont--;
        }
    } while (cont >= 0)
    document.write(cadenaInvertida);
}

function eliminarCaracter(cadena){
    aux = new String("");
    for (let i = 0; i < cadena.length; i++) {
        aux=cadena.charAt(i);
        for (let j = 0; j < cadena.length; j++) {
            if(aux==cadena){
                cadena.replace("a","");
            } 
        }  
    }
}

function quitarCaracteresRepetidos(cadena){
let stringAuxiliar= new String();
for (let i = 0; i < cadena.length; i++) {
    if(!estaContenida(stringAuxiliar, cadena.charAt(i))){
        stringAuxiliar +=cadena.charAt(i);
    }
}
return stringAuxiliar;
}


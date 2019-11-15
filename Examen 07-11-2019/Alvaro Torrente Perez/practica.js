var cont = 0;
var cuenta = 10;


function ejercicio1(string) {
    var aux= string.split(" ");
    var cadena2="";

    for (let i = 0; i < aux.length; i++) {
        var cadena=aux[i];
        cadena=cadena.charAt(0).toUpperCase()+cadena.slice(1, cadena.length)+" ";
        cadena2 += cadena;
    }
    return(cadena2);
}

console.log(ejercicio1("afsfa fvfdv efwefe"));


function ejercicio2(arr) {
    arr.sort(
    function (a, b) {
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });
    return(arr[0]);
}

var arr=["01/03/2016","02/05/2019","10/12/2008"];
console.log(ejercicio2(arr));

function ejercicio3(num, pos) {
    if(pos<num.length) {
        return num[pos]+ejercicio3(num,pos+1);
    }
    return 0;
}

var arr=[2,3,4];
console.log(ejercicio3(arr,0));

function ejercicio4(filas, columnas, color1, color2) {
    document.write("<table width='300px' height='300px' border='2px'>");
    for (let i = 1; i <= filas; i++) {
        if (i % 2 == 0) {
            document.write("<tr style='background-color:" + color2 + "'>");
        } else {
            document.write("<tr style='background-color:" + color1 + "'>");
        }
        for (let j = 1; j <= columnas; j++) {
            document.write("<td></td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}


ejercicio4(4, 4, "red", "blue");

function ejercicio5(event) {

    if (cont == 0) {
        cuenta = 10
        cont++;
        reloj(event);

    }
    
}

function reloj(event) {

    var celda = document.getElementById(event.target.id);
    celda.innerHTML = cuenta;
    if (cuenta == 0) {
        celda.style.backgroundColor = "red";
    } else {
        cuenta -= 1;
        setInterval(reloj(event), 1000);
    }
}


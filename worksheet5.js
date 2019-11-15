
//4.10
document.write("<h1>PRACTICA DE BUCLE FOR</h1>");
for (let i = 1; i <= 6; i++) {
    document.write("<h" + i + "> Cabecera H" + i + "</h" + i + ">");
}


let columnas = prompt("Introduce numero de columnas");
let filas = prompt("Introduce filas");
let ancho = prompt("Introduce anchura");
let altura = prompt("Introduce altura");
let cont = 1;

//4.11
document.write("<table border='2'><tr height=" + altura + ">")
for (let i = 1; i <= columnas; i++) {
    document.write("<td width= " + ancho + "> a </td>")
}
document.write("</tr></table>");

//4.12
document.write("<table border='2'><tr height=" + altura + ">")
for (let i = 1; i <= columnas; i++) {
    if (i % 2 != 0) {
        document.write("<td width= " + ancho + "  bgcolor = 'black'> a </td>")
    } else {
        document.write("<td width= " + ancho + "> a </td>")
    }
}
document.write("</tr></table>");

//4.13
document.write("<table border='2'><tr height=" + altura + ">")
while (cont <= columnas) {
    cont++;
    document.write("<td width= " + ancho + "> a </td>")
}
cont = 1;
document.write("</tr></table>");

//4.14
document.write("<table border='2'><tr height=" + altura + ">")
while (cont <= columnas) {
    cont++;
    if (cont % 2 != 0) {
        document.write("<td width= " + ancho + "  bgcolor = 'black'> a </td>")
    } else {
        document.write("<td width= " + ancho + "> a </td>")
    }
}
cont = 1;
document.write("</tr></table>");

//4.15
var num1 = prompt("Introduce numero");
var bol = true;
while (bol == true) {
    var num2 = prompt("Adivina el numero");
    if (num2 > num1) {
        alert("El numero es menor");
    }
    if (num2 < num1) {
        alert("El numero es mayor");
    }
    if (num2 == num1) {
        alert("Correcto");
        bol = false;
    }
}

//4.16
var num = prompt("Introduce numero");
var bol = true;

do {
    var num2 = prompt("Adivina el numero");
    if (num2 > num1) {
        alert("El numero es menor");
    }
    if (num2 < num1) {
        alert("El numero es mayor");
    }
    if (num2 == num1) {
        alert("Correcto");
        bol = false;
    }

} while (bol == true)

//4.17
for (let i = 1; i <= 10; i++) {
    document.write("<h3>Tabla del " + i + "</h3>")
    for (let j = 1; j <= 10; j++) {
        document.write("<p>" + j + " X " + i + " = " + (j * i) + "</p>")
    }

}

//4.18
document.write("<table border='2'>")
for (let i = 1; i <= filas; i++) {
    document.write("<tr height=" + altura + ">")
    for (let j = 1; j <= columnas; j++) {
        document.write("<td width= " + ancho + "> a </td>")
    }
    document.write("</tr>")
}
document.write("</table>");

//AJEDREZ 4.19
document.write("<table border='2'>")
var a = 0;
for (let i = 1; i <= 8; i++) {
    document.write("<tr height=" + ancho + ">")
    for (let j = 1; j <= 8; j++) {
        a++;
        if (a % 2 == 0) {
            document.write("<td width= " + ancho + "  bgcolor = 'black'> a </td>")
            bol = false;
        } else {
            document.write("<td width= " + ancho + "> a </td>");
            bol = true
        }
    }
    if (i % 2 == 0) {
        a = 0;
    } else {
        a = 1;
    }
    document.write("</tr>")
}
document.write("</table>");
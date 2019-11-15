//NUMERO MAYOR
/*let n1= parseInt(prompt("Introduce numero 1"));
let n2= parseInt(prompt("Introduce numero 2"));
let n3= parseInt(prompt("Introduce numero 3"));
let n4= parseInt(prompt("Introduce numero 4"));
 let n= [n1,n2,n3,n4];
document.write("<p>"+mayor(n)+"</p>");*/
function mayor(n) {
    var mayor = 0;
    for (let i = 0; i < n.length; i++) {
        if (mayor < n[i++]) {
            mayor = n[i];
        }
    }
    return mayor;

}


//DADO
//document.write("<p>"+lanzamiento()+"</p>");
function lanzamiento() {
    dado = Math.round(Math.random() * (6 - 1) + 1)
    return dado;
}


//DADO CON PROBABILIDAD
cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0, cont6 = 0;
function probabilidad() {
    for (let i = 1; i <= 6000; i++) {
        if (lanzamiento()) {
            switch (dado) {
                case 1: cont1++; break;
                case 2: cont2++; break;
                case 3: cont3++; break;
                case 4: cont4++; break;
                case 5: cont5++; break;
                case 6: cont6++; break;
            }
        } else {
            return;
        }
    }
    document.write("<p>Veces 1: "+cont1+"</p>");
    document.write("<p>Veces 2: "+cont2+"</p>");
    document.write("<p>Veces 3: "+cont3+"</p>");
    document.write("<p>Veces 4: "+cont4+"</p>");
    document.write("<p>Veces 5: "+cont5+"</p>");
    document.write("<p>Veces 6: "+cont6+"</p>");
}

//probabilidad();



//VOLUMEN ESFERA V=4/3*PI*R ELEVADO A 3
/*let radio= parseFloat(prompt("Introduce radio"));
document.write("<p>"+volumen(radio)+"</p>");*/
function volumen(radio) {
    volumen = 4 / 3 * Math.PI * Math.pow(radio, 3);
    return volumen.toFixed(2);
}

//RECURSIVA POTENCIA
/*let base=parseInt(prompt("Introduce base"));
let exponente=parseInt(prompt("Introduce exponente"));
document.write("<p>"+potenciaRecursiva(base,exponente)+"</p>");   */
function potenciaRecursiva(base, exponente){
    if(base==0 || exponente==0){
        return 1;
        
    }else{
        return base * potenciaRecursiva(base,exponente-1);
    }
}



//RECURSIVA FACTORIAL
let num=parseInt(prompt("Introduce numero"));
document.write("<p>"+recursivaFactorial(num)+"</p>");
function recursivaFactorial(num){
    if(num!=0){
        return num * recursivaFactorial(num-1);   
    }else{
        return 1;
    }
}

function tabla(){
    document.write("<table border='1'>");
    for (let fila = 1; fila <= 10; fila++) {
        document.write("<tr>");        
            document.write("<td>"+fila+"</td>");
            document.write("<td>"+recursivaFactorial(fila)+"</td>");
        document.write("</tr>");
    }
    document.write("</table/>");
}
tabla();

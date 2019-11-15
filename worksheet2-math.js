
/*document.write("<p>"+Math.floor(Math.random()*2)+"</p>");
document.write("<p>"+Math.floor(Math.random() * (200 - 100) + 100)+"</p>");*/

/*var num1=parseInt(prompt("Introduce valor minimo"));
var num2= parseInt(prompt("Introduce valor maximo"));
random(num1,num2);*/
function random(num1, num2) {
    let random=(Math.floor(Math.random() * (num2 - num1) + num1));
    document.write("<p>" + random + "</p>");
}

/*var angle= prompt("Introduce angulo");
angles(angle);*/
function angles(angle) {
    var rad = ((angle * Math.PI) / 180);
    document.write("<p> Seno: " + Math.sin(rad) + "</p>");
    document.write("<p> Coseno: " + Math.cos(rad) + "</p>");
    document.write("<p> Tangente: " + Math.floor(Math.tan(rad)) + "</p>");
}

/*do{
var c1=parseInt(prompt("Introduce cateto 1"));
var c2=parseInt(prompt("Introduce cateto 2"));
hipotenusa(c1,c2);
var res=prompt("Desea seguir (Y/N)");
}while (res == 'Y' || res == 'S' || res == 's' || res == 'y') 
*/
function hipotenusa(c1, c2) {
    document.write("<p>" + Math.hypot(c1, c2).toFixed(2) + "</p>");
}

/*var a=prompt("Introduce valor variable a");
var b=prompt("Introduce valor variable b");
var c=prompt("Introduce valor variable c");
segundogrado(a,b,c);*/
function segundogrado(a, b, c) {
    if (b > (4 * a * c)) {
        let solucion1 = ((-1 * -b) + (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
        let solucion2 = ((-1 * -b) - (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);

        document.write("<p> Las soluciones son " + solucion1.toFixed(2) + " y " + solucion2.toFixed(2) + "</p>");
    } else {
        document.write("<p> Indefinida</p>");
    }
}

/*var base=prompt("Introduce la base");
var exponente=prompt("Introduce exponente");
potenza(base,exponente);*/
function potenza(base, exponente) {
    let potenza = Math.pow(base, exponente);
    document.write("<p>" + potenza + "</p>");
}

var ascendente = parseInt(prompt("Introduce numero"));
tabla(ascendente);
function tabla(ascendente) {
    document.write("<table border='2'>");
    for (let i = ascendente; i <= (ascendente + 10); i++) {
        document.write("<tr>");
        for (let col = 1; col <= 2; col++) {
            if (col == 1) {
                document.write("<td>" + (i) + "</td>");
            } else {
                document.write("<td>" + (Math.sin(((i*Math.PI)/180))) + "</td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

//images();
function images(){
    let condicion= Math.floor(Math.random() *3 + 1);
    if(condicion==1){
        document.write("<img src='https://parkers-images.bauersecure.com/pagefiles/194944/cut-out/600x400/mitsi_lancer_evo_ix.jpg'  height='200' width='200'>");
    }
    if(condicion==2){
        document.write("<img src='https://upload.wikimedia.org/wikipedia/commons/2/21/2002_Peugeot_206_LX_1.4_Front.jpg'  height='200' width='200'>");
    }
    if(condicion==3){
        document.write("<img src='https://img.milanuncios.com/fg/2560/74/256074348_1.jpg?VersionId=nos6Dwuad5fpFYD0Wp4.H5CpUBj.BPkw'  height='200' width='200'>");
    }

}



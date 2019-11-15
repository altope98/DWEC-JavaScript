var fecha= new Date();
document.write("<p>"+fecha.getFullYear()+"</p>");
document.write("<p>"+fecha.getMonth()+"</p>");
document.write("<p>"+fecha.getDay()+"</p>");
document.write("<p>"+fecha.getHours()+"</p>");
document.write("<p>"+fecha.getMinutes()+"</p>");
document.write("<p>"+fecha.getSeconds()+"</p>");

document.write("</br></br></br>");

var fechaHoy= new Date();
var fecha85= new Date();
fecha85.setDate(fechaHoy.getDate()+85);
document.write("<p>"+fecha85+"</p>");
var fecha187=new Date();
fecha187.setDate(fechaHoy.getDate()-187);
document.write("<p>"+fecha187+"</p>");
fecha85.setFullYear(fecha85.getFullYear()+2);
document.write("<p>"+fecha85+"</p>");
fecha187.setHours(fecha187.getHours()-24);
document.write("<p>"+fecha187+"</p>");
var fechaResto= fecha85-fecha187;
document.write("<p>"+fechaResto+"</p>");

document.write("</br></br></br>");


var conti=parseInt(60);
//contador();
function contador(){
    conti=(conti-1);
    document.write("<p>"+(conti)+"</p>");

    if(conti==0){
        window.location.replace("https://www.google.es/");
        return;
    }

    setTimeout("contador()",1000);
}


reloj();
function reloj(){
    let fecha=new Date();
    let hora= fecha.getHours();
    let minuto= fecha.getMinutes();
    let segundo= fecha.getSeconds();


    document.write("<p>"+hora+":"+minuto+":"+segundo+"</p>");

    setTimeout("reloj()",1000);
}
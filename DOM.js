var a= document.getElementsByTagName("a");

console.log(a.length);

console.log(a[a.length-2].href);

var cont=0;
for (let i = 0; i < a.length; i++) {
     if(a[i].name=="google"){
        cont++;
    }  
}
console.log(cont);

var p = document.getElementsByTagName("p");
a = p[2].getElementsByTagName("a");
console.log(a.length);

function añadirElemento() {

var lista= document.getElementsByTagName("ul");
var elementos=lista[0].getElementsByTagName("li");

elementos.push("<li>a</li>");

console.log(lista[0]);
//lista[0].write="<li>a</li>";

}
 
function añadirInput() {
    var inputs= document.getElementsByTagName("input");
    document.getElementById("subidas").innerHTML="<input type='file' name='"+(parseInt(inputs[inputs.length-1].name)+1)+"'>";
}

function siguiente() {
    
}

function atras() {
    
}


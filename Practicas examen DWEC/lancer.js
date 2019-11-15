let parametro=prompt("Introduce titulo");
var timer;
var cont;
ejercicio3(parametro);



function ejercicio3(parametro){
    if(parametro){
        document.title=parametro;
    }

    if(document.images.length>0){
        console.log(document.images.length);
        for (let i = 0; i < document.images.length; i++) {
            console.log(document.images[i].alt);
            
        }
    }
    cont=3;
    timer=setInterval(reloj,1000);
    
}

function reloj()
{
    cont--
    var p= document.getElementById("p");
    p.textContent=""+cont;
    
  if (cont == 0)
  {
    clearInterval(timer);
    let url = prompt("Indica la URL a cargar: ");
    location.href = url;
  }
}

console.log(document.title);
class Gato{
    
    constructor(nombre,edad,tamaño,raza){
        this.nombre=nombre;
        this.edad=edad;
        this.tamaño=tamaño;
        this.raza=raza;
    }

    caracteristicas() {
        return ("Me llamo "+this.nombre+", tengo "+this.edad+" años, mido "+this.tamaño+" cm y soy un "+this.raza);
    }
}

class JaulaGatitos{

    constructor(){
        this.coleccion=new Array();
    }

    añadirGato(gato){
        this.coleccion.push(gato);
    }

    buscarGato(nombre){
        for (gato of this.coleccion)
            if (gato.nombre == nombre)
                return gato.caracteristicas();
        
        return "No lo encuentro";
    }

    mostrarGatos(){
        let cadena = "Contiene un total de "+this.coleccion.length+ ".  "+(this.recorridoGatos());
        return cadena;
    }
    
    recorridoGatos(){
        var aux="";
        for (gato of this.coleccion){
            aux += gato.caracteristicas()+";  ";
        }
        return aux;
    }
}

function contador() {
    document.getElementById("mensaje").style.display="none";
}

function mostrar(event) {
    document.getElementById("mensaje").style.display="block";

    if (event.keyCode === 13) {
        document.getElementById("mensaje").style.display="none";
        document.getElementById("caja").value="";
        }
}


var id="tabla";
function aplicaEstilos(id) {
    var tabla=document.getElementById(id);
    console.log(tabla);
    if(tabla){
       var filas= tabla.getElementsByTagName("tr");
       filas[0].style.color = "red";

        for (i=1; i< filas.length; i+=2)
            filas[i].style.backgroundColor = "green";

        for (i=2; i< filas.length; i+=2)
            filas[i].style.backgroundColor = "blue";   
    }
}

aplicaEstilos(id);

var gato= new Gato("blas",3,22,"calvo");
var gato2= new Gato("pepe",3,22,"calvo");
var jaula= new JaulaGatitos();
jaula.añadirGato(gato2);
jaula.añadirGato(gato);
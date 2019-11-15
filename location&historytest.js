
document.write("<button onclick='link()'>Link a Google</button>");
function link(){
location.href="https://www.google.es/";
}

document.write("<button onclick='atras()'>Atras</button>");
function atras() {
    window.history.back();
}

document.write("<button onclick='adelante()'>Adelante</button>");
function adelante() {
    window.history.forward();
  }
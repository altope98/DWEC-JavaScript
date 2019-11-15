var imgPulsada = false;
var posX,posY,x,y,imagen;
function clickImagen(event){
    imgPulsada=!imgPulsada;
    posX= x - event.target.hspace;
    posY= y - event.target.vspace;
    imagen=event.target;
    console.log(imagen);
}
function move(event) {
    x=event.clientX;
    y=event.clientY;
    console.log(x+ " "+y);
    if(imgPulsada){
        imagen.vspace = y - posY;
        imagen.hspace = x - posX; 
   }
}
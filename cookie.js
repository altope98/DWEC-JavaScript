if(!document.cookie){
    document.getElementById("no-cookie").style.display='block';
    document.getElementById("borrar").style.display='none';
}else{
    document.getElementById("no-cookie").style.display='none';
    document.getElementById("borrar").style.display='block';
    if(document.cookie){
        alert("Bienvenido: "+getCookie("username"));
    }
}

function cambiarcolores(){
    var fondo=document.getElementById("fondo").value;
    var parrafo=document.getElementById("parrafo").value;
    var letra=document.getElementById("letra").value;
    var fecha= new Date();
    var añadir=fecha.getMinutes();
    fecha.setMinutes((añadir+5));
    document.cookie= "fondo="+fondo+"; parrafo="+parrafo+"; letra="+letra+"; expires="+fecha+"";
    document.body.style.backgroundColor=""+getCookie("fondo")+"";
    document.body.style.fontSize=""+getCookie("letra")+"px";
    document.body.text=""+getCookie("parrafo")+"";
    
}

function getCookie(name){
    let temp= name+"=";
    let separador=document.cookie.split(";");
    for (let i = 0; i < separador.length; i++) {
        let c= separador[i];
        while( c.charAt(0)== ' '){
            c=c.substring(1);
        }
        if(c.indexOf(temp)==0){
            return c.substring(temp.length,c.length);
        }
    }
return "";
}

function borrar(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "fondo=; parrafo=; letra=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}


function crearcookie(){
   var usuario=document.getElementById("nombre").value;
   var fecha= new Date();
   var añadir=fecha.getMinutes();
   fecha.setMinutes((añadir+5));
    document.cookie= "username="+usuario+"; expires="+fecha+"";
    if(document.cookie){
        alert("Bienvenido: "+getCookie("username"));
    }
}


function validacionusuario(){
    var elemento=document.getElementById("nombre");
    var text=document.getElementById("nombre").value;
    var pattern=  new RegExp(/^[a-zA-Z0-9_?!-.]{8,16}$/);
    if(pattern.test(text)){
        elemento.style.backgroundColor="rgba(0,255,0,0.7)";
    }else{
        elemento.style.backgroundColor="rgba(255,0,0,0.7)";

    }
}
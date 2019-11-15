function validacionusuario(){
    var elemento=document.getElementById("usuario");
    var text=document.getElementById("usuario").value;
    var pattern=  new RegExp(/^[a-zA-Z0-9_?!-.]{8,16}$/);
    if(pattern.test(text)){
        elemento.style.backgroundColor="rgba(0,255,0,0.7)";
    }else{
        elemento.style.backgroundColor="rgba(255,0,0,0.7)";

    }
}

function validacionnombre(){
    var elemento=document.getElementById("nombre");
    var text=document.getElementById("nombre").value;
    var pattern=  new RegExp(/^[a-zA-Z ]{1,16}$/);
    if(pattern.test(text)){
        elemento.style.backgroundColor="rgba(0,255,0,0.7)";
    }else{
        elemento.style.backgroundColor="rgba(255,0,0,0.7)";
    }
}

function validacionapellidos(){
    var elemento=document.getElementById("apellidos");
    var text=document.getElementById("apellidos").value;
    var pattern=  new RegExp(/^[a-zA-Z ]{1,24}$/);
    if(pattern.test(text)){
        elemento.style.backgroundColor="rgba(0,255,0,0.7)";
    }else{
        elemento.style.backgroundColor="rgba(255,0,0,0.7)";
    }
}

function validaciondni(){
    var elemento=document.getElementById("dni");
    var text=document.getElementById("dni").value;
    var pattern=  new RegExp( /^\d{8}[a-zA-Z]$/);
    if(pattern.test(text)){
        elemento.style.backgroundColor="rgba(0,255,0,0.7)";
    }else{
        elemento.style.backgroundColor="rgba(255,0,0,0.7)";
    }
}

function validacionemail(){
    var elemento=document.getElementById("email");
    var text=document.getElementById("email").value;
    var pattern=  new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if(pattern.test(text)){
        elemento.style.backgroundColor="rgba(0,255,0,0.7)";
    }else{
        elemento.style.backgroundColor="rgba(255,0,0,0.7)";
    }
}

function validaciontelefono(){
    var elemento=document.getElementById("telefono");
    var text=document.getElementById("telefono").value;
    var pattern=  new RegExp(/^[9|6|7][0-9]{9,9}$/);
    if(pattern.test(text)){
        elemento.style.backgroundColor="rgba(0,255,0,0.7)";
    }else{
        elemento.style.backgroundColor="rgba(255,0,0,0.7)";
    }
}

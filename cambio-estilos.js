function normal(){
    
    document.getElementById("azul").style.backgroundColor = "blue";
    document.getElementById("container").style.display = "flex";
    document.getElementById("container").style.flexFlow = "row nowrap";
    document.getElementById("azul").style.paddingLeft = "100px";

    document.getElementById("azul").style.display = "block";
    document.getElementById("parrafo").style.display = "block";
    document.getElementById("parrafo").style.fontWeight = "bold";
    document.getElementById("lel").style.paddingLeft = "50px";

    document.getElementById("enlaces").style.backgroundColor = "aqua";
    for (let i = 1; i <= 2; i++) {
        document.getElementById("enlace"+i).style.textDecoration = "none";
        
    }
    document.getElementById("marco").style.backgroundColor = "yellow";
    document.getElementById("marco").style.border = "20px";
    
    document.body.style.backgroundColor="wheat";
    document.body.style.fontFamily="Arial";
    
}

function minimalista(){
    document.body.style.fontFamily="initial";
    document.body.style.backgroundColor="initial";
    document.getElementById("azul").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
    document.getElementById("lel").style.paddingLeft = "initial";
    document.getElementById("marco").style.backgroundColor = "initial";
    document.getElementById("marco").style.border = "initial";
    document.getElementById("enlaces").style.backgroundColor = "initial";

    for (let i = 1; i <= 2; i++) {
        document.getElementById("enlace"+i).style.textDecoration = "underline";
    }
}

const getFontSize = (texto) =>
parseFloat(getComputedStyle(texto)
    .getPropertyValue('font-size'));

function aumentarTamaño(){
    let texto=document.getElementById("text");
    let fontSize=getFontSize(texto);
    fontSize=fontSize+10;
    document.getElementById("text").style.fontSize=fontSize+"px";
}

function disminuirTamaño(){
    let texto=document.getElementById("text");
    let fontSize=getFontSize(texto);
    fontSize=fontSize-10;
    document.getElementById("text").style.fontSize=fontSize+"px";
}

function justificada(){
    document.getElementById("text").style.textAlign="justify";
}

function izquierda(){
    document.getElementById("text").style.textAlign="left";
}
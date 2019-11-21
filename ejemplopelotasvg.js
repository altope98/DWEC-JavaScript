window.onload=()=>{
    var pos=10;
    setInterval(()=>{
        mibola=document.getElementById("circulo");
        mibola.setAttribute("cx",pos+"px");
        pos+=10;
    },100);
}
function tabla(){
    document.write("<table border='1px' width='500px' height='500px' id='tabla'> ");
        for (let j = 1; j <= 20; j++) {
            document.write("<tr>");
                    for(let i=1; i<=20;i++){
                    document.write("<td id='co"+(j+i)+"' onmousemove='pintar(event)'></td>");
                    }
            document.write("</tr>");
        }
    document.write("</table>");
    }

    

    function pintar(event){
    if (event.ctrlKey) {
        event.target.style.backgroundColor='red';
        }
        if(event.shiftKey){
        event.target.style.backgroundColor='blue';
        }
        if(event.altKey){
            event.target.style.backgroundColor='white';
        }

    }

    function borrar(event2){
        document.write("<p>blas</p>");
        tabla = document.getElementById("tabla");	
        fat=tabla.parentNode;
        fat.removeChild(tabla);
        /*if(event2.keyCode==8){
            for (let j = 1; j <= 20; j++) {
                for(let i=1; i<=20;i++){
                    document.getElementById("co"+(j+i)).style = "background-color: white";
                }
            }
        }*/
    }
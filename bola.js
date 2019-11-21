class Bola {
    constructor(x, y, velx, vely, color, r) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velx = velx;
        this.vely = vely;
        this.r = r;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.tag.setAttribute("fill", this.color);
        this.tag.setAttribute("r", this.r);
        this.tag.setAttribute("cx", this.x);
        this.tag.setAttribute("cy", this.y);

    }

    mover() {

        if ((this.x + this.velx - this.r) < 0 || (this.x + this.velx + this.r) > 1000) {
            this.velx *= -1;
        }
        if ((this.y + this.vely - this.r) < 0 || (this.y + this.vely + this.r) > 500) {
            this.vely *= -1;
        }
        this.x = this.x + this.velx;
        this.y = this.y + this.vely;
    }

    dibujar() {

        this.tag.setAttribute("cx", this.x);
        this.tag.setAttribute("cy", this.y);
    }
}


class Juego {
    constructor(ancho, largo, ...bolas) {
        this.ancho = ancho;
        this.largo = largo;
        this.bolas=bolas;
        this.div = document.getElementById("juego");

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.div.setAttribute("height", this.largo);
        this.div.setAttribute("width", this.ancho);
        this.svg.setAttribute("height", this.largo);
        this.svg.setAttribute("width", this.ancho);

        this.div.appendChild(this.svg);
        for (this.bola of this.bolas){
            this.svg.appendChild(this.bola.tag);
        }
        this.generarJuego();
    }

    generarJuego() {
        setInterval(() => {
            for (this.bola of this.bolas) {
                this.bola.mover();
            }
            for (this.bola of this.bolas) {
                this.bola.dibujar();
            }
        }, 100);
    }
}

window.onload = () => {
    var bola1=new Bola(50, 60, 20, 30, "red", 10);
    var bola2= new Bola(100, 80, 40, 50, "blue", 15);

    var ancho=parseInt(prompt("Introduce ancho"));
    var largo=parseInt(prompt("Introduce largo"));

    var juego=new Juego(ancho, largo, bola1,bola2);
    

}
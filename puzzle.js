class Puzzle{

    constructor(ancho,largo){
        var puzz = [];
        var aux = [];
        var num = 0;
        this.ancho = ancho;
        this.largo = largo;
        
        for(let i = 0; i < largo; i++){
            puzz[i] = [i];
            for(let j = 0; j < ancho; j++){
                puzz[i][j] = num;
                num++;
            }            
        }

        for(let i = 0; i < largo; i++){
            for(let j = 0; j < ancho; j++){
                aux.push(puzz[i][j]);
            }            
        }
   
        for (let i = aux.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [aux[i], aux[j]] = [aux[j], aux[i]];
        }        

        var pos = 0;
        for(let i = 0; i < largo; i++){
            for(let j = 0; j < ancho; j++){
                puzz[i][j] = aux[pos];
                pos++;
            }            
        }
        this.tablero = puzz;
    }

    getTablero(){
        return this.tablero;
    }

    posicion(){
        for(let i = 0; i < this.largo; i++){
            for(let j = 0; j < this.ancho; j++){
                if(this.tablero[i][j] == 0){
                    return "Posicion actual: ["+i+"] , ["+j+"]";
                }
           }             
        }
    }
}

var largo = parseInt(prompt("Alto: "));
var ancho = parseInt(prompt("Ancho: "));

var puzz = new Puzzle(largo,ancho);
console.log(puzz);
export class tresEnRaya {
    mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    jugador;
    constructor() {
        this.mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.jugador = 1;
        this.nuevoJuego();
    }
    nuevoJuego() {
        for (let i = 0; i < this.mapa.lenght; i++) {
            this.mapa.unshift(0);

        }
    }

    elegircelda(celda) {
        if (this.jugador == 1) {
            this.mapa[celda] = 1;
        }else{
            this.mapa[celda]=2;
        }

        if(this.jugador==1){
            this.jugador=2;
        }else{
            this.jugador=1;
        }

        //this.moverInteligencia(celda);
        //this.jugador = 1;
        //this.dibujar();
        /*var r = this.ganador();
        switch (r) {
            case 0:
                break;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
        }*/
    }

    ganador() {
        var numEspacios = 0;
        for (let i = 0; i < 9; i++) {
            if (this.mapa[i] == 0) numEspacios++;
        }
        // Las líneas horizontales
        if (this.mapa[0] == this.mapa[1] && this.mapa[1] == this.mapa[2] && this.mapa[0] != 0) return this.mapa[0];
        if (this.mapa[3] == this.mapa[4] && this.mapa[4] == this.mapa[5] && this.mapa[3] != 0) return this.mapa[3];
        if (this.mapa[6] == this.mapa[7] && this.mapa[7] == this.mapa[8] && this.mapa[6] != 0) return this.mapa[6];
        //Las líneas verticales
        if (this.mapa[0] == this.mapa[3] && this.mapa[3] == this.mapa[6] && this.mapa[0] != 0) return this.mapa[0];
        if (this.mapa[1] == this.mapa[4] && this.mapa[4] == this.mapa[7] && this.mapa[1] != 0) return this.mapa[1];
        if (this.mapa[2] == this.mapa[5] && this.mapa[5] == this.mapa[8] && this.mapa[2] != 0) return this.mapa[2];
        //Las diagonales
        if (this.mapa[0] == this.mapa[4] && this.mapa[4] == this.mapa[8] && this.mapa[0] != 0) return this.mapa[0];
        if (this.mapa[2] == this.mapa[4] && this.mapa[4] == this.mapa[6] && this.mapa[2] != 0) return this.mapa[2];

        if (numEspacios > 0) {
            return 0;
        } else {
            return 3;
        }
    }

    moverInteligencia(celda) {
        var random = Math.floor((Math.random() * 3) + 1);
        var celdatemp = celda;
        if (random == 1) {
            if (this.mapa[(celda++)] == 0) {
                this.mapa[(celda++)] = 2;
            } else {
                celda = celdatemp;
                if (this.mapa[(celda + 4)] == 0) {
                    this.mapa[(celda + 4)] = 2;
                } else {
                    celda = celdatemp;
                    if (this.mapa[(celda + 3)] == 0) {
                        this.mapa[(celda + 3)] = 2;

                    } else {
                        celda = celdatemp;
                        if (this.mapa[(celda - 3)] == 0) {
                            this.mapa[(celda - 3)] = 2;
                        } else {
                            this.mapa[(celda - 5)] = 2;
                        }
                    }
                }
            }
        }
        if (random == 2) {
            if (this.mapa[(celda--)] == 0) {
                this.mapa[(celda--)] = 2;
            } else {
                celda = celdatemp;
                if (this.mapa[(celda++)] == 0) {
                    this.mapa[(celda++)] = 2;
                } else {
                    celda = celdatemp;
                    if (this.mapa[(celda + 3)] == 0) {
                        this.mapa[(celda + 3)] = 2;
                    } else {
                        celda = celdatemp;
                        if (this.mapa[(celda - 3)] == 0) {
                            this.mapa[(celda - 3)] = 2;
                        } else {
                            this.mapa[(celda - 5)] = 2;
                        }
                    }
                }
            }
        }
        if (random == 3) {
            if (this.mapa[(celda + 3)] == 0) {
                this.mapa[(celda + 3)] = 2;
            } else {
                celda = celdatemp;
                if (this.mapa[(celda++)] == 0) {
                    this.mapa[(celda++)] = 2;
                } else {
                    celda = celdatemp;
                    if (this.mapa[(celda--)] == 0) {
                        this.mapa[(celda--)] = 2;
                    } else {
                        celda = celdatemp;
                        if (this.mapa[(celda - 3)] == 0) {
                            this.mapa[(celda - 3)] = 2;
                        } else {
                            this.mapa[(celda - 5)] = 2;
                        }
                    }
                }
            }
        }


    }
}


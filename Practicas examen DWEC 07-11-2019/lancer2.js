function ejercicio2(cantidad) {
    var arr = new Array(cantidad);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(prompt("Introduce numero:"));
    }
    var cuenta = 1;
    for (let i = 0; i < arr.length; i++) {
        cuenta = cuenta * arr[i]
    }
    return cuenta;
}
//console.log(ejercicio2(3));

function ejercicio3(...num) {
    var cuenta = 1;
    num.map(
        x =>
        { 
            cuenta = cuenta * x;
        });
    return cuenta;
}
//console.log(ejercicio3(3,2,10,20));

function ejercicio5(dimension, cadena) {
    var arr = new Array(new Array(dimension), new Array(dimension));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            var random = Math.round(Math.random() * (50 - 10) + 10);
            arr[i][j] = random;
        }
    }
    cadenaaux = new String(cadena);
    return arr[cadenaaux.charAt(0)][cadenaaux.charAt(1)];
}
console.log(ejercicio5(5, "02"));

/*class informacionLugar {
    constructor(latitud, longitud) {
        this.latitud = latitud;
        this.longitud = longitud;
        if (navigator.geolocation && !latitud && !longitud) {
            this.initMap();
        }
    }

    get pais() { }

    get direccion() { }

    dibujaMapa() {
        var pos = { lat: this.latitud, lng: this.longitud };
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: pos,
            mapTypeId: 'hybrid'
        });
    }

    dibujaMarcador() {
        var pos = { lat: this.latitud, lng: this.longitud };
        var marker = new google.maps.Marker({ position: pos, map: map });
    }

    escribeEtiqueta() { }

    initMap() {
        navigator.geolocation.getCurrentPosition(posicion);
        function posicion(position) {
            this.latitud = position.coords.latitude;
            this.longitud = position.coords.longitude;
        }
    }
}*/


var opcion = prompt("Introduce numero ejercicio");
var c;
const max_age = 70;


switch (opcion) {
    case "1":
        c = 1;
        for (let i = 1; i <= 3; i++) {
            inicio(c);
        } break;
    case "2":
        c = 2;
        for (let i = 1; i <= 3; i++) {
            inicio(c);
        } break;
    case "3":
        c = 3;
        for (let i = 1; i <= 3; i++) {
            inicio(c);
        } break;
    case "4":
        c = 4;
        for (let i = 1; i <= 3; i++) {
            inicio(c);
        } break;
    case "5":
        c = 5;
        for (let i = 1; i <= 3; i++) {
            inicio(c);
        } break;
}

function validador(any) {
    if (any) {
        return true;
    }

    return false;
}

function inicio(c) {
    if (c == 1) {
        var children = prompt("Introduce numero de hijos");
        if (validador(children) == false) {
            document.write("<p>El numero de hijos no es correcto</p>");
            return;
        }
        var padres = prompt("Introduce nombre de padre");
        if (validador(padres) == false) {
            document.write("<p>El nombre del padre no es correcto</p>");
            return;
        }
        var geo = prompt("Introduce localizacion");
        if (validador(children) == false) {
            document.write("<p>La localizacion no es correcta</p>");
            return;
        }
        var trabajo = prompt("Introduce trabajo");
        if (validador(children) == false) {
            document.write("<p>El trabajo no es correcto</p>");
            return;
        }
        tellFortune(children, padres, geo, trabajo);
    }
    if (c == 2) {
        var birth = prompt("Introduce año de nacimiento");
        if (validador(birth) == false) {
            document.write("<p>El año de nacimiento no es correcto</p>");
            return;
        }
        var dt = new Date();
        var current = dt.getFullYear();
        calculateAge(birth, current);
    }
    if (c == 3) {
        var amount_per_day = parseFloat(prompt("Introduce cantidad diaria"));
        if (validador(amount_per_day) == false) {
            document.write("<p>La cantidad por dia no es correcta</p>");
            return;
        }
        calculateSupply(max_age, amount_per_day);
    }
    if (c == 4) {
        var radius = parseFloat(prompt("Introduce radio"));
        if (validador(radius) == false) {
            document.write("<p>El radio no es correcto</p>");
            return;
        }
        calcCircumfrence(radius);
        calcArea(radius);
    }
    if (c == 5) {
        var celsius = parseFloat(prompt("Introduce grados celsius"));
        if (validador(celsius) == false) {
            document.write("<p>Grados celsius no correctos</p>");
            return;
        }
        var farenheit = parseFloat(prompt("Introduce grados farenheit"));
        if (validador(farenheit) == false) {
            document.write("<p>Grados farenheit no correctos</p>");
            return;
        }
        celsiusToFahrenheit(celsius);
        fahrenheitToCelsius(farenheit);
    }
}

function tellFortune(children, padres, geo, trabajo) {
    document.write("<p>You will be a " + trabajo + " in " + geo + ", and married to " + padres + " with " + children + " kids.</p>");
}

function calculateAge(birth, current) {
    document.write("<p>Your age is " + (current - birth) + "</p>");
}

function calculateSupply(max_age, amount_per_day) {
    let calc = amount_per_day * 365 * max_age;
    document.write("<p>You will need " + calc + " to last you until the ripe old age of " + max_age + "</p>");
}

function calcCircumfrence(radius) {
    let circunference = Math.PI * Math.pow(radius, 2);
    document.write("<p>The circumference is " + circunference + "</p>");
}

function calcArea(radius) {
    let area = 2 * Math.PI * radius;
    document.write("<p>The area is " + area + "</p>");
}

function celsiusToFahrenheit(celsius) {
    let celsius_farenheit = (celsius * 9 / 5) + 32;
    document.write("<p>" + celsius + "ºC is " + celsius_farenheit + "ºF</p>");
}

function fahrenheitToCelsius(farenheit) {
    let farenheit_celsius = (farenheit - 32) * 5 / 9;
    document.write("<p>" + farenheit + "ºF is " + farenheit_celsius + "ºC</p>");
}
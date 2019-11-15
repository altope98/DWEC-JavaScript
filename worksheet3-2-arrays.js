
//PARES IMPARES

function paresImpares() {
    var arr = [];
    arr.length = 100;
    var pares = [];
    var impares = [];
    for (let i = 0; i < arr.length; i++) {
        var random = Math.floor(Math.random() * 1000) + 1;
        if (random % 2 == 0) {
            pares.push(random);
            pares.sort(function (a, b) { return a - b });
        } else {
            impares.push(random);
            impares.sort(function (a, b) { return a - b });
        }
    }
    console.log(pares);
    console.log(impares);
    arr = pares.concat(impares);
    console.log(arr);
}
paresImpares();



//EJ 7

function ejercicio7() {
    var arr2 = [];
    arr2.length = 20;
    for (let i = 0; i <= 9; i++) {
        arr2.unshift(0);
    }
    for (let i = 9; i < arr2.length; i++) {
        arr2[i] = 1;

    }
    console.log(arr2);
    console.log(arr2.join(' '));
}
ejercicio7();







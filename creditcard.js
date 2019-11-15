var card = prompt("Introduce numero de tarjeta");

function validateCreditCard(card) {

    if (card.length !== 16) {
        return false;
    }

    for (let i = 0; i < card.length; i++) {
        var numbers = parseInt(card[i]);
        if (!Number.isInteger(numbers)) {
            return false;
        }
    }

    var arr = [];
    for (var i = 0; i < card.length; i++) {
        arr[card[i]] = true;
    }
    
    if (Object.keys(arr).length < 2) {
        return false;
    }

    if (parseInt(card[lastIndexOf(card)]) % 2 != 0) {
        return false;
    }

    var cont = 0;
    for (let i = 0; i < card.length; i++) {
        cont += parseInt(card[i]);

    }
    if (cont <= 16) {
        return false;
    }

    return true;
}
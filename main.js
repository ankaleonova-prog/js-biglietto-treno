document.getElementById('generate').addEventListener('click', function() {
//il biglieto treno//
//recupero dati da input//
const km = parseFloat(document.getElementById('km').value)
const age = parseInt(document.getElementById('age').value)

//calcolare prezzo//
let price = km * 0.21
//sconto//
if (age === 'minorenne') {
        price *= 0.8; // 20% sconto
    } else if (age === 'over65') {
        price *= 0.6; // 40% sconto
    }

    //mostra il prezzo

document.getElementById('ticket-km').innerText = km;
document.getElementById('ticket-price').innerText = price.toFixed(2);
document.getElementById('ticket').classList.remove('hidden'); 
});
//collect info
const km = parseInt (prompt ("Scrivi km da percorrere"))
console.log (km)
//colculated price
const pricekm = 0.21 
let price = km * pricekm
//passenger age
const age = parseInt(prompt("scrivere un numero"));
console.log (age)
 //add sales
 if (age < 18) {
        price *= 0.8; // sale 20%
    } else if (age > 65) {
        price *= 0.6; // sale 40%
    }
console.log("price ticket");




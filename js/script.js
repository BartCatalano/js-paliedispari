

const userWorld = prompt("Inserisci una parola e ti dirò se è palindroma");

/**
 * Description
 * @param {text} userWorld
 * @returns {boolean}
 */
function palindroma(userWorld) {
    let risultato = "";
    for(let i = userWorld.length -1; i >= 0; i-- ) {
        const lettera = userWorld[i];
       risultato += lettera;
    }
        return risultato;

}
console.log(palindroma(userWorld));
let control = false;
let risultatodiconfronto = (palindroma(userWorld));
if (userWorld === risultatodiconfronto) {
    control=true;
    
}
console.log(control);
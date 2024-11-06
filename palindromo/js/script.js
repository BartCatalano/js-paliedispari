

const userWord = prompt("Inserisci una parola e ti dirò se è palindroma");

/**
 * Description
 * @param {text} userWord
 * @returns {boolean}
 */
function palindroma(userWord) {
    let risultato = "";
    for(let i = userWord.length -1; i >= 0; i-- ) {
        const lettera = userWord[i];
       risultato += lettera;
    }
        return risultato;

}
console.log(palindroma(userWord));
let control = false;
let risultatodiconfronto = (palindroma(userWord));
if (userWord === risultatodiconfronto) {
    control=true;
    
}
console.log(control);
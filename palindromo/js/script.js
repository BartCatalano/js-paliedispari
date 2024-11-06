

const userWord = prompt("Inserisci una parola e ti dirò se è palindroma");
palindroma(userWord);
/**
 * Description
 * @param {text} userWord
 * @returns {boolean}
 */
function palindroma(Word) {
    let risultato = "";
    for(let i = Word.length -1; i >= 0; i-- ) {
        const lettera = Word[i];
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
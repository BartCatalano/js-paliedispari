

let userWord = prompt("Inserisci una parola e ti dirò se è palindroma");
userWord = userWord.toLowerCase();
invertword(userWord);
/**
 * Description
 * @param {text} userWord
 * @returns {boolean}
 */
function invertword(Word) {
    let risultato = "";
    for(let i = Word.length -1; i >= 0; i-- ) {
        const lettera = Word[i];
       risultato += lettera;
    }
        return risultato;

}
console.log(invertword(userWord));
let control = false;
const risultatodiconfronto = invertword(userWord);
if (userWord === risultatodiconfronto) {
    control=true;
    
}
console.log(control);
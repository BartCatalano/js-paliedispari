
// CHIEDO AD UTENTE DI INSERIRE NUMERI E SCEGLIERE TRA PARI E DISPARI
let numeroUtente = prompt("Giochiamo! scegli un numero da 1 a 5");
let podUtente = prompt ("Scegli pari o dispri, prenderò un numero casuale anche io e ti dirò se il risultato è pari o dispari! Buona Fortuna!")
// CREO FUNZIONE CHE GENERA NUMERI RANDOM TRA DUE VALORI NUMERICI 
function numeroPc(min, max){
    const numeroRandom = Math.floor(Math.random() * (max - min +1) + min);
    return numeroRandom;
    

}
const numerogenerato = numeroPc(1, 5);
console.log(numerogenerato);

     

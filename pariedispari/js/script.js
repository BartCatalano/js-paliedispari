
// CHIEDO AD UTENTE DI INSERIRE NUMERI E SCEGLIERE TRA PARI E DISPARI
let numeroUtente = prompt("Giochiamo! scegli un numero da 1 a 5");
let podUtente = prompt ("Scegli pari o dispri, prenderò un numero casuale anche io e ti dirò se il risultato è pari o dispari! Buona Fortuna!")
// CREO FUNZIONE CHE GENERA NUMERI RANDOM TRA DUE VALORI NUMERICI 
function numeroPc(min, max){
    const numeroRandom = Math.floor(Math.random() * (max - min +1) + min);
    return numeroRandom;
}

// USO LA FUNZIONE PER GENERARE UN NUMERO RANDOM DA 1 A 5
const numerogenerato = numeroPc(1, 5);


// SOMMO IL NUMERO GENERATO RANDOM AL NUMERO INSERITO DA URSERS (trasformandolo in numero)
numeroUtente = parseInt(numeroUtente);

let numeroSommato = (numerogenerato + numeroUtente);


// CREO FUNZIONE CHE CONTROLLA SE IL NUMERO è PARI O DISPARI

function pariodispari (numeroSommato){
    let podRisultato = "";
    if (numeroSommato % 2 === 0) {
        podRisultato = "pari";
        
    } else{
        podRisultato = "dispari";
    }
    return podRisultato;
}

// CREO CONDIZIONALE CHE CONTROLLA LA SCELTA DEL PARI E DISPARI UTENTE E CONFRONTA CON Risultato





// RISULTATO FINALE 
console.log(`il numero generato da me è ${numerogenerato}`);
console.log(`il numero scelto da te è ${numeroUtente} e hai scelto ${podUtente}` );
console.log(`la somma dei due numeri è ${numeroSommato}`);
console.log(`il umero uscito è ${podRisultato}`);

     

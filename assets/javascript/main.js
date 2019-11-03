// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
//   cioè il numero di volte che l’utente ha inserito un numero
// consentito.

//creo array vuoto e lo popolo di 16 numeri casuali mai ripetuti

var mine = [];
var numRand;

while(mine.length < 16){

    numRand = numRandom(1,101);

    if(mine.includes(numRand) == false){

        mine.push(numRand);
    }
}
console.log(mine);

//array per la scelta dell'utente
var userNum = [];

//variabile per la scelta dell'utente
var userChoice;


//variabile che determina se il player ha preso la mina
morto = false;


//variabile per il punteggio

punti = 0;




//apro con un ciclo while il ciclo che deve verificare che l'utente non sia morto e che il punteggio sia minore di 84

while (morto == false && punti < 84){

  //chiedo all'utente di inserire dei numeri da 1 a 100
  userChoice = chiediUnNum(1,100)

    //controllo che l'utente inserica un numero che sia inferiore a 100 e superiore a 0
    if (userChoice > 0 && userChoice < 101 && !isNaN(userChoice)){

      //verifico che il numero inserito dall'utente non sia nell'elenco dei numeri scelti in precedenza
      if (userNum.includes(userChoice)){

        alert("Non barare! Usa un numero che non hai ancora usato!")

        //inserisco il controllo che verifichi se l'utente non ha calpestato una mina
      } else if(mine.includes(userChoice) == true){
        
        alert("Sei morto!")
        
        morto = true;

        userNum.push(userChoice);
        

        //se l'utente passa entrambi i controlli, il gioco prosegue e aggiunge un punto
      } else {

        alert("Sei stato fortunato...")

        userNum.push(userChoice);
        
        punti++
      }
               
    } else {
      alert("Inserisci un valore valido!")
    }
  
}
console.log("Il giocatore ha scelto i numeri: " + userNum);

//definisco le condizioni che restituiscono il messaggio di vittoria o sconfitta
if (morto = true){
  alert("Hai calpestato una mina e sei morto! il tuo punteggio è di " + punti + " punti!")

  console.log("Hai calpestato una mina e sei morto! il tuo punteggio è di " + punti + " punti!");
  
} else {

  alert ("Non sei mai finito su una mina! Hai vinto!");

}





















//Blocco funzioni

//funzione numero random
function numRandom(min,max){

  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random()* (max-min)) + min;

}

//funzione chiedere un numero tra due range
function chiediUnNum(min, max){

 return parseInt(prompt("Dimmi un numero da " + min + " a " + max + "!"));
 
}
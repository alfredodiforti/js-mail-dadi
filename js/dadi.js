//ESERCIZIO DADI
//GENERATORI
var giocatore = Math.floor(Math.random() * 6 ) + 1;
console.log('il numero casuale generato per il giocatore e : ' + giocatore);
var computer = Math.floor(Math.random() * 6 ) + 1;
console.log('il numero casuale generato dal computer e : ' + computer);

if (giocatore > computer) {
  console.log('COMPLIMENTI HAI BATTUTO LA MACCHINA');
}
else if (computer > giocatore) {
  console.log('RITENTA SARAI PIU FORTUNATO :(')
}
else {
  console.log('PAREGGIO!')
}

// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// const bici = [
//   {
//     marca: 'Atala',
//     peso: 5000,
//   },
//   {
//     marca: 'Bianchi',
//     peso: 4000,
//   },
//   {
//     marca: 'Rockrider',
//     peso: 6000,
//   },
// ];
//
// let biciLeggera = bici[0];
//
// for( let i = 0; i < bici.length; i++ ){
//
//   if(bici[i].peso < biciLeggera.peso){
//     biciLeggera = bici[i];
//   }
// }
// console.log(`La bici più leggera è : ${biciLeggera.marca}, con un peso di ${biciLeggera.peso} grammi.`);


 // ----------> SNACK 2 <----------

//Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi
// contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  {
    nome: 'Sarchiaponese',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Salerno Reggio Calabria',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Tremonese',
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

// funzione numeri random
function numRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numeroRandom = numRandom(1, 100);

// ciclo per assegnare numeri random
for( let i = 0; i < squadre.length; i++){
  squadre[i].puntiFatti = numRandom(1, 100);
  squadre[i].falliSubiti = numRandom(1, 80);
  // console.log(squadre[i]);
}

const nuovoArray = [];

for( let i = 0; i < squadre.length; i++){
  let obj = {
    nome: squadre[i].nome,
    falliSubiti: squadre[i].falliSubiti,
  }
  nuovoArray.push(obj);
}

console.log(nuovoArray);

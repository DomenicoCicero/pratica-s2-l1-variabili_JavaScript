/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// String --> rappresenta una stringa di testo, composta da caratteri, possiamo inserire le stringhe all'interno di apici (singoli, doppi oppure backtick);
// Number --> rappresenta qualsiasi valore numerico, non c'è bisogno di usare apici altrimenti viene letta come una stringa. in JavaScript Number rappresenta diversi tipi numerici che possiamo trovare in altri linguaggi di programmazione (int, float, double).
// Undefined --> rappresenta una variabile dichiarata alla quale non è stato assegnato nessun valore.
// Null --> rappresenta una valore nullo data direttamente dallo sviluppatore ad una variabile dichiarata alla quale è stato assegnato il valore di null (cioè vuoto).
// Boolean --> una variabile boolean può contenere solamente due valori: true e false.
// Symbol --> ancora non l'abbiamo visto

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName;
myName = "Domenico";

console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;

let somma = num1 + num2;

console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Cicero";

console.log(myName);

// const impossible = 10;
// impossible = 12;
// console.log(impossible);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = 4 - x;

console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "jhon";
let name2 = "Jhon";

console.log(name1 === name2);

console.log(name1.toLowerCase === name2.toLowerCase);

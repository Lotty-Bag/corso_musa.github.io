/*  SOMMA E MEDIA

Scrivi un programma che dati 5 numeri restituisca in output la somma e la media

Esempio:

Input: a = 1, b = 2, c = 3, d = 4, e = 5
output: somma = 15, media = 3

*/

a = 1;
b = 2;
c = 3;
d = 4;
e = 5;

var somma = a + b + c + d + e;
var media = somma / 5;
var risultato = "Questa è la somma: " + somma + "\n" + "e questa è la media: " + media;

console.log(risultato);
document.write("1)  " + risultato + "<br> <br> ");


/*  DIFFERENZA

Quanti anni ha?
Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - età della persona
    - quanti anni sono necessari per raggiungere i 100 anni

Esempio:

Input: anno corrente = 2018, anno di nascita = 1991
output: età = 27, anni mancanti = 73

*/

var year = 2018;
var birth = 1991;

var age = year - birth;

var ageTo100 = 100 - age;

var result = "Siamo nell'anno " + year + " ed essendo nato nel " + birth + " ho " + age + " anni. <br> Tra " + ageTo100 + " compirò 100 anni!";

document.write("2) " + result + "<br> <br> ");

/*  DIVISIONE E RESTO

Gatti in fila
Scrivi un programma che dato:
    - un numero tot di gatti
    - il num di gatti presenti in ogni fila

Restituisca:
    - il numero di file risultanti
    - nel caso l'ultima fila risulti incompleta, indicare il numero di gatti mancanti per completarla.

Esempio:

Input: numero di gatti = 44, gatti per fila = 6
output: numero di file = 8, gatti mancanti = 4

*/

var catTot = 44;
var catRow = 6;

var splitRow = Math.ceil(catTot / catRow);
var rest = catTot % catRow;

var missingCat = catRow - rest;

var resultCat = "Se ho " + catTot + " gatti e li devo mettere in file da " + catRow + ", ottengo " + splitRow + " file. L'ultima però è incompleta poichè mancano " + missingCat + " gatti"


document.write("3) " + resultCat + "<br> <br> ");


/*  DIVISIONE E RESTO

Conta il tempo
Scrivi un programma che dato il numero di secondi calcoli la quantità di ore, minuti e secondi corrispondenti e stampi il risultato.

Esempio:

Input: secondi = 12560
output: 3 ore, 29 minuti e 20 secondi

*/

var sec = 12560;
var secOre = 3 * 3600;
var secMinuti = 29 * 60;

var restSec = sec - secOre - secMinuti;

var resultTime = secOre / 3600 + "ore, " + secMinuti / 60 + " minuti e " + restSec + " secondi."

document.write("4.1) " + resultTime + " [partendo dal risultato]<br> <br> ");

//opzione con Math.floor

var ore = Math.floor(sec / 3600);
var oreSec = ore * 3600;
var rest1 = sec - oreSec;
var min = Math.floor(rest1 / 60);
var minSec = min * 60;
var rest2 = rest1 - minSec;
var resultTime = ore + "ore, " + min + " minuti e " + rest2 + " secondi."

document.write("4.2) " + resultTime + " [con Math.floor] <br> <br> ");

//opzione con resto %

var sec = 3601
var resto1 = sec % 3600; // secondi restanti dell'ultima ora (1760s)
var hour = (sec - resto1) / 3600;

var resto2 = resto1 % 60; //secondi restanti dell'ultimo minuto (20s)
// var resto2 = sec % 60;               // poteva funzionare anche così

var minute = (resto1 - resto2) / 60;
var second = resto2

//var Time = hour + "ore, " + minute + " minuti e " + second + " secondi."
//var Time = `${hour} ore, ${minute} minuti e ${second} secondi.`             //esempio con l'uso del backtick 
var Time = hour + "or" + (hour === 1 ? 'a' : 'e') + ", " +
    minute + " minut" + (minute === 1 ? 'o' : 'i') + " e " +
    second + " second" + (second === 1 ? 'o.' : 'i.')
document.write("4.3) " + Time + " [con resto % e operatore ternario + esempio commentato con backtick `]<br> <br> ");
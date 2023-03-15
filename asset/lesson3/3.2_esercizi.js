/*  IF() ELSE() */

var color = "red"

if (color === "red") {
    message = "stop"
} else if (color === "yellow" || color === "purple" || color === "black" || color === "grey") {
    message = "alert"
} else if (color === "green") {
    message = "go"
}

console.log(message);

/*  SWITCH CASE */

/*  
Lo stesso esercizio di prima può essere riscritto utilizzando lo switch case
*/
switch (color) {
    case ("red"):
        message = "stop"
        break;
    case ("yellow"):
    case ("purple"):
    case ("black"):
    case ("grey"):
        message = "alert"
        break;
    case ("green"):
        message = "go"
        break;
    default:
        message = "Traffic light not working!"
}

/*  - Il break permette di stoppare la lettura del codice nel punto interessato. Se non ci fosse continuerebbe a leggere tutte le casistiche  descritte
    - Possono esserci più di un CASE alla volta.
    - Il default è quello che succede nel momento in cui non si presenta nessuna delle casistiche precedenti
*/


/*  CALDO/FREDDO */

/*  
Scrivi un programma che dati tre valori relativi alle temperature della settimana stabilisca la giornata più fredda e quella più calda.

Esempio:

    Input: a = 30, b = -2, c = 10
    Output: giornata più calda  = 30, giornata più fredda = -2
*/

document.write("1) Scrivi un programma che dati tre valori relativi alle temperature della settimana stabilisca la giornata più fredda e quella più calda. <br> Esempio: Input: a = 30, b = -2, c = 10 | Output: giornata più calda  = 30, giornata più fredda = -2 <br>")

var a = 30;
var b = -2;
var c = 10;

var caldo = 0
var freddo = 0

if (a >= b && a >= c) {
    caldo = a;
    freddo = b < c ? b : c; // confronto ternario
} else if (a < b && a < c) {
    caldo = b < c ? b : c; // confronto ternario
    freddo = a;
} else {
    freddo = b < a ? b : a; // confronto ternario
    caldo = c;
}

var result = "giornata più calda = " + caldo + ", giornata più fredda = " + freddo

document.write("<br>" + result + "<br><br>")




/*  CONTACIFRE */

/*  
Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

Esempio:

    Input: numero = 9
    Output: 1 cifra

    Input: numero = 999
    Output: 3 cifra
*/

document.write("2) Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato. <br> Esempio: Input: numero = 999 | Output: Output: 3 cifre<br>")

var numero = 1000
var cifre = ""

if (numero < 10) {
    cifre = "1 cifra"
} else if (numero < 100) {
    cifre = "2 cifre"
} else if (numero < 1000) {
    cifre = "3 cifre"
} else {
    cifre = "4 cifre"
}

document.write("<br> il numero " + numero + " ha " + cifre + "<br><br>")




/*  FAI IL PROFESSORE */

/*  
Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18 : insufficiente
    18 <= v < 21 : sufficiente
    21 <= v < 24 : buono
    24 <= v < 27 : distinto
    27 <= v <= 29 : ottimo
    v = 30 : eccellente


Esempio:

    Input: v = 29
    Output: ottimo

realizzare anche variante con switch case (e di conseguenza gestire anche il caso in cui il voto inserito non sia valido)

*/

document.write("3) Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri: <br> <ul><li> v < 18 : insufficiente</li><li> 18 <= v < 21 : sufficiente</li><li> 21 <= v < 24 : buono</li><li> 24 <= v < 27 : distinto</li><li> 27 <= v <= 29 : ottimo</li><li> v = 30 : eccellente</li></ul><br>")

var v = 17
var voto = ""

if (v < 18) {
    voto = "insufficiente"
} else if (v < 21) {
    voto = "sufficiente"
} else if (v < 24) {
    voto = "buono"
} else if (v < 27) {
    voto = "distinto"
} else if (v <= 29) {
    voto = "ottimo"
} else if (v == 30) {
    voto = "eccellente"
} else {
    voto = undefined
}

document.write("<br>Soluzione con <b>if else</b>: Il tuo voto è " + v + " : " + voto + "<br>")

var score = 21
var message = ''

switch (score) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        message = "insufficiente"
        break;
    case 18:
    case 19:
    case 20:
        message = "sufficiente"
        break;
    case 21:
    case 22:
    case 23:
        message = "buono"
        break;
    case 24:
    case 25:
    case 26:
        message = "distinto"
        break;
    case 27:
    case 28:
    case 29:
        message = "ottimo"
        break;
    case 30:
        message = "eccellente"
        break;
    default:
        message = "Il voto inserito non è valido"
}

document.write("<br>Soluzione con <b>switch</b>:Il tuo voto è " + score + " : " + message + "<br>")

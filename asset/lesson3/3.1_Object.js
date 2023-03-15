/* OBJECT */

/*
La necessità di usare gli Object nasce dal fatto che le variabili possono contenete UN SINGOLO VALORE.
Gli oggetti invece ci permettono di IMMAGAZZINARE PIÙ VALORI INSIEME (=> ci permettono di evitare di creare 1000 variabili diverse)
Object è quindi un “valore” composto: una collezione NON ordinata di proprietà.

Può essere creato in diversi modi:

    - La funzione: Object.create(prototype) (ad es. var myObj = Object.create({}|Object.prototype|null))
            * Attenzione!! Passare null come prototype non consente di ereditare metodi base come toString() e altre feature da Object.
    - Attraverso la sintassi: {} (ad es. var myObj = { x:10, y:”myString” })
    - Attraverso la keyword new: (ad es. var myObj = new Object())
*/

//Possiamo creare un oggetto così:

    var animal = {
        nasce: function () {
            //...
        },
        respira: function () {
            //...
        },
        mangia: function () {
            //...
        },
    }       // quindi definiamo il nostro "archivio" con delle proprietà definite all'interno parentesi graffe 

// Ma se avessimo la necessità di creare un altro oggetto che erediti queste proprietà lo possiamo fare con Object.create(prototype)

    var felino = Object.create(animal)

    console.log(felino) 

// a questo punto vediamo che felino ha ereditato le propèrietà di animal e possiamo ulteriormente implementare proprietà:

    felino.type = "mammifero";
    felino.corre = function(){
        //..
    }

// ora oltre ad aver assorbito le proprietà di animal si sono aggiunte type e corre che sono proprie solo di felino.

//possiamo anche, una volta definiti dei protipi, creare un nuovo oggetto settao sui protipi già creati

    Object.setPrototypeOf(felino, animal);
    console.log(felino)

    var leone = Object.create(animal)
    Object.setPrototypeOf(leone, felino);
    leone.verso = "roar"

    console.log(leone)



/* --- USI POSSIBILI DI OBJECT.CREATE & PROTOTYPE --- */

/*

Un possibile uso di Object.create e prototype può essere fatto quando ci si vuole proteggere dalla possibilità che
altri possano modificare il valore delle properties di un oggetto (specie quando si passa tramite librerie terze
parti).
In questi casi usare:

var o = {x: “should notchange”};
lib.function(Object.create(o));

In questo modo ogni modifica alla prop x, non impatta (o).
*/



/* ---  --- */

/*
Queste strutture vengono utilizzate per RIPETERE l'esecuzione di uno statement un NUMERO DEFINITO di volte.

I loop possono essere prodotti da:

    - while (true) statement  ->  Lo statement successivo si esegue solo se la condizione è vera (o fino a quando continua ad essere vera);
    - do ... while (true) statement   ->  Lo statement si esegue subito e finchè la condizione è vera;
    - for statement   ->  consente la definizione di 3 stati: 
                              1. la condizione iniziale
                              2. il controllo (come nel while)
                              3. il mutamento della condizione
    - for ... in statement   ->   Consente di ciclare per i membri di un array, oppure di un oggetto.
    - for ... of statement   ->   Come il precedente, solo che itera su ogni oggetto iterable Array, Map, NodeList e altro.

Poi abbiamo:

- BREAK che può interrompere un loop anche se la condizione di controllo continua ad essere vera;
- CONTINUE che consente di saltare lo statement successivo e ripetere la condizione di controllo e quindi il loop.

Tra questi indubbiamente il costrutto più utilizzato è il FOR (quindi preferibile usarlo al posto di while o do.while)
*/



/* --- TIMERS --- */

/*
Sono strutture che servono ad eseguire degli statement nel tempo e sono di due tipi:

    - setTimeout(action,delay)  -> che consente di impostare l'esecuzione di uno statement (action) dopo un dato periodo di temo (delay)
    - setInterval(action,delay) -> che consente di impostare l'esecuzione di uno statement (action) af intervalli programmati (delay)
*/



/* --- DATA TYPES & TYPEOF --- */

/*
I tipi di JS possono essere divisi in 2 macro categorie: 

    - PRIMITIVI 
        - boolean // typeof -> boolean
        - number // typeof -> number
        - string // typeof -> string
        - null // typeof -> object
        - undefinded // typeof -> object

    - OBJECT
      qualsiasi valore JS che non ricada in uno dei tipi primitivi definiti sopra è un Object. Un object in JS è essenzialmente una UNORDERED collection di proprietà, ciascuna delle quali ha un name e un value. (anche le FUNCTION sono object)

Esiste anche uno speciale tipo di Object che consiste in una ordered collection che è l'ARRAY.
Ci sono anche object speciali come:
    
    - set
    - map
    - regExp
    - date
    - error
    - JSON
    - intl
    - console
    - url

typeof è un metodo nativo che consente di ispezionare (e ricevere in risposta) il tipo di un valore o
una variabile. (possiamo usare typeof in console per chiedere il tipo di una variabile o di un valore)
*/
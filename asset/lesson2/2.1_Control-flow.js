/* CONTROL FLOW */

/*
Il CONTROL FLOW in javascript rappresenta come il computer esegue il codice dall'inizio alla fine. Inizia dalla prima riga e termina all'ultima riga, a meno che non raggiunga un'istruzione che modifica il flusso di controllo del programma. Le istruzioni che modificano il flusso sono:
    - Prendere decisioni (CONDITIONAL STATEMENTS)
    - Ripetere delle operazioni (LOOP & CONTROL STRUCTURES)
    - Impostare delle operazioni nel tempo (TIMERS)

*/



/* --- CONDITIONAL STATEMENTS --- */

/*
Sono usate per individuare particolari condizioni che si "verificano” ai valori delle variabili che fanno parte dello script.
Fanno uso degli operatori logici che sono appunto utilizzati per determinare l’esecuzione di uno statement (o meno).
Il comportamento di un conditional statement è analogo a quello che abbiamo visto per l’operatore ternario (se la condizione è vera allora faccio questo, altrimenti faccio quello).

JS vari tipi di conditional statements:
    
    - if() statements   -> if (this condition is TRUE) then do this;
    - if() else()       -> if (this condition is TRUE) then do this; else (do this) 
      {simile al confronto ternario}
    - if() else if() else()
    - switch statements

*/



/* --- LOOP & CONTROL STRUCTURES --- */

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
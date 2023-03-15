/* OPERATORI ARITMETICI */

/* 

----- MATEMATICI: -----

    somma: +
    differenza: -
    moltiplicazione: *
    divisione: /
    resto della divisione: %
    elevazione: **

Operatori combinati:

    incremento di 1: ++
    decremento di 1: --
    incrementa di x: +=n  (+=5 incrementa di 5)
    decrementa di x: -=n  (-=5 incrementa di 5)

- Gli operatori seguono l'ordine di precedenza aritmetica => prima * e /, poi tutti gli altri

----- LOGICI: -----

    == (uguaglianza nel VALORE)                 (2 == "2"  TRUE)
    === (uguaglianza in VALORE e TIPO)          (2 === "2"  FALSE x' valore = ma tipo  )
    != (disuguaglianza nel VALORE)              (10 != 20 TRUE x' 10 non è uguale venti, 10 != 10 FALSE x' 10 è uguale a 10)
    !== (disuguaglianza in VALORE e TIPO)       (10 != "20" TRUE x' 10 non è uguale a 20 nè nel valore nè nel tipo)
    > (maggiore di..)
    < (minore di..)
    >= (maggiore o uguale di..)
    <= (minore o uguale di..)


----- OPERATORE TERNARIO: -----

È in realtà un operatore logico ed è l'unico operatore che ammette 3 operandi => una condizione + ? + due statement 
Non restituisce un valore booleano ma restituisce:
    - il valore del SECONDO operando nel caso la condizione sia VERA
    - il valore del TERZO operando nel caso la condizione sia FALSA

es: (x == 1 ? "x è uguale a 1" : "x è diverso da 1")

È un'alternativa elegante all'utilizzo di if..else

*/

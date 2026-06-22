# recap1
## HTML
Header
Struttura con segnaposto vuoti, successivamente popolati da JS:
- indicazione estratto
- numero estratto
- segnaposto cronologia
- contenitore tabellone
2 button Estrai e Ricomincia, il secondo disabilitato

## CSS
Bootstrap

## JS
- Intercettare quanto serve nell'HTML
- Un array vuoto per tenere traccia dei numeri estratti
- Al caricamento della pagina: crea il tabellone (10 x 9, due for annidati, grid system Bootstrap)
- Al click su Estrai: numero random tra 1 e 90, verifica l'array, se il numero c'è già estrae di nuovo, altrimenti lo inserisce nell'array e lo renderizza sul tabellone
- Il render verifica quale casella contiene il numero estratto e la colora; alla prima estrazione riempie anche gli altri elementi e abilita il button Ricomincia
- Al click su Ricomincia: si svuota l'array, si cancella l'HTML, si ripristina la grafica del tabellone, si disabilita il button Ricomincia
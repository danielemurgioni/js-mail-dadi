Esercizio di oggi: Email e dati
nome repo: js-mail-dadi

Mail:
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email

Mail, sotto-problemi:

(invitedEmails) - Creo una variabile [CONST] con un'[ARRAY] che ha all'interno delle [string] Email invitati;

(userEmail) - Creo una variabile [LET] con un [PROMPT] che va a chiedere all'utente la sua Email[string];

Con un ciclo [FOR] vado a cercare nell'[CONST-ARRAY](invitedEmails);

Cosa cerco? [IF] Se l'utente ha inserito un'email diversa[!=] da uno dei valori di (userEmail) allora stampo un valore booleano [False], ciò vuoldire che l'email inserità dall'utente non è presente nella lista (invitedEmails[i]);

[ELSE] Altrimenti stampo un valore booleano [True], ciò vuoldire che l'email inserità dall'utente è presente della lista (invitedEmails[i]);

Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Gioco dei dadi, sotto-problemi:

(sixfaceDice) - Creo una variabile [LET] con [MATH.] per ottenere un valore [number] da 1 a 6;

(playerDice) (computerDice) - Creo due variabili [CONST] a cui assegno[=] (sixfaceDice), una rappresenta il dado del giocatore e l'altra il dado del computer;

Chi ha vinto? [IF] Se il valore di (playerDice) è maggiore[>] del valore di (computerDice) [{}] Allora stampo[console.log] il messaggio ["Hai_vinto"];

[ELSE] Altrimenti stampo[console.log] il messaggio ["Hai_perso];

Numero minimo di push: 6

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
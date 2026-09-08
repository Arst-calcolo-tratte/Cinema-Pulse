# Cinema Pulse v3

Web app personale (PWA) per vedere cosa è uscito di recente tra film e serie TV, filtrato per voto, con le locandine vere e l'indicazione di dove si guarda in Italia.

I titoli non sono scritti nel codice: l'app li scarica da **TMDB** e li tiene aggiornati da sola.

## Come funziona il catalogo

All'apertura, e comunque non più di una volta ogni 12 ore, l'app fa sette richieste a TMDB e ricostruisce il catalogo:

| Cosa cerca | Filtro |
|---|---|
| Film usciti negli ultimi 5 mesi | almeno 60 voti, media ≥ 6,5 |
| Serie iniziate negli ultimi 5 mesi | almeno 30 voti, media ≥ 6,8 |
| Migliori film degli ultimi 8 anni | almeno 1200 voti, ordinati per voto |
| Migliori serie degli ultimi 8 anni | almeno 400 voti, ordinate per voto |

Documentari e reality sono esclusi dall'archivio. Il risultato viene salvato nel telefono, così l'app si apre subito anche senza rete.

Le soglie stanno in `app.js`, dentro `buildCatalog()`: se il catalogo ti sembra troppo largo o troppo stretto, si cambiano lì.

Quando apri la scheda di un titolo, l'app fa una richiesta in più e recupera la durata (o il numero di stagioni) e i servizi su cui è disponibile in Italia, divisi tra abbonamento, noleggio e acquisto.

### Il Pulse

È il punteggio dell'app, non un voto ufficiale. Combina il voto medio, quanti l'hanno votato e da quanto tempo il titolo è uscito:

```
pulse = voto × 0,9  +  min(numero_voti / 2500, 1) × 0,7  +  0,4 se uscito da meno di 120 giorni
```

Serve a non far finire in cima un film con media 9 e trenta voti in croce.

## La chiave TMDB

La chiave è gratuita: account su themoviedb.org → Impostazioni → API → richiesta per uso personale. Serve il valore chiamato **API Key**, non l'API Read Access Token (che è molto più lungo).

In questa copia la chiave è scritta in `app.js`, nella costante `DEFAULT_KEY`. Comodo, ma se il repository è pubblico chiunque può leggerla e consumare le tue richieste, che TMDB conta sul tuo account.

Per toglierla: svuota la stringa.

```js
const DEFAULT_KEY = '';
```

L'app continua a funzionare identica, ma la chiave va incollata a mano in Impostazioni sul telefono, una volta per dispositivo. Resta nel browser e non esce mai da lì.

Se in qualsiasi momento vuoi invalidare la chiave attuale, rigenerala dal tuo account TMDB: quella vecchia smette di funzionare subito.

## Cosa è stato corretto rispetto alla v1.2

- **L'orologio era fisso.** `NOW` era una data scritta a mano, quindi "novità degli ultimi 30 giorni", "oggi" e "ieri" non cambiavano mai. Ora si usa l'ora reale.
- **Il catalogo si congelava nel telefono.** Veniva salvato in `localStorage` e riletto all'avvio: dopo la prima interazione l'utente restava bloccato su quella lista per sempre. Ora nel telefono finiscono solo i dati personali; il catalogo si rinfresca.
- **Il service worker bloccava gli aggiornamenti.** Era cache-first su tutto, `index.html` e `app.js` compresi. Ora il codice si prende dalla rete e la cache serve solo da riserva offline; le immagini restano in cache perché non cambiano. Quando esce una versione nuova compare un avviso da toccare per ricaricare.
- **Le locandine non c'erano.** Erano 61 SVG generati col titolo scritto in Arial. Ora arrivano da TMDB insieme ai dati.
- **Il tasto indietro era rotto.** La scheda non entrava nello storico, quindi da Classifica si tornava in Home. Ora la navigazione passa dall'URL e funziona anche lo swipe indietro dell'iPhone.
- **Controlli che non facevano niente.** Lo switch dell'aggiornamento automatico non aveva alcun gestore; il cursore della qualità minima non salvava e non filtrava. Ora funzionano entrambi.
- **La ricerca ricostruiva tutta la pagina a ogni lettera** e rimetteva il focus con un timer, facendo sfarfallare la tastiera. Ora si aggiornano solo i risultati.
- **Disponibilità inventate.** `The Last of Us` era dato su Netflix. Ora la disponibilità arriva da TMDB, oppure sono link di ricerca dichiarati come tali.
- **Grafica rifatta.** Palette calda da sala di proiezione con un solo accento ambra al posto del viola e oro; locandine senza cornici sovrapposte; barra inferiore con icone SVG al posto dei caratteri unicode, che su iOS venivano resi in modo diverso da versione a versione.

## Struttura

```
index.html              guscio della pagina
styles.css              tutto lo stile
app.js                  catalogo, TMDB, viste, navigazione
sw.js                   cache e aggiornamenti
manifest.webmanifest    installazione sul telefono
assets/                 icone
.github/workflows/      pubblicazione automatica
```

## Provarla in locale

```bash
python3 -m http.server 8080
```

Poi apri `http://localhost:8080`. Serve un server: aprendo il file con un doppio clic il service worker non parte.

## Pubblicare su GitHub Pages

1. Carica il contenuto di questa cartella nel repository (i file, non la cartella che li contiene).
2. Il branch deve chiamarsi `main`.
3. **Settings → Pages → Build and deployment → Source**: scegli **GitHub Actions**.
4. Il workflow parte da solo al primo push. Puoi anche lanciarlo a mano da **Actions → Run workflow**.

Il workflow usa `upload-pages-artifact@v5`. Se dovesse fallire con un errore di risoluzione dell'azione, sostituisci con `@v3` e togli la riga `include-hidden-files`.

## Privacy

Lista, visti, preferiti, impostazioni e catalogo scaricato stanno solo nel browser del telefono. Non c'è account, non c'è login, non viene inviato niente da nessuna parte. L'app non ospita né riproduce contenuti: rimanda ai servizi ufficiali.

I dati dei titoli sono di TMDB. L'app non è approvata né certificata da TMDB.

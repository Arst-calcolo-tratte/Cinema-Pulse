# Cinema Pulse v1.1

Web app / PWA privata per scoprire novità streaming, classificare film e serie, cercare nell'archivio, gestire una lista personale e aprire la scheda completa di ogni titolo.

## Cosa è stato corretto in v1.1

- Navigazione inferiore più leggibile su iPhone: icone e testi più grandi, contrasto e area touch migliorati.
- Pulsanti e link dinamici funzionanti anche dopo il rendering di una nuova pagina.
- Pulsante "Torna alla pagina precedente" nella scheda titolo.
- Ricerca senza perdita del focus durante la digitazione.
- Tutte le card sono cliccabili e aprono la scheda completa.
- I pulsanti "Guarda" aprono destinazioni esterne legali/ufficiali o JustWatch per verificare la disponibilità.
- La classifica **Novità** mostra solo titoli aggiunti negli ultimi 30 giorni: non confonde più l'anno di uscita del film con la data di ingresso nel catalogo.
- Aggiunta la modalità **Archivio 5 anni+**, con un catalogo demo ampio e filtri Film / Serie TV.
- Ricerca estesa a tutto l'archivio, non solo alle novità.
- Aggiunto "La mia lista" con tab Da vedere / Visti / Preferiti.
- Aggiunti poster locali demo per evitare una griglia vuota o immagini rotte in assenza di rete.
- PWA migliorata con icone PNG 192/512 e Apple Touch Icon.
- Service worker aggiornato a v2 e pronto a sostituire la cache precedente.

## Struttura

- `index.html` — shell della PWA
- `styles.css` — design system responsive
- `app.js` — navigazione, catalogo demo, ranking, ricerca, lista, preferiti e refresh
- `manifest.webmanifest` — installazione PWA
- `sw.js` — cache/offline base
- `assets/icon.svg` — icona vettoriale
- `assets/icon-192.png` / `icon-512.png` — icone PWA
- `assets/apple-touch-icon.png` — icona iPhone
- `assets/posters/` — poster demo locali

## Dati reali e aggiornamento automatico

La v1.1 è una UI/prototipo funzionale con catalogo demo volutamente ampio. Il pulsante **Aggiorna** simula il controllo e aggiorna il timestamp locale.

Per il prodotto finale, il passo successivo è collegare un backend a fonti/API autorizzate per:

1. nuove aggiunte di Netflix e Prime Video in Italia;
2. disponibilità su altri servizi;
3. rating IMDb e metadati;
4. eventuali punteggi di critica professionale;
5. sincronizzazione automatica e deduplicazione;
6. link ufficiali alle piattaforme legali.

L'app è già strutturata per sostituire `DEMO` con una risposta JSON del backend senza rifare l'interfaccia.

## Avvio locale

Aprire la cartella con un server HTTP, ad esempio:

```bash
python3 -m http.server 8080
```

Poi visitare `http://localhost:8080`.

Per installarla su iPhone serve pubblicarla via HTTPS (GitHub Pages, Cloudflare Pages, Vercel, Netlify o hosting equivalente).

## Privacy

Lista, visti, preferiti e impostazioni vengono salvati in `localStorage` nella versione demo. Non sono presenti account o login.

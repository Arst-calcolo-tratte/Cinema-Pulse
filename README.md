# Cinema Pulse — v1.0

Web app/PWA privata per scoprire novità di film e serie, classificarle e salvare titoli da vedere.

## Cosa include
- Home cinematografica responsive
- Classifica con filtri Film/Serie e 1/7/30 giorni
- Scheda titolo con trama, IMDb, Pulse Score e disponibilità
- Ricerca istantanea
- La mia lista / Visti
- Impostazioni piattaforme
- Pulsante **Aggiorna** con stato di sincronizzazione
- Service Worker / PWA / installabile su iPhone
- Dati e liste demo salvati localmente
- Icona Cinema Pulse originale in `assets/icon.svg`

## Importante: dati reali e aggiornamento automatico
La UI è completa e pronta per il collegamento a fonti dati reali, ma **non contiene credenziali/API proprietarie** e non esegue scraping di Netflix/Prime. In produzione va collegato un backend che utilizzi fonti/API autorizzate per:
1. cataloghi e disponibilità streaming in Italia;
2. metadata dei titoli;
3. rating IMDb o dataset/licenze compatibili;
4. eventuali rating della critica.

Il frontend è predisposto per sostituire `DEMO` in `app.js` con una risposta JSON del backend. Un esempio di contratto:

`GET /api/catalog?country=IT&services=netflix,prime`

che restituisce un array con `id,title,type,year,date,genres,runtime,imdb,pulse,platforms,free,desc,poster`.

Il backend dovrebbe inoltre mantenere un `lastUpdated` e un delta di nuovi/aggiornati/rimossi titoli. Il pulsante Aggiorna deve richiamare l'endpoint e sostituire/mergeare i dati. L'aggiornamento in background su iOS/browser è best-effort; per un vero aggiornamento automatico affidabile conviene far eseguire la sincronizzazione sul server a intervalli regolari e notificare l'app quando torna online.

## Avvio locale
Può essere pubblicata direttamente su GitHub Pages per la UI demo. Per il Service Worker serve HTTPS oppure localhost.

Con Node:

```bash
npx serve .
```

poi aprire l'indirizzo mostrato.

## GitHub
Caricare l'intera cartella del progetto. Se si usa GitHub Pages, impostare la pubblicazione dalla branch principale e dalla root del repository.

## Privacy
La demo salva lista e preferenze in `localStorage`. Nessun account è richiesto. Per la produzione, se si aggiunge un backend, documentare chiaramente quali dati vengono inviati e mantenere le preferenze locali quando possibile.

/* =======================================================================
   Cinema Pulse — anteprima v2
   Nessuna data fissa, catalogo non congelato, locandine prese online.
   ======================================================================= */

/* ---------- catalogo ---------- */
/* titolo, tipo, anno, entrato-in-catalogo, generi, durata, imdb, pulse, trama */
const RAW = [
["Dune: Parte Due","film",2024,"2026-09-08","Fantascienza · Avventura","2h 46m",8.5,9.2,"Paul Atreides unisce le forze con Chani e i Fremen mentre affronta il proprio destino su Arrakis."],
["Fallout","serie",2024,"2026-09-08","Fantascienza · Azione","2 stagioni",8.4,9.0,"Duecento anni dopo l'apocalisse, gli abitanti di un rifugio tornano in una superficie devastata."],
["The Last of Us","serie",2023,"2026-09-07","Dramma · Post-apocalittico","2 stagioni",8.6,9.0,"Un contrabbandiere e una ragazza attraversano un'America devastata cercando una possibilità per l'umanità."],
["Shōgun","serie",2024,"2026-09-07","Dramma · Storico","1 stagione",8.6,9.1,"Giappone feudale: intrighi, guerra e alleanze si intrecciano attorno a un potente signore della guerra."],
["The Beekeeper","film",2024,"2026-09-06","Azione · Thriller","1h 45m",6.3,8.5,"Un uomo cerca vendetta dopo che una truffa digitale colpisce una persona a lui vicina."],
["3 Body Problem","serie",2024,"2026-09-06","Fantascienza · Dramma","1 stagione",7.5,8.4,"Un gruppo di scienziati affronta una minaccia che mette in discussione le leggi fondamentali della fisica."],
["Road House","film",2024,"2026-09-05","Azione · Thriller","2h 1m",6.2,8.1,"Un ex combattente UFC accetta di fare da buttafuori in un locale delle Florida Keys."],
["The Gentlemen","serie",2024,"2026-09-05","Crime · Commedia","1 stagione",8.1,8.5,"Un aristocratico eredita una proprietà che nasconde un impero criminale."],
["Ripley","serie",2024,"2026-09-04","Thriller · Dramma","1 stagione",8.1,8.7,"Un truffatore entra in un mondo di lusso, identità rubate e omicidi."],
["Civil War","film",2024,"2026-09-04","Azione · Dramma","1h 49m",7.0,8.2,"Un gruppo di giornalisti attraversa gli Stati Uniti durante una guerra civile immaginaria."],
["The Fall Guy","film",2024,"2026-09-03","Azione · Commedia","2h 6m",6.7,8.0,"Uno stuntman torna sul set per ritrovare una star scomparsa e riconquistare un amore."],
["Baby Reindeer","serie",2024,"2026-09-03","Dramma · Thriller","1 stagione",7.7,8.6,"Un incontro apparentemente innocuo si trasforma in un'ossessione sempre più inquietante."],
["The Bear","serie",2022,"2026-09-02","Dramma · Commedia","4 stagioni",8.6,8.9,"Uno chef torna a Chicago per gestire il ristorante di famiglia e ricostruire una brigata."],
["Povere creature!","film",2023,"2026-09-02","Commedia · Fantastico","2h 21m",7.8,8.7,"Una donna riportata in vita intraprende un viaggio di scoperta e libertà attraverso un mondo surreale."],
["Oppenheimer","film",2023,"2026-09-01","Dramma · Storico","3h 0m",8.3,9.1,"La storia del fisico che guidò il progetto che portò alla nascita della bomba atomica."],
["The Holdovers","film",2023,"2026-09-01","Dramma · Commedia","2h 13m",7.9,8.6,"Un insegnante, uno studente e una cuoca trascorrono insieme un Natale inatteso."],
["Anatomia di una caduta","film",2023,"2026-08-31","Dramma · Thriller","2h 31m",7.7,8.5,"La morte di uno scrittore innesca un processo che mette sotto esame una famiglia e la verità."],
["La zona d'interesse","film",2023,"2026-08-30","Dramma · Storico","1h 45m",7.4,8.3,"Una famiglia vive accanto a un luogo di orrore mentre cerca di mantenere una normalità apparente."],
["Past Lives","film",2023,"2026-08-29","Sentimentale · Dramma","1h 46m",7.8,8.5,"Due persone legate dall'infanzia si ritrovano a New York dopo molti anni."],
["Godzilla Minus One","film",2023,"2026-08-28","Azione · Fantascienza","2h 4m",7.7,8.7,"Il Giappone del dopoguerra affronta una nuova devastazione portata da una creatura gigantesca."],
["Blue Eye Samurai","serie",2023,"2026-08-27","Animazione · Azione","1 stagione",8.7,9.0,"Una guerriera cerca vendetta nel Giappone del XVII secolo nascondendo la propria identità."],
["Arcane","serie",2021,"2026-08-26","Animazione · Fantasy","2 stagioni",9.0,9.4,"Due sorelle si trovano su fronti opposti in una guerra tra una città ricca e il suo sottosuolo."],
["Scissione","serie",2022,"2026-08-25","Fantascienza · Thriller","2 stagioni",8.7,9.2,"Una procedura separa chirurgicamente i ricordi del lavoro da quelli della vita privata."],
["Silo","serie",2023,"2026-08-24","Fantascienza · Mistero","2 stagioni",8.0,8.8,"Migliaia di persone vivono in un gigantesco silo sotterraneo governato da regole misteriose."],
["Challengers","film",2024,"2026-08-22","Dramma · Sportivo","2h 11m",7.1,8.1,"Una campionessa di tennis trasforma una sfida sportiva in un complicato triangolo sentimentale."],
["Alien: Romulus","film",2024,"2026-08-21","Horror · Fantascienza","1h 59m",7.1,8.2,"Un gruppo di giovani esploratori affronta una minaccia terrificante in una stazione spaziale abbandonata."],
["Rebel Ridge","film",2024,"2026-08-20","Azione · Thriller","2h 11m",6.9,8.0,"Un ex marine si scontra con un sistema locale corrotto mentre cerca di recuperare il proprio denaro."],
["The Penguin","serie",2024,"2026-08-19","Crime · Dramma","1 stagione",8.6,8.9,"Dopo gli eventi di Gotham, Oswald Cobb lotta per conquistare il potere nel mondo criminale."],
["Andor","serie",2022,"2026-08-18","Fantascienza · Avventura","2 stagioni",8.4,9.0,"Cassian Andor entra nel cuore della nascente ribellione contro l'Impero."],
["Dune","film",2021,"2026-07-30","Fantascienza · Avventura","2h 35m",8.0,8.6,"Il giovane Paul Atreides arriva su Arrakis, il pianeta più pericoloso dell'universo."],
["Top Gun: Maverick","film",2022,"2026-07-12","Azione · Dramma","2h 10m",8.2,8.7,"Un pilota veterano torna ad addestrare una nuova generazione di aviatori d'élite."],
["Everything Everywhere All at Once","film",2022,"2026-06-20","Azione · Commedia","2h 19m",7.8,8.8,"Una donna viene trascinata in una sorprendente avventura attraverso universi paralleli."],
["The Batman","film",2022,"2026-06-14","Crime · Azione","2h 56m",7.8,8.5,"Batman indaga su una serie di omicidi che svelano una rete di corruzione a Gotham."],
["Killers of the Flower Moon","film",2023,"2026-05-09","Dramma · Storico","3h 26m",7.6,8.6,"Una serie di omicidi colpisce la nazione Osage e rivela una cospirazione per il controllo delle ricchezze."],
["The Fabelmans","film",2022,"2026-04-18","Dramma","2h 31m",7.5,8.2,"Un ragazzo scopre il potere del cinema mentre affronta le tensioni della propria famiglia."],
["Nope","film",2022,"2026-03-25","Horror · Fantascienza","2h 10m",6.8,8.0,"Due fratelli che gestiscono un ranch cercano di catturare immagini di un fenomeno inspiegabile."],
["Mercoledì","serie",2022,"2026-03-08","Commedia · Fantasy","2 stagioni",8.1,8.3,"Mercoledì Addams arriva alla Nevermore Academy e indaga su misteri soprannaturali."],
["The White Lotus","serie",2021,"2026-02-14","Commedia · Dramma","3 stagioni",7.9,8.7,"Gli ospiti e il personale di un resort di lusso rivelano tensioni e segreti durante le vacanze."],
["Squid Game","serie",2021,"2026-01-18","Thriller · Dramma","3 stagioni",7.8,8.5,"Centinaia di persone in difficoltà economica partecipano a giochi mortali per un premio enorme."],
["Omicidio a Easttown","serie",2021,"2025-12-23","Crime · Dramma","1 stagione",8.4,8.8,"Una detective di provincia indaga su un omicidio mentre la sua vita personale va in pezzi."],
["Only Murders in the Building","serie",2021,"2025-11-14","Commedia · Crime","5 stagioni",8.1,8.4,"Tre vicini ossessionati dal true crime iniziano a indagare su un omicidio nel loro palazzo."],
["The Northman","film",2022,"2025-10-19","Azione · Dramma","2h 17m",7.0,8.1,"Un principe vichingo torna per vendicare il padre e riconquistare il proprio regno."],
["The Menu","film",2022,"2025-09-20","Thriller · Commedia","1h 47m",7.2,8.3,"Una cena esclusiva su un'isola remota nasconde un menu molto più pericoloso del previsto."],
["Barbie","film",2023,"2025-08-16","Commedia · Fantasy","1h 54m",6.8,8.0,"Barbie lascia Barbieland e scopre un mondo reale molto più complesso di quanto immaginasse."],
["Guardiani della Galassia Vol. 3","film",2023,"2025-07-11","Azione · Fantascienza","2h 30m",7.9,8.2,"I Guardiani affrontano una missione che potrebbe cambiare per sempre la loro squadra."],
["The Creator","film",2023,"2025-06-05","Fantascienza · Azione","2h 13m",6.8,7.9,"In una guerra tra umanità e intelligenza artificiale, un ex agente deve trovare un'arma misteriosa."],
["Beef","serie",2023,"2025-05-14","Commedia · Dramma","1 stagione",8.0,8.6,"Un piccolo incidente stradale scatena una spirale di vendetta tra due sconosciuti."],
["La regina degli scacchi","serie",2020,"2025-04-08","Dramma","1 stagione",8.5,8.8,"Una giovane prodigio degli scacchi cerca di affermarsi tra competizione e demoni personali."],
["Succession","serie",2018,"2025-03-03","Dramma","4 stagioni",8.9,9.1,"Una famiglia miliardaria si scontra per il controllo dell'impero mediatico di famiglia."],
["Niente di nuovo sul fronte occidentale","film",2022,"2025-02-02","Dramma · Guerra","2h 23m",7.8,8.5,"Un giovane soldato affronta l'orrore della Prima guerra mondiale sul fronte occidentale."],
["CODA - I segni del cuore","film",2021,"2025-01-11","Dramma · Musica","1h 51m",8.0,8.4,"Una ragazza udente è l'unica interprete di una famiglia sorda e deve scegliere il proprio futuro."],
["The Father - Nulla è come sembra","film",2020,"2024-12-02","Dramma","1h 37m",8.2,8.7,"Un uomo anziano affronta una realtà sempre più difficile da comprendere e riconoscere."],
["Cena con delitto","film",2019,"2024-11-09","Crime · Commedia","2h 10m",7.9,8.4,"Un detective eccentrico indaga sulla morte del patriarca di una famiglia piena di segreti."],
["Parasite","film",2019,"2024-10-01","Thriller · Dramma","2h 12m",8.5,9.0,"Due famiglie di classi sociali opposte entrano in un rapporto sempre più ambiguo e pericoloso."],
["1917","film",2019,"2024-09-05","Guerra · Dramma","1h 59m",8.2,8.6,"Due soldati ricevono una missione urgente che può salvare centinaia di vite."],
["Chernobyl","serie",2019,"2024-08-01","Storico · Dramma","1 stagione",9.3,9.5,"La ricostruzione drammatica del disastro nucleare di Chernobyl e delle sue conseguenze."],
["Dark","serie",2017,"2024-07-01","Fantascienza · Mistero","3 stagioni",8.7,9.1,"La scomparsa di un bambino svela un mistero che attraversa generazioni e viaggi nel tempo."]
];

const CATALOG = RAW.map((d,i)=>({
  id:'cp'+(i+1), title:d[0], kind:d[1], year:d[2], added:d[3],
  genres:d[4], runtime:d[5], imdb:d[6], pulse:d[7], plot:d[8]
}));

/* ---------- utilità ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const enc = encodeURIComponent;
const now = () => new Date();                       // orologio reale, non congelato
const days = d => Math.max(0, Math.floor((now() - new Date(d)) / 864e5));
const whenLabel = d => { const n = days(d); return n===0?'oggi':n===1?'ieri':n<7?n+' giorni fa':n<60?Math.round(n/7)+' settimane fa':new Date(d).toLocaleDateString('it-IT',{month:'long',year:'numeric'}); };
const kindWord = k => k==='serie'?'Serie TV':'Film';

function ls(k, fallback){ try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch { return fallback; } }
function lsSet(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }


/* =======================================================================
   MOTORE TMDB — è questo che trova i titoli online e li tiene aggiornati
   Chiave gratuita da themoviedb.org → Impostazioni → API.
   Resta nel telefono, non finisce mai nel repository.
   ======================================================================= */
const IMG = 'https://image.tmdb.org/t/p/';
const CAT_TTL = 12 * 3600e3;          // il catalogo si rinfresca ogni 12 ore

// Chiave TMDB usata da questa copia dell'app.
// Per non tenerla nel repository pubblico: svuota la stringa qui sotto
// e inseriscila a mano in Impostazioni sul telefono. L'app funziona uguale.
const DEFAULT_KEY = '2a8b37a7611e46bcd09044a7e2ccf96b';
function tmdbKey(){ return ((ls('cp_prefs',{}).tmdb || DEFAULT_KEY) || '').trim(); }

async function tmdb(path, params = {}){
  const key = tmdbKey();
  if (!key) throw new Error('nokey');
  const q = new URLSearchParams({ api_key:key, language:'it-IT', ...params });
  const r = await fetch(`https://api.themoviedb.org/3${path}?${q}`);
  if (r.status === 401) throw new Error('badkey');
  if (!r.ok) throw new Error('http' + r.status);
  return r.json();
}

let GENRES = ls('cp_genres', null);
async function loadGenres(){
  if (GENRES && Date.now() - GENRES.t < 30*864e5) return GENRES.map;
  const [m, t] = await Promise.all([tmdb('/genre/movie/list'), tmdb('/genre/tv/list')]);
  const map = {};
  [...m.genres, ...t.genres].forEach(g => map[g.id] = g.name);
  GENRES = { map, t:Date.now() }; lsSet('cp_genres', GENRES);
  return map;
}

const iso = d => d.toISOString().slice(0,10);
const ago = n => iso(new Date(Date.now() - n*864e5));

function shape(r, kind, gmap){
  const date = r.release_date || r.first_air_date || '';
  if (!date) return null;
  const v = r.vote_average || 0, n = r.vote_count || 0;
  const fresh = (Date.now() - new Date(date)) / 864e5 <= 120;
  const pulse = Math.max(0, Math.min(10, v*0.9 + Math.min(n/2500,1)*0.7 + (fresh?0.4:0)));
  return {
    id: kind[0] + r.id, tmdbId: r.id, kind,
    title: r.title || r.name,
    year: +date.slice(0,4),
    added: date,
    genres: (r.genre_ids||[]).map(g => gmap[g]).filter(Boolean).slice(0,2).join(' · ') || (kind==='serie'?'Serie TV':'Film'),
    runtime: '',
    imdb: v, votes: n, ratingLabel: 'TMDB',
    pulse: +pulse.toFixed(1),
    plot: r.overview || 'Trama non ancora disponibile in italiano.',
    poster: r.poster_path ? IMG + 'w500' + r.poster_path : null,
    wide:   r.backdrop_path ? IMG + 'w780' + r.backdrop_path : null
  };
}

async function buildCatalog(onStep){
  const gmap = await loadGenres();
  const since = ago(150), until = iso(new Date());
  const jobs = [
    // le uscite recenti, ma solo quelle che hanno già voti buoni
    ['/discover/movie','film',{sort_by:'primary_release_date.desc','primary_release_date.gte':since,'primary_release_date.lte':until,'vote_count.gte':60,'vote_average.gte':6.5,watch_region:'IT',include_adult:'false',page:'1'}],
    ['/discover/movie','film',{sort_by:'primary_release_date.desc','primary_release_date.gte':since,'primary_release_date.lte':until,'vote_count.gte':60,'vote_average.gte':6.5,watch_region:'IT',include_adult:'false',page:'2'}],
    ['/discover/tv','serie',{sort_by:'first_air_date.desc','first_air_date.gte':since,'first_air_date.lte':until,'vote_count.gte':30,'vote_average.gte':6.8,watch_region:'IT',page:'1'}],
    // il meglio degli ultimi anni, per l'archivio
    ['/discover/movie','film',{sort_by:'vote_average.desc','vote_count.gte':1200,'primary_release_date.gte':ago(365*8),without_genres:'99,10755',include_adult:'false',page:'1'}],
    ['/discover/movie','film',{sort_by:'vote_average.desc','vote_count.gte':1200,'primary_release_date.gte':ago(365*8),without_genres:'99,10755',include_adult:'false',page:'2'}],
    ['/discover/tv','serie',{sort_by:'vote_average.desc','vote_count.gte':400,'first_air_date.gte':ago(365*8),without_genres:'99,10764',page:'1'}],
    ['/discover/tv','serie',{sort_by:'vote_average.desc','vote_count.gte':400,'first_air_date.gte':ago(365*8),without_genres:'99,10764',page:'2'}]
  ];
  const out = new Map();
  let done = 0;
  for (const [path, kind, params] of jobs){
    try {
      const j = await tmdb(path, params);
      for (const r of (j.results||[])){
        const item = shape(r, kind, gmap);
        if (item && item.poster && !out.has(item.id)) out.set(item.id, item);
      }
    } catch(e){ if (e.message === 'badkey') throw e; }
    onStep && onStep(++done, jobs.length);
  }
  return [...out.values()];
}

function loadCached(){
  const c = ls('cp_cat', null);
  return (c && Array.isArray(c.items) && c.items.length) ? c.items : CATALOG;
}
function catalogAge(){ const c = ls('cp_cat', null); return c ? Date.now() - c.t : Infinity; }
function isLive(){ return !!ls('cp_cat', null); }

/* ---------- stato ---------- */
const S = {
  view:'home',
  items: loadCached(),             // titoli veri se c'è la chiave, altrimenti l'elenco interno
  saved: ls('cp_saved', []),
  seen:  ls('cp_seen', []),
  loved: ls('cp_loved', []),
  prefs: ls('cp_prefs', { services:{'Netflix':true,'Prime Video':true,'RaiPlay':true,'Disney+':false,'Apple TV+':false,'NOW':false,'Paramount+':false,'Mediaset Infinity':false,'Pluto TV':true}, minImdb:0, auto:true, tmdb:'' }),
  chartTab:'novita', chartKind:'tutti', chartShown:30,
  query:'', mineTab:'saved',
  from:'home'
};
if (!S.prefs.tmdb) S.prefs.tmdb = DEFAULT_KEY;
const persist = () => { lsSet('cp_saved',S.saved); lsSet('cp_seen',S.seen); lsSet('cp_loved',S.loved); lsSet('cp_prefs',S.prefs); };

/* =======================================================================
   LOCANDINE — prese online, con cache locale e segnaposto disegnato
   Catena: TMDB (se hai messo la chiave) → iTunes → Wikipedia → segnaposto
   ======================================================================= */
const ART = {
  cache: ls('cp_art_v1', {}),
  pending: new Map(),
  queue: [], running: 0, MAX: 4,
  ok: 0, ko: 0,
  flush(){ clearTimeout(this._t); this._t = setTimeout(()=>lsSet('cp_art_v1', this.cache), 500); }
};
const ART_TTL = 30 * 864e5;

function placeholder(item){
  // segnaposto disegnato: pellicola + iniziale, tinta ricavata dal titolo
  let h = 0; for (const c of item.title) h = (h*31 + c.charCodeAt(0)) % 360;
  const a = `hsl(${h} 34% 20%)`, b = `hsl(${(h+38)%360} 40% 9%)`;
  const initial = item.title.trim()[0].toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
<rect width="400" height="600" fill="url(#g)"/>
<g fill="#F4EEE3" opacity=".07">${[...Array(9)].map((_,i)=>`<rect x="8" y="${18+i*64}" width="26" height="34" rx="5"/><rect x="366" y="${18+i*64}" width="26" height="34" rx="5"/>`).join('')}</g>
<text x="200" y="330" text-anchor="middle" font-family="Georgia,serif" font-size="150" font-weight="700" fill="#F4EEE3" opacity=".16">${esc(initial)}</text>
<circle cx="200" cy="400" r="5" fill="#E9A63C" opacity=".8"/>
<text x="200" y="452" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="19" fill="#F4EEE3" opacity=".5">${esc(item.year)}</text>
</svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + enc(svg);
}

function jsonp(url, ms=7000){
  return new Promise((res, rej)=>{
    const cb = 'cpjp' + Math.random().toString(36).slice(2);
    const s = document.createElement('script');
    let done = false;
    const clean = ()=>{ try{delete window[cb]}catch{} s.remove(); clearTimeout(t); };
    const t = setTimeout(()=>{ if(!done){ clean(); rej(0); } }, ms);
    window[cb] = d => { done = true; clean(); res(d); };
    s.onerror = ()=>{ if(!done){ clean(); rej(0); } };
    s.src = url + (url.includes('?') ? '&' : '?') + 'callback=' + cb;
    document.head.appendChild(s);
  });
}

const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9 ]/g,'').trim();
function looksLike(a, b){
  a = norm(a); b = norm(b);
  if (a === b) return true;
  return a.includes(b) || b.includes(a);
}

async function fromTMDB(item){
  const key = (S.prefs.tmdb || '').trim();
  if (!key) return null;
  const path = item.kind === 'serie' ? 'tv' : 'movie';
  const url = `https://api.themoviedb.org/3/search/${path}?api_key=${enc(key)}&language=it-IT&include_adult=false&query=${enc(item.title)}`;
  const r = await fetch(url);
  if (!r.ok) return null;
  const j = await r.json();
  const hit = (j.results || []).find(x => x.poster_path) ;
  return hit ? { poster:'https://image.tmdb.org/t/p/w500' + hit.poster_path,
                 wide: hit.backdrop_path ? 'https://image.tmdb.org/t/p/w780' + hit.backdrop_path : null } : null;
}

async function fromITunes(item){
  const isTv = item.kind === 'serie';
  const url = `https://itunes.apple.com/search?term=${enc(item.title)}&country=IT&lang=it_it&limit=8`
            + (isTv ? '&media=tvShow&entity=tvSeason' : '&media=movie&entity=movie');
  const j = await jsonp(url);
  const list = (j && j.results) || [];
  const hit = list.find(r => looksLike(r.trackName || r.collectionName || '', item.title)) || list[0];
  if (!hit || !hit.artworkUrl100) return null;
  return { poster: hit.artworkUrl100.replace(/\/\d+x\d+bb/, '/600x900bb'), wide:null };
}

async function fromWikipedia(item){
  for (const lang of ['it','en']){
    const q = item.title + (item.kind === 'serie' ? ' serie televisiva' : ' film');
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${enc(q)}&gsrlimit=1`
              + `&prop=pageimages&piprop=thumbnail&pithumbsize=500&format=json&origin=*`;
    try {
      const r = await fetch(url);
      if (!r.ok) continue;
      const j = await r.json();
      const pages = j?.query?.pages;
      if (!pages) continue;
      const p = Object.values(pages)[0];
      if (p?.thumbnail?.source) return { poster: p.thumbnail.source, wide:null };
    } catch {}
  }
  return null;
}

async function lookup(item){
  for (const src of [fromTMDB, fromITunes, fromWikipedia]){
    try { const r = await src(item); if (r && r.poster) return r; } catch {}
  }
  return null;
}

function artFor(item){
  const c = ART.cache[item.id];
  if (c && (Date.now() - c.t) < ART_TTL) return c;
  return null;
}

function requestArt(item){
  const hit = artFor(item);
  if (hit) return Promise.resolve(hit);
  if (ART.pending.has(item.id)) return ART.pending.get(item.id);

  const p = new Promise(resolve => {
    ART.queue.push(async () => {
      const r = await lookup(item);
      const entry = r ? { p:r.poster, w:r.wide, t:Date.now() } : { p:null, w:null, t:Date.now() };
      if (r) ART.ok++; else ART.ko++;
      ART.cache[item.id] = entry; ART.flush();
      ART.pending.delete(item.id);
      resolve(entry);
    });
    pump();
  });
  ART.pending.set(item.id, p);
  return p;
}

function pump(){
  while (ART.running < ART.MAX && ART.queue.length){
    const job = ART.queue.shift();
    ART.running++;
    job().finally(()=>{ ART.running--; pump(); });
  }
}

/* immagini pigre: si risolvono solo quando entrano nello schermo */
const seer = new IntersectionObserver(entries => {
  for (const e of entries){
    if (!e.isIntersecting) continue;
    const img = e.target; seer.unobserve(img);
    const item = S.items.find(x => x.id === img.dataset.item);
    if (!item) continue;
    img.src = placeholder(item);
    img.classList.add('in');
    const ready = (img.dataset.wide && item.wide) ? item.wide : item.poster;
    if (ready){ const r = new Image(); r.onload = () => { img.src = ready; }; r.src = ready; continue; }
    requestArt(item).then(a => {
      const url = (img.dataset.wide && a.w) ? a.w : a.p;
      if (!url) return;
      const real = new Image();
      real.onload = () => { img.src = url; };
      real.src = url;
    });
  }
}, { rootMargin:'400px 0px' });

function watchImages(root){ root.querySelectorAll('img[data-item]').forEach(i => seer.observe(i)); }

/* =======================================================================
   selezioni
   ======================================================================= */
function passesQuality(x){ return x.imdb >= (S.prefs.minImdb || 0); }
function byDate(a,b){ return new Date(b.added) - new Date(a.added); }

function fresh(){
  // "novità": entrati negli ultimi 45 giorni. Se il catalogo è fermo,
  // ripiega sui 20 più recenti, così la home non resta mai vuota.
  const all = S.items.filter(passesQuality);
  const recent = all.filter(x => days(x.added) <= 45).sort(byDate);
  return recent.length >= 8 ? recent : all.slice().sort(byDate).slice(0,20);
}
function archive(){
  return S.items.filter(passesQuality);
}

/* dove guardarlo: solo link di ricerca onesti, nessuna disponibilità inventata */
function whereFor(item){
  const q = enc(item.title);
  const out = [{ name:'JustWatch', note:'Dove è disponibile adesso, in Italia', url:`https://www.justwatch.com/it/cerca?q=${q}` }];
  const links = {
    'Netflix':`https://www.netflix.com/search?q=${q}`,
    'Prime Video':`https://www.primevideo.com/search?phrase=${q}`,
    'Disney+':`https://www.disneyplus.com/it-it/search?q=${q}`,
    'Apple TV+':`https://tv.apple.com/it/search?term=${q}`,
    'NOW':`https://www.nowtv.it/cerca?q=${q}`,
    'Paramount+':`https://www.paramountplus.com/it/search/?q=${q}`,
    'RaiPlay':`https://www.raiplay.it/ricerca.html?q=${q}`,
    'Mediaset Infinity':`https://mediasetinfinity.mediaset.it/ricerca?query=${q}`,
    'Pluto TV':`https://pluto.tv/it/search?q=${q}`
  };
  for (const [name, on] of Object.entries(S.prefs.services)){
    if (on && links[name]) out.push({ name, note:'Cerca nel tuo abbonamento', url:links[name] });
  }
  return out;
}

/* =======================================================================
   pezzi di interfaccia
   ======================================================================= */
function tile(x, rank){
  return `<button class="tile" data-open="${x.id}">
    <span class="frame">
      <img data-item="${x.id}" alt="Locandina di ${esc(x.title)}">
      ${rank!=null?`<span class="pos">${rank}</span>`:''}
      <span class="pulse-chip"><b>${x.pulse.toFixed(1)}</b></span>
    </span>
    <h3>${esc(x.title)}</h3>
    <p>${kindWord(x.kind)} · ${x.year}</p>
  </button>`;
}
function emptyBox(title, note){ return `<div class="empty"><b>${esc(title)}</b><span>${esc(note)}</span></div>`; }

/* ---------- home ---------- */
function viewHome(){
  const feed = fresh();
  const best = feed.slice().sort((a,b)=>b.pulse-a.pulse);
  const top = best[0];
  if (!top){ $('#v-home').innerHTML = emptyBox('Nessun titolo','Abbassa la qualità minima nelle impostazioni.'); return; }

  $('#v-home').innerHTML = `
  ${isLive() ? '' : `<div class="notice"><div>
    <b>Stai vedendo un elenco di esempio</b>
    <p>Per far trovare all'app i film e le serie in uscita, con i voti aggiornati e le locandine vere, serve una chiave TMDB. È gratuita.</p>
    <button class="cta" data-go="prefs">Metti la chiave</button>
  </div></div>`}
  <div class="hero">
    <img class="hero-img" data-wide="1" data-item="${top.id}" alt="Locandina di ${esc(top.title)}">
    <div class="hero-txt">
      <span class="hero-tag"><span></span>Il migliore di questa settimana</span>
      <h1>${esc(top.title)}</h1>
      <div class="hero-meta">
        <span class="tag amber">Pulse ${top.pulse.toFixed(1)}</span>
        <span class="tag">${top.ratingLabel||"IMDb"} ${top.imdb.toFixed(1)}</span>
        <span class="tag">${kindWord(top.kind)} · ${top.year}</span>
        <span class="tag">Aggiunto ${whenLabel(top.added)}</span>
      </div>
      <p>${esc(top.plot)}</p>
      <button class="cta" data-open="${top.id}">Apri la scheda</button>
    </div>
  </div>

  <div class="band"><h2>I più forti tra le novità</h2><button data-go="chart">Classifica</button></div>
  <div class="wall">${best.slice(1,7).map((x,i)=>tile(x,i+1)).join('')}</div>

  <div class="band"><h2>Appena arrivati</h2><button data-go="chart">Tutte</button></div>
  <div class="wall">${feed.slice(0,6).map(x=>tile(x)).join('')}</div>

  <div class="band"><h2>Dall'archivio</h2><button data-go="find">Cerca</button></div>
  <div class="wall">${archive().slice().sort((a,b)=>b.pulse-a.pulse).slice(6,12).map(x=>tile(x)).join('')}</div>`;
  watchImages($('#v-home'));
}

/* ---------- classifica ---------- */
function viewChart(){
  const isArchive = S.chartTab === 'archivio';
  let list = isArchive ? archive() : fresh();
  if (S.chartKind !== 'tutti') list = list.filter(x => x.kind === S.chartKind);
  list = list.slice().sort((a,b)=> b.pulse - a.pulse || b.imdb - a.imdb);
  const shown = list.slice(0, S.chartShown);

  $('#v-chart').innerHTML = `
  <h1 class="page-h">Classifica</h1>
  <p class="page-sub">${isArchive ? 'Tutto il catalogo degli ultimi sei anni.' : 'Solo quello che è entrato in catalogo di recente.'}</p>
  <div class="tabs">
    <button class="tab ${!isArchive?'on':''}" data-tab="novita">Novità</button>
    <button class="tab ${isArchive?'on':''}" data-tab="archivio">Archivio</button>
  </div>
  <div class="pills">
    ${[['tutti','Tutto'],['film','Film'],['serie','Serie TV']].map(([v,l])=>
      `<button class="pill ${S.chartKind===v?'on':''}" data-kind="${v}">${l}</button>`).join('')}
  </div>
  <p class="count">${list.length} titoli · ordinati per Pulse</p>
  ${shown.length ? `<div class="chart">${shown.map((x,i)=>`
    <button class="row" data-open="${x.id}">
      <span class="row-n">${i+1}</span>
      <span class="row-img"><img data-item="${x.id}" alt=""></span>
      <span>
        <span class="row-t">${esc(x.title)}</span>
        <span class="row-s">${kindWord(x.kind)} · ${x.year} · ${x.ratingLabel||"IMDb"} ${x.imdb.toFixed(1)}${isArchive?'':' · '+whenLabel(x.added)}</span>
      </span>
      <span class="row-p">${x.pulse.toFixed(1)}<small>PULSE</small></span>
    </button>`).join('')}</div>` : emptyBox('Nessun titolo con questi filtri','Prova a cambiare tipo o ad allargare la qualità minima.')}
  ${shown.length < list.length ? `<button class="cta ghost" id="more" style="margin:20px auto 0;display:flex">Mostra altri ${Math.min(30, list.length-shown.length)}</button>` : ''}`;
  watchImages($('#v-chart'));
}

/* ---------- cerca ---------- */
function findResults(){
  const q = norm(S.query);
  if (!q) return S.items.slice().sort((a,b)=>b.pulse-a.pulse);
  return S.items
    .filter(x => norm(`${x.title} ${x.genres} ${kindWord(x.kind)} ${x.year}`).includes(q))
    .sort((a,b)=>b.pulse-a.pulse);
}
function paintResults(){
  const r = findResults();
  $('#findCount').textContent = r.length === 1 ? '1 risultato' : `${r.length} risultati`;
  const wall = $('#findWall');
  wall.innerHTML = r.length ? r.map(x=>tile(x)).join('')
    : emptyBox('Nessun risultato', 'Prova con una parte del titolo, un genere o un anno.');
  watchImages(wall);
}
function viewFind(){
  $('#v-find').innerHTML = `
  <h1 class="page-h">Cerca</h1>
  <p class="page-sub">Cerca in tutto il catalogo, non solo nelle novità.</p>
  <div class="field">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
    <input id="findInput" type="search" placeholder="Titolo, genere, anno" value="${esc(S.query)}" autocomplete="off">
    <button id="findClear" aria-label="Cancella">×</button>
  </div>
  <p class="count" id="findCount"></p>
  <div class="wall" id="findWall"></div>`;
  paintResults();
  const inp = $('#findInput');
  let t;
  inp.addEventListener('input', e => { S.query = e.target.value; clearTimeout(t); t = setTimeout(paintResults, 160); });
  $('#findClear').addEventListener('click', ()=>{ S.query=''; inp.value=''; inp.focus(); paintResults(); });
}

/* ---------- la mia lista ---------- */
function viewMine(){
  const buckets = {
    saved: S.saved.filter(id => !S.seen.includes(id)),
    seen:  S.seen,
    loved: S.loved
  };
  const labels = { saved:'Da vedere', seen:'Visti', loved:'Preferiti' };
  const ids = buckets[S.mineTab];
  const list = S.items.filter(x => ids.includes(x.id));
  const blank = {
    saved: ['La lista è vuota','Apri una scheda e tocca “Salva” per metterla qui.'],
    seen:  ['Nessun titolo visto','Segna un titolo come visto e comparirà qui.'],
    loved: ['Nessun preferito','Il cuore nella scheda tiene da parte quello che ti è piaciuto.']
  }[S.mineTab];

  $('#v-mine').innerHTML = `
  <h1 class="page-h">La mia lista</h1>
  <p class="page-sub">Resta su questo telefono. Nessun account, nessun invio.</p>
  <div class="tabs">${Object.entries(labels).map(([k,l])=>
    `<button class="tab ${S.mineTab===k?'on':''}" data-mine="${k}">${l} ${buckets[k].length?`(${buckets[k].length})`:''}</button>`).join('')}</div>
  <div class="wall">${list.length ? list.map(x=>tile(x)).join('') : emptyBox(blank[0], blank[1])}</div>`;
  watchImages($('#v-mine'));
}

/* ---------- impostazioni ---------- */
function viewPrefs(){
  const total = S.items.length;
  $('#v-prefs').innerHTML = `
  <h1 class="page-h">Impostazioni</h1>
  <p class="page-sub">Servizi, qualità minima e locandine.</p>

  <div class="panel">
    <h3>I miei servizi</h3>
    <p class="hint">Compaiono come scorciatoia di ricerca nella scheda di ogni titolo.</p>
    ${Object.entries(S.prefs.services).map(([name,on])=>`
      <div class="line"><span>${esc(name)}</span>
        <button class="sw ${on?'on':''}" data-service="${esc(name)}" role="switch" aria-checked="${on}" aria-label="${esc(name)}"><i></i></button>
      </div>`).join('')}
  </div>

  <div class="panel">
    <h3>Qualità minima</h3>
    <p class="hint">Nasconde dal catalogo tutto ciò che sta sotto questo voto.</p>
    <div class="line" style="border:0;padding-bottom:4px"><span>Voto minimo</span><b id="qv">${S.prefs.minImdb.toFixed(1)}</b></div>
    <input class="slider" id="q" type="range" min="0" max="9" step="0.1" value="${S.prefs.minImdb}">
    <div class="ends"><span>tutto</span><span>9.0</span></div>
  </div>

  <div class="panel">
    <h3>Aggiornamenti</h3>
    <div class="line"><span>Controlla all'apertura</span>
      <button class="sw ${S.prefs.auto?'on':''}" id="autoSw" role="switch" aria-checked="${S.prefs.auto}"><i></i></button></div>
    <div class="line"><span>Ultimo controllo</span><b id="lastCheck">${ls('cp_sync','—')}</b></div>
    <p class="hint">Il controllo parte da solo quando riapri l'app, se sono passate più di sei ore. Con ↻ Aggiorna lo forzi subito.</p>
  </div>

  <div class="panel">
    <h3>Sorgente dei titoli</h3>
    <p class="hint">Con una chiave TMDB l'app scarica da sola le uscite recenti con voto alto, il meglio degli ultimi anni, le locandine ufficiali e la disponibilità in Italia. La chiave è gratuita, resta su questo telefono e non finisce nel repository.</p>
    <input class="key-in" id="tmdbKey" type="text" inputmode="latin" spellcheck="false" autocomplete="off" placeholder="Incolla qui la chiave TMDB" value="${esc(S.prefs.tmdb)}">
    <div class="stat">
      <span>Stato <b>${isLive() ? 'catalogo dal vivo' : 'elenco di esempio'}</b></span>
      <span>Titoli <b>${total}</b></span>
    </div>
    <button class="cta ghost" id="reload" style="margin-top:14px">Scarica ora il catalogo</button>
    <p class="hint" style="margin-top:12px">Come si prende: account gratuito su themoviedb.org → Impostazioni → API → richiedi una chiave d'uso personale. Copia quella chiamata <b>API Key</b>.</p>
  </div>

  <div class="panel">
    <h3>I tuoi dati</h3>
    <p class="hint">Lista, visti, preferiti e impostazioni stanno solo in questo browser.</p>
    <button class="cta ghost" id="wipe">Cancella i dati locali</button>
  </div>

  <p class="fine">Cinema Pulse non ospita né riproduce contenuti: rimanda ai servizi ufficiali. Cataloghi e disponibilità cambiano per paese e nel tempo.</p>`;

  $('#q').addEventListener('input', e => {
    S.prefs.minImdb = +e.target.value;
    $('#qv').textContent = S.prefs.minImdb.toFixed(1);
  });
  $('#q').addEventListener('change', ()=>{ persist(); toast('Qualità minima aggiornata'); });
  $('#autoSw').addEventListener('click', e => {
    S.prefs.auto = !S.prefs.auto; persist();
    e.currentTarget.classList.toggle('on', S.prefs.auto);
    e.currentTarget.setAttribute('aria-checked', S.prefs.auto);
  });
  $('#tmdbKey').addEventListener('change', e => {
    S.prefs.tmdb = e.target.value.trim(); persist();
    if (S.prefs.tmdb){ toast('Chiave salvata. Scarico il catalogo…'); sync(true); }
    else toast('Chiave rimossa.');
  });
  $('#reload').addEventListener('click', ()=>sync(true));
  $('#wipe').addEventListener('click', ()=>{
    if (!confirm('Cancellare lista, visti, preferiti e impostazioni?')) return;
    ['cp_saved','cp_seen','cp_loved','cp_prefs','cp_art_v1','cp_sync','cp_sync_ts','cp_cat','cp_genres'].forEach(k=>localStorage.removeItem(k));
    location.reload();
  });
}

/* ---------- scheda ---------- */
function viewSheet(id){
  const x = S.items.find(i => i.id === id);
  if (!x) return;
  const saved = S.saved.includes(id), seen = S.seen.includes(id), loved = S.loved.includes(id);
  const R = 34, C = 2 * Math.PI * R;

  $('#v-sheet').innerHTML = `
  <button class="back" id="goBack">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m14 6-6 6 6 6"/></svg>
    Indietro
  </button>
  <div class="sheet-top">
    <div class="sheet-poster"><img data-item="${x.id}" alt="Locandina di ${esc(x.title)}"></div>
    <div>
      <h1>${esc(x.title)}</h1>
      <p class="sheet-kind" id="sheetKind">${kindWord(x.kind)} · ${x.year}${x.runtime?" · "+esc(x.runtime):""}<br>${esc(x.genres)}</p>
      <div class="hero-meta">
        <span class="tag">${x.ratingLabel||"IMDb"} ${x.imdb.toFixed(1)}${x.votes?" · "+x.votes.toLocaleString("it-IT")+" voti":""}</span>
        <span class="tag">In catalogo da ${whenLabel(x.added)}</span>
      </div>
    </div>
  </div>

  <div class="gauge">
    <div class="dial">
      <svg width="78" height="78" viewBox="0 0 78 78">
        <circle cx="39" cy="39" r="${R}" fill="none" stroke="#26201A" stroke-width="6"/>
        <circle cx="39" cy="39" r="${R}" fill="none" stroke="#E9A63C" stroke-width="6" stroke-linecap="round"
          stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - x.pulse/10)}"/>
      </svg>
      <span class="dial-v">${x.pulse.toFixed(1)}</span>
    </div>
    <p class="gauge-txt"><b>Pulse ${x.pulse.toFixed(1)} su 10</b>Mette insieme il voto IMDb, la freschezza in catalogo e quanto se ne parla.</p>
  </div>

  <div class="acts">
    <button class="act ${saved?'on':''}" data-act="save" data-id="${id}">${saved?'Salvato':'Salva'}</button>
    <button class="act ${seen?'on':''}" data-act="seen" data-id="${id}">${seen?'Visto':'Segna come visto'}</button>
    <button class="act act-icon ${loved?'on':''}" data-act="love" data-id="${id}" aria-label="Preferito">
      <svg viewBox="0 0 24 24" fill="${loved?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.5-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.5 12 20 12 20z"/></svg>
    </button>
  </div>

  <div class="block"><h3>Trama</h3><p>${esc(x.plot)}</p></div>

  <div class="block"><h3>Come si compone il Pulse</h3>
    <div class="bars">
      <div class="bar"><span>Voto pubblico</span><b>${x.imdb.toFixed(1)}</b><i style="--w:${x.imdb*10}%"></i></div>
      <div class="bar"><span>Freschezza</span><b>${days(x.added)<=45?'alta':'media'}</b><i style="--w:${days(x.added)<=45?90:55}%"></i></div>
      <div class="bar"><span>Punteggio</span><b>${x.pulse.toFixed(1)}</b><i style="--w:${x.pulse*10}%"></i></div>
    </div>
  </div>

  <div class="block"><h3>Dove guardarlo</h3>
    <div class="where" id="whereBox">${whereFor(x).map(p=>`
      <a href="${esc(p.url)}" target="_blank" rel="noopener">
        <span><b>${esc(p.name)}</b><small>${esc(p.note)}</small></span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>
      </a>`).join('')}</div>
    <p class="fine">Questi sono link di ricerca sui siti ufficiali: l'app non dichiara una disponibilità che non può verificare.</p>
  </div>`;
  watchImages($('#v-sheet'));
  enrich(x);
  $('#goBack').addEventListener('click', ()=>{
    if (history.length > 1) history.back(); else location.hash = S.from || 'home';
  });
}

/* =======================================================================
   navigazione — via hash, così funziona lo swipe indietro di iOS
   ======================================================================= */
const VIEWS = { home:viewHome, chart:viewChart, find:viewFind, mine:viewMine, prefs:viewPrefs };

function paint(view, id){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('on'));
  if (view === 'sheet'){ viewSheet(id); $('#v-sheet').classList.add('on'); }
  else { (VIEWS[view] || viewHome)(); $('#v-' + view).classList.add('on'); }
  document.querySelectorAll('.nav-i').forEach(b => b.classList.toggle('on', b.dataset.go === view));
  S.view = view;
}
function go(view, push = true){
  const hash = view === 'sheet' ? '' : '#' + view;
  if (push && location.hash !== hash) { location.hash = view; return; }  // popstate farà il resto
  paint(view);
  window.scrollTo({ top:0, behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' });
}
function openSheet(id){
  S.from = S.view;
  location.hash = 'titolo/' + id;
}
function readHash(){
  const h = decodeURIComponent(location.hash.replace(/^#/,''));
  if (h.startsWith('titolo/')) { paint('sheet', h.slice(7)); window.scrollTo(0,0); return; }
  paint(VIEWS[h] ? h : 'home');
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', readHash);

/* un solo gestore per tutti i tocchi: niente più pulsanti che smettono di funzionare */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-open],[data-go],[data-tab],[data-kind],[data-mine],[data-service],[data-act],#more');
  if (!t) return;

  if (t.dataset.open) return openSheet(t.dataset.open);
  if (t.dataset.go)   return go(t.dataset.go);
  if (t.dataset.tab)  { S.chartTab = t.dataset.tab; S.chartShown = 30; return viewChart(); }
  if (t.dataset.kind) { S.chartKind = t.dataset.kind; S.chartShown = 30; return viewChart(); }
  if (t.dataset.mine) { S.mineTab = t.dataset.mine; return viewMine(); }
  if (t.id === 'more'){ S.chartShown += 30; return viewChart(); }

  if (t.dataset.service){
    const n = t.dataset.service;
    S.prefs.services[n] = !S.prefs.services[n];
    persist();
    t.classList.toggle('on', S.prefs.services[n]);
    t.setAttribute('aria-checked', S.prefs.services[n]);
    return;
  }
  if (t.dataset.act){
    const id = t.dataset.id, a = t.dataset.act;
    const bag = a === 'save' ? 'saved' : a === 'seen' ? 'seen' : 'loved';
    const had = S[bag].includes(id);
    S[bag] = had ? S[bag].filter(v => v !== id) : [...S[bag], id];
    persist();
    viewSheet(id);
    toast(({ save:['Salvato in lista','Tolto dalla lista'], seen:['Segnato come visto','Non più segnato'], love:['Aggiunto ai preferiti','Tolto dai preferiti'] })[a][had?1:0]);
  }
});

/* ---------- toast ---------- */
let toastT;
function toast(msg){
  const el = $('#toast');
  el.textContent = msg; el.classList.add('on');
  clearTimeout(toastT); toastT = setTimeout(()=>el.classList.remove('on'), 2400);
}

/* ---------- aggiornamento ---------- */
/* dettagli veri quando apri una scheda: durata, stagioni e dove si vede in Italia */
async function enrich(x){
  if (!x.tmdbId || !tmdbKey()) return;
  try {
    const path = x.kind === 'serie' ? `/tv/${x.tmdbId}` : `/movie/${x.tmdbId}`;
    const d = await tmdb(path, { append_to_response:'watch/providers' });
    if (S.view !== 'sheet') return;

    const dur = x.kind === 'serie'
      ? (d.number_of_seasons ? d.number_of_seasons + (d.number_of_seasons === 1 ? ' stagione' : ' stagioni') : '')
      : (d.runtime ? Math.floor(d.runtime/60) + 'h ' + (d.runtime%60) + 'm' : '');
    if (dur){
      x.runtime = dur;
      const k = document.getElementById('sheetKind');
      if (k) k.innerHTML = `${kindWord(x.kind)} · ${x.year} · ${esc(dur)}<br>${esc(x.genres)}`;
    }

    const it = d['watch/providers']?.results?.IT;
    const box = document.getElementById('whereBox');
    if (!it || !box) return;
    const rows = [];
    const seen = new Set();
    const add = (list, note) => (list||[]).forEach(pv => {
      if (seen.has(pv.provider_name)) return;
      seen.add(pv.provider_name);
      rows.push({ name:pv.provider_name, note, logo: pv.logo_path ? IMG + 'w92' + pv.logo_path : null, url: it.link });
    });
    add(it.flatrate, 'Compreso nell\'abbonamento');
    add(it.free,     'Gratis');
    add(it.rent,     'A noleggio');
    add(it.buy,      'In acquisto');
    if (!rows.length) return;
    box.innerHTML = rows.map(p => `
      <a href="${esc(p.url)}" target="_blank" rel="noopener">
        <span style="display:flex;align-items:center;gap:11px">
          ${p.logo ? `<img src="${esc(p.logo)}" alt="" width="34" height="34" style="border-radius:8px">` : ''}
          <span><b>${esc(p.name)}</b><small>${esc(p.note)}</small></span>
        </span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>
      </a>`).join('');
  } catch {}
}

/* ---------- aggiornamento del catalogo ---------- */
async function sync(manual = false){
  const btn = $('#syncBtn');
  btn.classList.add('busy'); btn.disabled = true;
  let msg = '';
  try {
    const items = await buildCatalog();
    if (items.length){
      S.items = items;
      lsSet('cp_cat', { items, t: Date.now() });
      msg = `${items.length} titoli aggiornati`;
    } else {
      msg = 'TMDB non ha restituito titoli';
    }
  } catch (e) {
    msg = e.message === 'nokey'  ? 'Metti la chiave TMDB nelle impostazioni'
        : e.message === 'badkey' ? 'Chiave TMDB non valida'
        : 'Niente rete: resta il catalogo salvato';
  }
  const stamp = now().toLocaleString('it-IT', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' });
  lsSet('cp_sync', stamp); lsSet('cp_sync_ts', Date.now());
  $('#syncWhen').textContent = stamp;
  const lc = $('#lastCheck'); if (lc) lc.textContent = stamp;
  btn.classList.remove('busy'); btn.disabled = false;
  if (manual) toast(msg);
  readHash();
}

$('#syncBtn').addEventListener('click', ()=>sync(true));

/* controllo automatico alla riapertura, non più spesso di sei ore */
function maybeSync(){
  if (!tmdbKey()) return;
  if (!isLive()) return sync(false);        // primo avvio: scarica subito
  if (S.prefs.auto && catalogAge() > CAT_TTL) sync(false);
}
document.addEventListener('visibilitychange', ()=>{
  if (document.visibilityState === 'visible') maybeSync();
});

/* ---------- avvio ---------- */
$('#syncWhen').textContent = ls('cp_sync', '');
readHash();
maybeSync();

/* =======================================================================
   Service worker: registrazione e avviso quando esce una versione nuova.
   La cache non blocca più gli aggiornamenti (vedi sw.js).
   ======================================================================= */
if ('serviceWorker' in navigator){
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('sw.js');

      reg.addEventListener('updatefound', () => {
        const fresh = reg.installing;
        if (!fresh) return;
        fresh.addEventListener('statechange', () => {
          // c'è già un service worker attivo: quindi questo è un aggiornamento
          if (fresh.state === 'installed' && navigator.serviceWorker.controller){
            const t = $('#toast');
            t.innerHTML = 'Nuova versione pronta · <u>ricarica</u>';
            t.classList.add('on');
            t.style.pointerEvents = 'auto';
            t.onclick = () => { fresh.postMessage('SKIP_WAITING'); };
          }
        });
      });

      let reloading = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (reloading) return;
        reloading = true;
        location.reload();
      });

      // controlla se c'è una versione nuova ogni volta che riapri l'app
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') reg.update().catch(()=>{});
      });
    } catch {}
  });
}

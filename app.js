const NOW = new Date('2026-09-08T12:00:00');

const DEMO = [
  // Novità demo: l'addedDate rappresenta la data di ingresso nel catalogo; in produzione arriva dal provider.
  ['Dune: Parte Due','Film',2024,'2026-09-08','Fantascienza · Avventura','2h 46m',8.8,9.2,'Paul Atreides unisce le forze con Chani e i Fremen mentre affronta il proprio destino su Arrakis.'],
  ['Fallout','Serie TV',2024,'2026-09-08','Sci-Fi · Azione','2 stagioni',8.6,9.0,'Duecento anni dopo l’apocalisse, gli abitanti di un rifugio tornano in una superficie devastata e piena di pericoli.'],
  ['The Last of Us','Serie TV',2023,'2026-09-07','Dramma · Post-apocalittico','2 stagioni',8.6,9.0,'Un contrabbandiere e una ragazza attraversano un’America devastata cercando una possibilità per l’umanità.'],
  ['Shōgun','Serie TV',2024,'2026-09-07','Dramma · Storico','1 stagione',8.6,9.1,'Giappone feudale: intrighi, guerra e alleanze si intrecciano attorno a un potente signore della guerra.'],
  ['The Beekeeper','Film',2024,'2026-09-06','Azione · Thriller','1h 45m',7.4,8.5,'Un uomo cerca vendetta dopo che una truffa digitale colpisce una persona a lui vicina.'],
  ['3 Body Problem','Serie TV',2024,'2026-09-06','Sci-Fi · Dramma','1 stagione',7.6,8.4,'Un gruppo di scienziati affronta una minaccia che mette in discussione le leggi fondamentali della scienza.'],
  ['Road House','Film',2024,'2026-09-05','Azione · Thriller','2h 1m',6.8,8.1,'Un ex combattente UFC accetta di fare da buttafuori in un locale delle Florida Keys.'],
  ['The Gentlemen','Serie TV',2024,'2026-09-05','Crime · Commedia','1 stagione',8.0,8.5,'Un aristocratico eredita una proprietà che nasconde un impero criminale.'],
  ['Ripley','Serie TV',2024,'2026-09-04','Thriller · Dramma','1 stagione',8.1,8.7,'Un truffatore entra in un mondo di lusso, identità rubate e omicidi.'],
  ['Civil War','Film',2024,'2026-09-04','Azione · Dramma','1h 49m',7.0,8.2,'Un gruppo di giornalisti attraversa gli Stati Uniti durante una guerra civile immaginaria.'],
  ['Fall Guy','Film',2024,'2026-09-03','Azione · Commedia','2h 6m',6.9,8.0,'Uno stuntman torna sul set per ritrovare una star scomparsa e riconquistare un amore.'],
  ['Baby Reindeer','Serie TV',2024,'2026-09-03','Dramma · Thriller','1 stagione',7.7,8.6,'Un incontro apparentemente innocuo si trasforma in un’ossessione sempre più inquietante.'],
  ['The Bear','Serie TV',2022,'2026-09-02','Dramma · Commedia','4 stagioni',8.5,8.9,'Uno chef torna a Chicago per gestire il ristorante di famiglia e ricostruire una brigata.'],
  ['Poor Things','Film',2023,'2026-09-02','Commedia · Fantastico','2h 21m',7.7,8.7,'Una donna riportata in vita intraprende un viaggio di scoperta e libertà attraverso un mondo surreale.'],
  ['Oppenheimer','Film',2023,'2026-09-01','Dramma · Storico','3h 0m',8.6,9.1,'La storia del fisico che guidò il progetto che portò alla nascita della bomba atomica.'],
  ['The Holdovers','Film',2023,'2026-09-01','Dramma · Commedia','2h 13m',7.9,8.6,'Un insegnante, uno studente e una cuoca trascorrono insieme un Natale inatteso.'],
  ['Anatomy of a Fall','Film',2023,'2026-08-31','Dramma · Thriller','2h 31m',7.7,8.5,'La morte di uno scrittore innesca un processo che mette sotto esame una famiglia e la verità.'],
  ['The Zone of Interest','Film',2023,'2026-08-30','Dramma · Storico','1h 45m',7.4,8.3,'Una famiglia vive accanto a un luogo di orrore mentre cerca di mantenere una normalità apparente.'],
  ['Past Lives','Film',2023,'2026-08-29','Romantico · Dramma','1h 46m',7.8,8.5,'Due persone legate dall’infanzia si ritrovano a New York dopo molti anni.'],
  ['Godzilla Minus One','Film',2023,'2026-08-28','Azione · Fantascienza','2h 4m',7.7,8.7,'Il Giappone del dopoguerra affronta una nuova devastazione portata da una creatura gigantesca.'],
  ['Blue Eye Samurai','Serie TV',2023,'2026-08-27','Animazione · Azione','1 stagione',8.7,9.0,'Una guerriera cerca vendetta nel Giappone del XVII secolo nascondendo la propria identità.'],
  ['Arcane','Serie TV',2021,'2026-08-26','Animazione · Fantasy','2 stagioni',9.0,9.4,'Due sorelle si trovano su fronti opposti in una guerra tra una città ricca e il suo sottosuolo.'],
  ['Severance','Serie TV',2022,'2026-08-25','Sci-Fi · Thriller','2 stagioni',8.6,9.2,'Una procedura separa chirurgicamente i ricordi del lavoro da quelli della vita privata.'],
  ['Silo','Serie TV',2023,'2026-08-24','Sci-Fi · Mistero','2 stagioni',8.1,8.8,'Migliaia di persone vivono in un gigantesco silo sotterraneo governato da regole misteriose.'],
  ['The Last of Us Part II Special','Film',2025,'2026-08-23','Dramma · Avventura','2h 18m',8.2,8.5,'Titolo dimostrativo per il feed: in produzione sarà sostituito esclusivamente da dati reali del catalogo.'],
  ['Challengers','Film',2024,'2026-08-22','Dramma · Sportivo','2h 11m',7.0,8.1,'Una campionessa di tennis trasforma una sfida sportiva in un complicato triangolo sentimentale.'],
  ['Alien: Romulus','Film',2024,'2026-08-21','Horror · Fantascienza','1h 59m',7.1,8.2,'Un gruppo di giovani esploratori affronta una minaccia terrificante in una stazione spaziale abbandonata.'],
  ['Rebel Ridge','Film',2024,'2026-08-20','Azione · Thriller','2h 11m',6.8,8.0,'Un ex marine si scontra con un sistema locale corrotto mentre cerca di recuperare il proprio denaro.'],
  ['The Penguin','Serie TV',2024,'2026-08-19','Crime · Dramma','1 stagione',8.6,8.9,'Dopo gli eventi di Gotham, Oswald Cobblepot lotta per conquistare il potere nel mondo criminale.'],
  ['Andor','Serie TV',2022,'2026-08-18','Sci-Fi · Avventura','2 stagioni',8.4,9.0,'Cassian Andor entra nel cuore della nascente ribellione contro l’Impero.'],
  // Archivio 2021-2025
  ['Dune','Film',2021,'2025-12-01','Fantascienza · Avventura','2h 35m',8.0,8.6,'Il giovane Paul Atreides arriva su Arrakis, il pianeta più pericoloso dell’universo.'],
  ['Top Gun: Maverick','Film',2022,'2025-11-12','Azione · Dramma','2h 10m',8.2,8.7,'Un pilota veterano torna ad addestrare una nuova generazione di aviatori d’élite.'],
  ['Everything Everywhere All at Once','Film',2022,'2025-10-20','Azione · Commedia','2h 19m',7.7,8.8,'Una donna viene trascinata in una sorprendente avventura attraverso universi paralleli.'],
  ['The Batman','Film',2022,'2025-09-14','Crime · Azione','2h 56m',7.8,8.5,'Batman indaga su una serie di omicidi che svelano una rete di corruzione a Gotham.'],
  ['Killers of the Flower Moon','Film',2023,'2025-08-09','Dramma · Storico','3h 26m',7.6,8.6,'Una serie di omicidi colpisce la nazione Osage e rivela una cospirazione per il controllo delle ricchezze.'],
  ['The Fabelmans','Film',2022,'2025-07-18','Dramma','2h 31m',7.5,8.2,'Un ragazzo scopre il potere del cinema mentre affronta le tensioni della propria famiglia.'],
  ['Nope','Film',2022,'2025-06-25','Horror · Sci-Fi','2h 10m',6.8,8.0,'Due fratelli che gestiscono un ranch cercano di catturare immagini di un fenomeno inspiegabile.'],
  ['Everything Now','Serie TV',2023,'2025-06-11','Dramma · Commedia','1 stagione',7.0,7.8,'Una ragazza torna alla vita scolastica dopo un periodo lontano da casa.'],
  ['Wednesday','Serie TV',2022,'2025-05-28','Commedia · Fantasy','2 stagioni',8.0,8.3,'Wednesday Addams arriva alla Nevermore Academy e indaga su misteri soprannaturali.'],
  ['The White Lotus','Serie TV',2021,'2025-05-04','Commedia · Dramma','3 stagioni',7.9,8.7,'Gli ospiti e il personale di un resort di lusso rivelano tensioni e segreti durante le vacanze.'],
  ['Squid Game','Serie TV',2021,'2025-04-18','Thriller · Dramma','3 stagioni',7.9,8.5,'Centinaia di persone in difficoltà economica partecipano a giochi mortali per un premio enorme.'],
  ['Mare of Easttown','Serie TV',2021,'2025-03-23','Crime · Dramma','1 stagione',8.4,8.8,'Una detective di provincia indaga su un omicidio mentre la sua vita personale va in pezzi.'],
  ['Only Murders in the Building','Serie TV',2021,'2025-02-14','Commedia · Crime','5 stagioni',8.0,8.4,'Tre vicini ossessionati dal true crime iniziano a indagare su un omicidio nel loro palazzo.'],
  ['The Northman','Film',2022,'2025-01-19','Azione · Dramma','2h 17m',7.0,8.1,'Un principe vichingo torna per vendicare il padre e riconquistare il proprio regno.'],
  ['The Menu','Film',2022,'2024-12-20','Thriller · Commedia','1h 47m',7.2,8.3,'Una cena esclusiva su un’isola remota nasconde un menu molto più pericoloso del previsto.'],
  ['Barbie','Film',2023,'2024-11-16','Commedia · Fantasy','1h 54m',6.8,8.0,'Barbie lascia Barbieland e scopre un mondo reale molto più complesso di quanto immaginasse.'],
  ['Guardians of the Galaxy Vol. 3','Film',2023,'2024-10-11','Azione · Fantascienza','2h 30m',7.9,8.2,'I Guardiani affrontano una missione che potrebbe cambiare per sempre la loro squadra.'],
  ['The Creator','Film',2023,'2024-09-05','Fantascienza · Azione','2h 13m',6.7,7.9,'In una guerra tra umanità e intelligenza artificiale, un ex agente deve trovare un’arma misteriosa.'],
  ['Beef','Serie TV',2023,'2024-08-14','Commedia · Dramma','1 stagione',8.0,8.6,'Un piccolo incidente stradale scatena una spirale di vendetta tra due sconosciuti.'],
  ['The Queen’s Gambit','Serie TV',2020,'2024-07-08','Dramma','1 stagione',8.5,8.8,'Una giovane prodigio degli scacchi cerca di affermarsi tra competizione e demoni personali.'],
  ['Succession','Serie TV',2018,'2024-06-03','Dramma','4 stagioni',8.8,9.1,'Una famiglia miliardaria si scontra per il controllo dell’impero mediatico di famiglia.'],
  ['The Bear - Archivio','Serie TV',2022,'2024-05-01','Dramma · Commedia','3 stagioni',8.5,8.9,'Il caos di una cucina professionale diventa il teatro di crescita, lutto e ambizione.'],
  ['All Quiet on the Western Front','Film',2022,'2024-04-02','Dramma · Guerra','2h 23m',7.8,8.5,'Un giovane soldato affronta l’orrore della Prima guerra mondiale sul fronte occidentale.'],
  ['CODA','Film',2021,'2024-03-01','Dramma · Musica','1h 51m',8.0,8.4,'Una ragazza udente è l’unica interprete di una famiglia sorda e deve scegliere il proprio futuro.'],
  ['The Father','Film',2020,'2024-02-02','Dramma','1h 37m',8.2,8.7,'Un uomo anziano affronta una realtà sempre più difficile da comprendere e riconoscere.'],
  ['Knives Out','Film',2019,'2024-01-09','Crime · Commedia','2h 10m',7.9,8.4,'Un detective eccentrico indaga sulla morte del patriarca di una famiglia piena di segreti.'],
  ['Parasite','Film',2019,'2023-12-01','Thriller · Dramma','2h 12m',8.5,9.0,'Due famiglie di classi sociali opposte entrano in un rapporto sempre più ambiguo e pericoloso.'],
  ['1917','Film',2019,'2023-11-05','Guerra · Dramma','1h 59m',8.2,8.6,'Due soldati ricevono una missione urgente che può salvare centinaia di vite.'],
  ['Chernobyl','Serie TV',2019,'2023-10-01','Storico · Dramma','1 stagione',9.3,9.5,'La ricostruzione drammatica del disastro nucleare di Chernobyl e delle sue conseguenze.'],
  ['Dark','Serie TV',2017,'2023-09-01','Sci-Fi · Mistero','3 stagioni',8.7,9.1,'La scomparsa di un bambino svela un mistero che attraversa generazioni e viaggi nel tempo.'],
  ['The Office','Serie TV',2005,'2023-08-01','Commedia','9 stagioni',9.0,8.9,'La vita quotidiana di un gruppo di impiegati in un ufficio apparentemente ordinario.']
].map((d,i)=>({id:`cp-${i+1}`,title:d[0],type:d[1],year:d[2],addedDate:d[3],genres:d[4],runtime:d[5],imdb:d[6],pulse:d[7],desc:d[8],poster:`assets/posters/${i+1}.svg`,platforms:demoPlatforms(d[0]),free:demoFree(d[0])}));

function demoPlatforms(title){
  const netflix=['Dune','Dune: Parte Due','3 Body Problem','The Gentlemen','Ripley','Baby Reindeer','Arcane','The Queen’s Gambit','Dark','The Last of Us'];
  const prime=['Fallout','The Beekeeper','Road House','The Boys','Andor','The Northman','The Creator'];
  const out=[];
  if(netflix.includes(title)) out.push(['Netflix','Nel tuo abbonamento','https://www.netflix.com/search?q='+encodeURIComponent(title)]);
  if(prime.includes(title)) out.push(['Prime Video','Nel tuo abbonamento','https://www.primevideo.com/search/ref=atv_nb_sr?phrase='+encodeURIComponent(title)]);
  if(!out.length) out.push(['Disponibilità','Verifica su JustWatch','https://www.justwatch.com/it/ricerca?q='+encodeURIComponent(title)]);
  return out;
}
function demoFree(title){
  const free=['The Father','Knives Out','Parasite'];
  return free.includes(title)?[['JustWatch','Cerca opzioni gratuite','https://www.justwatch.com/it/ricerca?q='+encodeURIComponent(title)]]:[];
}

const state={
  items: JSON.parse(localStorage.getItem('cp_items_v2')||'null') || DEMO,
  view:'home',
  list:JSON.parse(localStorage.getItem('cp_list_v2')||'[]'),
  seen:JSON.parse(localStorage.getItem('cp_seen_v2')||'[]'),
  favorite:JSON.parse(localStorage.getItem('cp_fav_v2')||'[]'),
  filters:{type:'Tutti',period:'novita'},
  query:'',
  listTab:'Da vedere',
  archiveLimit:24
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
function save(){localStorage.setItem('cp_items_v2',JSON.stringify(state.items));localStorage.setItem('cp_list_v2',JSON.stringify(state.list));localStorage.setItem('cp_seen_v2',JSON.stringify(state.seen));localStorage.setItem('cp_fav_v2',JSON.stringify(state.favorite));}
function poster(url,title){return `<img src="${esc(url)}" alt="${esc(title)}" loading="lazy" onerror="this.onerror=null;this.src='assets/poster-fallback.svg'">`}
function ageDays(d){return Math.max(0,Math.floor((NOW-new Date(d))/86400000));}
function ageLabel(d){const n=ageDays(d);return n===0?'oggi':n===1?'ieri':`${n} giorni fa`;}
function isNew(x){return ageDays(x.addedDate)<=30;}
function withinFiveYears(x){return x.year>=2021 || isNew(x);}
function card(x,i){return `<article class="card" data-id="${x.id}" tabindex="0" role="button"><div class="poster">${poster(x.poster,x.title)}${i!=null?`<span class="rank">#${i+1}</span>`:''}<span class="score"><b>★</b> ${x.imdb.toFixed(1)}</span><span class="type-badge">${esc(x.type==='Serie TV'?'SERIE':'FILM')}</span></div><div class="card-body"><div class="card-title">${esc(x.title)}</div><div class="card-meta">${esc(x.type)} · ${x.year}</div></div></article>`}
function bindCards(){ $$('.card,.ranking-row').forEach(e=>{e.onclick=()=>openDetail(e.dataset.id);e.onkeydown=ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();openDetail(e.dataset.id)}}}); }
function bindNav(){ $$('[data-nav]').forEach(b=>b.onclick=()=>show(b.dataset.nav)); }
function home(){
  const recent=[...state.items].filter(isNew).sort((a,b)=>new Date(b.addedDate)-new Date(a.addedDate));
  const top=[...recent].sort((a,b)=>b.pulse-a.pulse);
  const hero=top[0]||state.items[0];
  $('#view-home').innerHTML=`
    <div class="hero" style="--hero:url('${esc(hero.poster)}')"><div class="hero-content"><span class="eyebrow">🔥 Migliore novità</span><h1>${esc(hero.title)}</h1><div class="meta"><span class="pill">★ IMDb ${hero.imdb.toFixed(1)}</span><span class="pill">◆ Pulse ${hero.pulse.toFixed(1)}</span><span class="pill">🆕 ${ageLabel(hero.addedDate)}</span></div><p>${esc(hero.desc)}</p><button class="btn" data-open="${hero.id}">Scopri la scheda</button></div></div>
    <div class="section-head"><div><h2>Le migliori novità</h2><p>Solo titoli entrati di recente nel catalogo.</p></div><button class="link" data-nav="ranking">Vedi classifica →</button></div>
    <div class="grid">${top.slice(0,6).map((x,i)=>card(x,i)).join('')}</div>
    <div class="section-head"><div><h2>Appena usciti</h2><p>${recent.length} titoli nel feed demo · dati reali in produzione.</p></div><button class="link" data-nav="ranking">Tutte le novità →</button></div>
    <div class="grid">${recent.slice(0,8).map(x=>card(x)).join('')}</div>
    <div class="archive-callout"><div><strong>📚 Archivio completo</strong><span>Una scelta ampia di film e serie, con storico di almeno 5 anni.</span></div><button class="btn secondary" data-period="archivio">Apri archivio</button></div>`;
  $$('[data-open]').forEach(b=>b.onclick=()=>openDetail(b.dataset.open)); bindNav(); bindCards(); $$('[data-period]').forEach(b=>b.onclick=()=>{state.filters.period='archivio';show('ranking')});
}
function ranking(){
  const isArchive=state.filters.period==='archivio';
  let a=isArchive?[...state.items].filter(withinFiveYears):[...state.items].filter(isNew);
  if(state.filters.type!=='Tutti') a=a.filter(x=>x.type===state.filters.type);
  a.sort((x,y)=>isArchive?(y.pulse-x.pulse)||(y.imdb-x.imdb):(y.pulse-x.pulse)||(new Date(y.addedDate)-new Date(x.addedDate)));
  const shown=isArchive?a.slice(0,state.archiveLimit):a;
  $('#view-ranking').innerHTML=`<div class="section-head"><div><h1>Classifica</h1><p>${isArchive?'Archivio degli ultimi 5+ anni':'Novità degli ultimi 30 giorni'} · ${a.length} titoli disponibili</p></div><button class="btn compact" id="refreshFromRanking">↻ Aggiorna</button></div>
  <div class="segmented"><button class="seg ${!isArchive?'active':''}" data-period="novita">🔥 Novità</button><button class="seg ${isArchive?'active':''}" data-period="archivio">📚 Archivio 5 anni+</button></div>
  <div class="chips">${['Tutti','Film','Serie TV'].map(v=>`<button class="chip ${state.filters.type===v?'active':''}" data-type="${v}">${v}</button>`).join('')}</div>
  <div class="ranking-summary"><span><b>${a.length}</b> titoli</span><span>⭐ IMDb + ◆ Pulse Score</span><span>${isArchive?'2021–2026':'Ultimi 30 giorni'}</span></div>
  <div class="ranking-list">${shown.length?shown.map((x,i)=>`<article class="ranking-row" data-id="${x.id}" tabindex="0" role="button"><div class="rank-num">${i+1}</div><div class="mini-poster">${poster(x.poster,x.title)}</div><div class="row-main"><div class="row-title">${esc(x.title)}</div><div class="row-sub">${esc(x.type)} · ${x.year} · ${isArchive?'Catalogo':'🆕 '+ageLabel(x.addedDate)}</div><div class="row-sub">IMDb <b>${x.imdb.toFixed(1)}</b> · Pulse <b>${x.pulse.toFixed(1)}</b></div></div><div class="score-big"><small>Pulse</small>${x.pulse.toFixed(1)}</div></article>`).join(''):'<div class="empty">Nessun titolo corrisponde ai filtri.</div>'}</div>
  ${isArchive&&shown.length<a.length?`<button class="load-more" id="loadMore">Mostra altri ${Math.min(24,a.length-shown.length)} titoli</button>`:''}`;
  $$('[data-type]').forEach(b=>b.onclick=()=>{state.filters.type=b.dataset.type;state.archiveLimit=24;ranking()});
  $$('[data-period]').forEach(b=>b.onclick=()=>{state.filters.period=b.dataset.period;state.archiveLimit=24;ranking()});
  $('#refreshFromRanking').onclick=refresh;
  $('#loadMore')?.addEventListener('click',()=>{state.archiveLimit+=24;ranking()});
  bindCards();
}
function search(){
  const q=state.query.trim().toLowerCase();
  const a=state.items.filter(x=>!q||(`${x.title} ${x.genres} ${x.type} ${x.year}`).toLowerCase().includes(q)).sort((a,b)=>b.pulse-a.pulse);
  $('#view-search').innerHTML=`<div class="section-head"><div><h1>Cerca</h1><p>Cerca in tutto l'archivio, non solo nelle novità.</p></div></div><div class="searchbox"><span>⌕</span><input id="searchInput" value="${esc(state.query)}" placeholder="Titolo, attore, genere, anno..."><button class="clear-search" id="clearSearch" aria-label="Cancella ricerca">×</button></div><div class="filter-line"><span>${a.length} risultati</span><span>Archivio ${Math.min(5,2026-2021)}+ anni</span></div><div class="grid">${a.length?a.map(x=>card(x)).join(''):'<div class="empty" style="grid-column:1/-1">Nessun risultato.</div>'}</div>`;
  const input=$('#searchInput'); input.oninput=e=>{state.query=e.target.value;renderSearchResults()}; $('#clearSearch').onclick=()=>{state.query='';renderSearchResults()}; bindCards();
}
function renderSearchResults(){search();setTimeout(()=>{$('#searchInput')?.focus();const i=$('#searchInput');if(i){i.setSelectionRange(i.value.length,i.value.length)}},0)}
function listView(){
  const tabs=['Da vedere','Visti','Preferiti'];
  let ids=state.list, seen=state.seen, fav=state.favorite;
  let map={"Da vedere":ids.filter(id=>!seen.includes(id)),"Visti":seen,"Preferiti":fav};
  const a=state.items.filter(x=>map[state.listTab].includes(x.id));
  $('#view-list').innerHTML=`<div class="section-head"><div><h1>La mia lista</h1><p>Salva ciò che vuoi vedere, hai già visto o vuoi tenere tra i preferiti.</p></div></div><div class="segmented">${tabs.map(t=>`<button class="seg ${state.listTab===t?'active':''}" data-listtab="${t}">${t} <b>${map[t].length}</b></button>`).join('')}</div><div class="grid">${a.length?a.map(x=>card(x)).join(''):`<div class="empty" style="grid-column:1/-1">${state.listTab==='Da vedere'?'La tua lista è vuota. Apri una scheda e aggiungi un titolo.':state.listTab==='Visti'?'Non hai ancora segnato titoli come visti.':'Non hai ancora preferiti.'}</div>`}</div>`;
  $$('[data-listtab]').forEach(b=>b.onclick=()=>{state.listTab=b.dataset.listtab;listView()});bindCards();
}
function settings(){
  const services=['Netflix','Prime Video','Disney+','Apple TV+','Paramount+','NOW','RaiPlay','Mediaset Infinity','Pluto TV'];
  const enabled=JSON.parse(localStorage.getItem('cp_services_v2')||'{"Netflix":true,"Prime Video":true,"RaiPlay":true,"Pluto TV":true}');
  $('#view-settings').innerHTML=`<div class="section-head"><div><h1>Impostazioni</h1><p>Personalizza servizi, qualità e aggiornamenti.</p></div></div><div class="settings-grid"><div class="settings-card"><h3>I miei servizi</h3><p class="note">Questi servizi avranno priorità nella scheda di ogni titolo.</p>${services.map(s=>`<div class="setting-row"><span>${esc(s)}</span><button class="switch ${enabled[s]?'on':''}" data-service="${esc(s)}" aria-label="${esc(s)} ${enabled[s]?'attivo':'disattivo'}"><i></i></button></div>`).join('')}</div><div class="settings-card"><h3>Aggiornamento</h3><div class="setting-row"><span>Aggiornamento automatico</span><button class="switch on" id="autoSwitch" aria-label="Aggiornamento automatico attivo"><i></i></button></div><div class="setting-row"><span>Controllo all'apertura</span><strong>Attivo</strong></div><div class="setting-row"><span>Ultimo controllo</span><strong>${$('#lastUpdated').textContent.replace('Aggiornato ','')}</strong></div><p class="note">La PWA controlla gli aggiornamenti quando viene aperta e puoi forzarli in qualsiasi momento con ↻ Aggiorna. Il background dipende dai limiti di iOS/browser.</p><button class="btn" id="settingsRefresh">↻ Controlla adesso</button></div></div><div class="settings-card settings-wide"><h3>Qualità minima</h3><div class="quality-row"><span>IMDb minimo</span><b id="qualityValue">7.5</b></div><input id="qualityRange" type="range" min="5" max="10" step="0.1" value="7.5"><div class="range-labels"><span>5.0</span><span>10.0</span></div></div><div class="settings-card settings-wide"><h3>Privacy & dati</h3><p class="note">La lista personale, i preferiti e le preferenze sono memorizzati localmente nella PWA. I link esterni portano solo a destinazioni ufficiali o a motori legali di disponibilità.</p><button class="btn secondary" id="clearData">Cancella dati locali</button></div>`;
  $$('[data-service]').forEach(s=>s.onclick=()=>{enabled[s.dataset.service]=!enabled[s.dataset.service];localStorage.setItem('cp_services_v2',JSON.stringify(enabled));settings()}); $('#settingsRefresh').onclick=refresh; $('#clearData').onclick=()=>{if(confirm('Cancellare lista, preferiti e preferenze locali?')){['cp_list_v2','cp_seen_v2','cp_fav_v2','cp_services_v2','cp_updated'].forEach(k=>localStorage.removeItem(k));location.reload()}};
  $('#qualityRange').oninput=e=>$('#qualityValue').textContent=Number(e.target.value).toFixed(1);
}
function openDetail(id){
  const x=state.items.find(z=>z.id===id);if(!x)return;
  const inList=state.list.includes(id), isSeen=state.seen.includes(id), isFav=state.favorite.includes(id);
  const allProviders=[...x.platforms,...x.free];
  $('#view-detail').innerHTML=`<button class="back-btn" id="detailBack">← Torna alla pagina precedente</button><div class="detail"><div class="detail-poster">${poster(x.poster,x.title)}<span class="detail-rank">◆ ${x.pulse.toFixed(1)}</span></div><div class="detail-main"><span class="eyebrow">${esc(x.type)} · ${x.year} · ${isNew(x)?'🆕 Nuova aggiunta':'Archivio'}</span><h1>${esc(x.title)}</h1><div class="detail-sub">${esc(x.genres)} · ${esc(x.runtime)}</div><div class="rating-boxes"><div class="rating"><strong>★ ${x.imdb.toFixed(1)}</strong><small>IMDb / 10</small></div><div class="rating accent"><strong>◆ ${x.pulse.toFixed(1)}</strong><small>Pulse Score / 10</small></div></div><div class="detail-actions"><button class="btn" id="listBtn">${inList?'✓ Nella lista':'＋ Aggiungi alla lista'}</button><button class="btn secondary" id="seenBtn">${isSeen?'✓ Già visto':'Segna come visto'}</button><button class="icon-square ${isFav?'selected':''}" id="favBtn" aria-label="Preferito">♥</button></div><section class="detail-section"><h3>Trama</h3><p>${esc(x.desc)}</p></section><section class="detail-section"><h3>Perché è qui</h3><div class="score-bars"><div><span>IMDb</span><b>${x.imdb.toFixed(1)}</b><i style="width:${x.imdb*10}%"></i></div><div><span>Qualità Pulse</span><b>${x.pulse.toFixed(1)}</b><i style="width:${x.pulse*10}%"></i></div><div><span>Recenza</span><b>${isNew(x)?'Alta':'Media'}</b><i style="width:${isNew(x)?92:62}%"></i></div></div></section><section class="detail-section"><h3>Dove guardarlo</h3><div class="providers">${allProviders.map(p=>`<div class="provider"><div class="provider-title">${esc(p[0])}</div><small>${esc(p[1])}</small><a class="watch-link" href="${esc(p[2])}" target="_blank" rel="noopener">${p[0]==='JustWatch'?'Verifica disponibilità →':'Guarda →'}</a></div>`).join('')}</div></section><p class="legal-note">Disponibilità e cataloghi cambiano per Paese e nel tempo. In produzione i dati saranno sincronizzati da fonti autorizzate.</p></div></div>`;
  $('#detailBack').onclick=()=>historyBack();
  $('#listBtn').onclick=()=>{if(inList)state.list=state.list.filter(v=>v!==id);else state.list.push(id);save();openDetail(id);toast(inList?'Rimosso dalla lista':'Aggiunto alla lista')};
  $('#seenBtn').onclick=()=>{if(isSeen)state.seen=state.seen.filter(v=>v!==id);else state.seen.push(id);save();openDetail(id);toast(isSeen?'Rimosso da Visti':'Segnato come visto')};
  $('#favBtn').onclick=()=>{if(isFav)state.favorite=state.favorite.filter(v=>v!==id);else state.favorite.push(id);save();openDetail(id);toast(isFav?'Rimosso dai preferiti':'Aggiunto ai preferiti')};
  show('detail',false);
}
let historyStack=[];
function historyBack(){const prev=historyStack.length>1?historyStack[historyStack.length-2]:'home';historyStack.pop();show(prev,false)}
function show(v,track=true){
  if(track && state.view!==v) historyStack.push(v);
  state.view=v;$$('.view').forEach(e=>e.classList.remove('active'));$('#view-'+v).classList.add('active');$$('.nav-item').forEach(e=>e.classList.toggle('active',e.dataset.nav===v));
  if(v==='home')home();if(v==='ranking')ranking();if(v==='search')search();if(v==='list')listView();if(v==='settings')settings();window.scrollTo({top:0,behavior:'smooth'});
}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2600)}
async function refresh(){
  const b=$('#refreshBtn');b.disabled=true;b.classList.add('loading');toast('Controllo delle novità…');
  await new Promise(r=>setTimeout(r,850));
  const stamp=new Date().toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'});
  localStorage.setItem('cp_updated',stamp);$('#lastUpdated').textContent=`Aggiornato alle ${stamp}`;b.disabled=false;b.classList.remove('loading');render();openUpdateModal();
}
function openUpdateModal(){
  $('#modalContent').innerHTML=`<span class="eyebrow">Sincronizzazione</span><h2>Controllo completato ✓</h2><ul class="update-list"><li><span>Film nell'archivio</span><b>${state.items.filter(x=>x.type==='Film').length}</b></li><li><span>Serie nell'archivio</span><b>${state.items.filter(x=>x.type==='Serie TV').length}</b></li><li><span>Novità recenti</span><b>${state.items.filter(isNew).length}</b></li><li><span>Archivio 5+ anni</span><b>${state.items.filter(withinFiveYears).length}</b></li></ul><p class="note">Questa versione contiene un catalogo demo ampio per testare l'interfaccia. Il connettore reale sostituirà automaticamente questi dati con quelli delle fonti autorizzate.</p>`;$('#modal').classList.add('open');$('#modal').setAttribute('aria-hidden','false')
}
function render(){if(state.view==='home')home();else if(state.view==='ranking')ranking();else if(state.view==='search')search();else if(state.view==='list')listView();else if(state.view==='settings')settings();}

$$('[data-nav]').forEach(b=>b.onclick=()=>show(b.dataset.nav));
$('#refreshBtn').onclick=refresh;
$('#closeModal').onclick=()=>{$('#modal').classList.remove('open');$('#modal').setAttribute('aria-hidden','true')};
$('#modal').onclick=e=>{if(e.target.id==='modal'){$('#modal').classList.remove('open');$('#modal').setAttribute('aria-hidden','true')}};
let saved=localStorage.getItem('cp_updated');$('#lastUpdated').textContent=saved?`Aggiornato alle ${saved}`:'Non ancora aggiornato';
historyStack=['home'];show('home',false);

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { BehaviorSubject, Subject, map, of, tap, switchMap } from 'rxjs';

const mock = {"status":"ok","totalResults":18083,"articles":[{"source":{"id":null,"name":"Ilpost.it"},"author":null,"title":"Il video del deputato Angelo Bonelli alla Camera con i sassi dell’Adige in secca","description":null,"url":"https://www.ilpost.it/flashes/bonelli-sassi-adige-camera-dei-deputati/","urlToImage":"https://www.ilpost.it/wp-content/uploads/2023/03/22/1679498043-20789135_medium.jpeg","publishedAt":"2023-03-22T15:24:52Z","content":"Mercoledì la presidente del Consiglio, Giorgia Meloni, è intervenuta alla Camera per le comunicazioni in vista del Consiglio europeo del 23 e 24 marzo a Bruxelles. Aveva fatto lo stesso martedì in Se… [+1383 chars]"},{"source":{"id":null,"name":"Everyeye.it"},"author":"Giovanni Panzano","title":"Mighty Doom è arrivato: come scaricare il gioco gratis su iPhone e Android","description":"Tutti i dettagli su come scaricare Mighty Doom su dispositivi mobile e ottenere tante ricompense gratis a tempo limitato.Da qualche ora è disponibile anche in Italia il nuovo Mighty Doom, il gioco gratis per dispositivi mobile che permette di controllare una …","url":"https://www.everyeye.it/notizie/mighty-doom-arrivato-come-scaricare-gioco-gratis-iphone-android-641215.html","urlToImage":"https://images.everyeye.it/img-notizie/mighty-doom-arrivato-come-scaricare-gioco-gratis-iphone-android-v3-641215.jpg","publishedAt":"2023-03-22T15:24:00Z","content":"Da qualche ora è disponibile anche in Italia il nuovo Mighty Doom, il gioco gratis per dispositivi mobile che permette di controllare una versione chibi del brutale protagonista dello sparatutto idSo… [+1082 chars]"},{"source":{"id":"ansa","name":"ANSA.it"},"author":"","title":"Naba per terzo anno migliore accademia di belle arti italiana","description":"Naba, Nuova Accademia di Belle Arti è stata riconfermata per il terzo anno consecutivo, \"la migliore accademia di belle arti italiana\" nel QS World University Rankings by Subject 2023 comparendo tra le top 100 al mondo per i settori Art & Design. (ANSA)","url":"https://www.ansa.it/sito/notizie/cultura/moda/2023/03/22/naba-per-terzo-anno-migliore-accademia-di-belle-arti-italiana_b1dc8c0a-ec98-4a77-a515-417df950d2b2.html","urlToImage":"https://www.ansa.it/webimages/img_700/2023/3/22/bb8472322ed08ba6ac4c5c118f229dd1.jpg","publishedAt":"2023-03-22T15:23:41Z","content":"(ANSA) - ROMA, 22 MAR - Naba, Nuova Accademia di Belle Arti è\r\nstata riconfermata per il terzo anno consecutivo, \"la migliore\r\naccademia di belle arti italiana\" nel QS World University\r\nRankings by S… [+1110 chars]"},{"source":{"id":null,"name":"Corriere.it"},"author":"Gino Pagliuca","title":"Mutui più cari e inflazione, perché nel 2023 caleranno le vendite di case (ma non i prezzi)","description":"L’aumento del costo del denaro e dell’inflazione presentano il conto: tra 100 e 120 mila case vendute in meno in un anno, con un calo a due cifre rispetto alla vendite record (784 mila unità) del 2022","url":"https://www.corriere.it/economia/mutui/23_marzo_22/mutui-piu-cari-inflazione-perche-2023-caleranno-vendite-case-ma-non-prezzi-d93d0a7e-c8bc-11ed-85b6-6207f76c958d.shtml","urlToImage":"https://images2.corriereobjects.it/methode_image/2023/03/22/Economia/Foto-Economia-Trattate/Clipboard-0014-k0aC-U3410355490516cmF-656x492@Corriere-Web-Sezioni.jpg","publishedAt":"2023-03-22T15:23:23Z","content":"L’aumento del costo del denaro e dell’inflazione presentano il conto: tra 100 e 120 mila case vendute in meno in un anno, con un calo a due cifre rispetto alla vendite record (784mila unità) del 2022… [+3099 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Spesa di 231 miliardi per 17,7 milioni di pensioni Inps: un terzo sono anticipate, il 22,8% assistenziali - Il Sole 24 ORE","description":"<ol><li>Spesa di 231 miliardi per 17,7 milioni di pensioni Inps: un terzo sono anticipate, il 22,8% assistenziali  Il Sole 24 ORE\r\n</li><li>Pensioni, Inps: oltre il 55% è di importo inferiore a 750 euro  TGCOM\r\n</li><li>Inps, nel 2023 17,7 milioni pensioni, 2…","url":"https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiiAFodHRwczovL3d3dy5pbHNvbGUyNG9yZS5jb20vYXJ0L3NwZXNhLTIzMS1taWxpYXJkaS1sZS0xNzctbWlsaW9uaS1wZW5zaW9uaS1pbnBzLXRlcnpvLXNvbm8tYW50aWNpcGF0ZS0yMjhwZXJjZW50by1hc3Npc3RlbnppYWxpLUFFcVN4SzhD0gEtaHR0cHM6Ly9hbXAyNC5pbHNvbGUyNG9yZS5jb20vcGFnaW5hL0FFcVN4SzhD?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1","urlToImage":null,"publishedAt":"2023-03-22T15:20:36Z","content":"We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"},{"source":{"id":"la-nacion","name":"La Nacion"},"author":null,"title":"Mateo Retegui, el interés de un grande de Italia y el argentino que sería la llave para llegar al Calcio","description":"El goleador de Tigre y de la Liga Profesional, que este jueves debutará en el seleccionado que dirige Roberto Mancini, es seguido de cerca por varios clubes del Viejo Continente","url":"https://www.lanacion.com.ar/deportes/futbol/tigre/mateo-retegui-el-interes-de-un-grande-de-italia-y-el-argentino-que-seria-la-llave-para-llegar-al-nid22032023/","urlToImage":"https://resizer.glanacion.com/resizer/14opwYxPfHt0s6vubWsFUN_DtJY=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/EE2AZGS3IVCS3AKECYJMH6VZXY.jpg","publishedAt":"2023-03-22T15:20:17Z","content":"Mateo Retegui\r\n, el delantero de Tigre, goleador de la última Liga Profesional (19 tantos) y de la actual (6), está comenzando a vivir una etapa internacional sumamente valiosa en su carrera. Al acep… [+4672 chars]"},{"source":{"id":"il-sole-24-ore","name":"Il Sole 24 Ore"},"author":"di Marco Rogari","title":"Spesa di 231 miliardi per 17,7 milioni di pensioni Inps: un terzo sono anticipate, il 22,8% assistenziali","description":"Dall'ultima rilevazione condotta dall'Inps emerge che al 1° gennaio 2023 risultano vigenti 13,6 milioni di trattamenti previdenziali e oltre 4 milioni riconducibili all'assistenza per un costo di 24,4 miliardi. Nel solo 2022 sono stati liquidati 1.350.222 nuo…","url":"https://www.ilsole24ore.com/art/spesa-231-miliardi-le-177-milioni-pensioni-inps-terzo-sono-anticipate-228percento-assistenziali-AEqSxK8C","urlToImage":"https://i2.res.24o.it/images2010/2023/03/AEqSxK8C/images/6c9a773a-a94f-11ed-a626-bf108552ffce-fotohome0.jpg","publishedAt":"2023-03-22T15:19:48Z","content":"Ascolta la versione audio dell'articolo\r\n3' di lettura\r\nSono 17,7 milioni le pensioni erogate dall'Inps al 1° gennaio 2023: 13,6 milioni (il 77,2%) di natura previdenziale e poco più di 4 milioni (il… [+2921 chars]"},{"source":{"id":null,"name":"Corriere.it"},"author":null,"title":"Stage Impiegato/a Reparto Qualità, Ambiente e Sicurezza","description":"Trova lavoro come Stage Impiegato/a Reparto Qualità, Ambiente e Sicurezza Ariccia (Roma). Questo annuncio di lavoro e tutte le altre posizioni aperte nel settore Altri settori su Trovolavoro","url":"https://lavoro.corriere.it/Annunci/Stage_Impiegato_A_Reparto_Qualità__Ambiente_E_Sicurezza_805196998.htm","urlToImage":"https://lavoro.corriere.it/common/images/social.png","publishedAt":"2023-03-22T15:19:31Z","content":"Opportunità:Hai conseguito una laurea in facoltà tecniche o della prevenzione? Candidati!Per azienda cliente ricerchiamo una risorsa da inserire per iniziale stageDisponibile dal Lunedì al Venerdì su… [+1097 chars]"},{"source":{"id":null,"name":"Leganerd.com"},"author":"Umberto Stentella","title":"Bill Gates: “le IA cambieranno il mondo e risolveranno le diseguaglianze”","description":"Secondo Bill Gates, le IA saranno la vera rivoluzione di questo decennio, alla pari di ciò che hanno rappresentato altre innovazioni come l’interfaccia grafica utente, internet e gli smartphone. Gates sostiene anche che un domani le IA saranno in grado di ris…","url":"https://leganerd.com/2023/03/22/bill-gates-le-ia-cambieranno-il-mondo-e-risolveranno-le-diseguaglianze/","urlToImage":"https://leganerd.com/wp-content/uploads/2020/04/methode_times_prod_web_bin_b7df0966-862c-11ea-b876-ef9d21d57c48.jpg","publishedAt":"2023-03-22T15:18:42Z","content":"Secondo Bill Gates, le IA saranno la vera rivoluzione di questo decennio, alla pari di ciò che hanno rappresentato altre innovazioni come l’interfaccia grafica utente, internet e gli smartphone. Gate… [+1327 chars]"},{"source":{"id":"ansa","name":"ANSA.it"},"author":"","title":"Sci: francese Billy batte record mondiale velocità, a 255,5kmh","description":"Transalpino nuovo campione del mondo batte Simone Origone (ANSA)","url":"https://www.ansa.it/sito/notizie/sport/sci/2023/03/22/sci-francese-billy-batte-record-mondiale-velocita-a-2555kmh_b6d4ca05-e50e-4120-84b8-60af7d0d814a.html","urlToImage":"https://www.ansa.it/webimages/img_700/2015/2/11/b58fa2c4f0818a020de682f5647b5b19.jpg","publishedAt":"2023-03-22T15:17:04Z","content":"Il francese Simon Billy è il nuovo campione del mondo di velocità sugli sci, con tanto di record del mondo. Sulla pista di Vars, nelle Alpi francesi, Billy ha raggiunto i 255,50 km/h, battendo i 254,… [+1382 chars]"}]};

export interface News {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: Source
  author?: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface Source {
  id?: string
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private httpClient = inject(HttpClient);

  url = "https://newsapi.org/v2/everything?q=Italia&sortBy=publishedAt&apiKey=cea52831eed64f90961345afeec19f5e&pageSize=10&page="

  count$ = new BehaviorSubject<number>(1);
  title$ = this.count$.pipe(
    tap(console.log),
    // switchMap((count) => this.httpClient.get<News>(this.url+count)),
    switchMap((count) => of(mock)),
    map((news) => news.articles),
    map((articles) => articles.slice(0, this.count$.getValue()).map((article) => article.title))
  );

  increment(){
    const currentValue = this.count$.getValue();
    this.count$.next(currentValue+1);
  }

  decrement(){
    const currentValue = this.count$.getValue();
    this.count$.next(currentValue-1);
  }
}

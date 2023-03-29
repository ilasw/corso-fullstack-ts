import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap, map, from, concatMap, toArray, catchError, of } from 'rxjs';
import { Injectable, inject } from '@angular/core';

const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

export type Article = {id: number, title: string, time: number};

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private http = inject(HttpClient);
  // this.http.get(URL) .pipe()...

  // si possono usare entrambi o sono uno
  getArticles$(){
    const url = BASE_URL.concat(`/topstories.json`);
    return this.http.get<number[]>(url).pipe(
      // tap(console.log),
      map((ids) => ids.slice(0, 9)),
      // prendere questo array e riuscire
      // ad emettere un value per ogni elemento dell'array
      concatMap(array => from(array)),
      // tap(console.log),
      // Per ogni valore emesso eseguire una chiamata usando
      // un *Map che fa la chiamata *map((id) => this.http.get(,.,.))
      concatMap((id) => this.getArticleFromId$(id)),
      // gestiamo errore, se la chiamata fallisce torniamo null al posto di Article
      catchError(error => of(null)),
      // devo rimettere insieme i vari risultati
      toArray()
    )
  }
  // fare chiamata alla lista, prendere gli ID e poi per ogni id
  // chiamare l'endpoint di dettaglio.
  // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
  // [8863, ...]

  getArticleFromId$(id: number){
    return this.http.get<Article>(BASE_URL.concat(`/item/${id}.json`));
  }
  // https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
  // { text, time, ... };
}


// possiamo modificare il dato$ con blogService.dato$.next(NUOVO_VALORE);

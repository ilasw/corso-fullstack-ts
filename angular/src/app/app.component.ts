import { News, Article } from './types/news';
import { IntPipe } from './pipes/intl/int.pipe';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, map, of, tap, switchMap } from 'rxjs';
import { mock } from './mocks/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {

  // - Output
  // - TS - Function overloads
  // - Post pranzo - Animations
  // - M/P - Routing
  // - P - Services

  isModalOpen = false;

  nan = NaN;
  developer = {
    firstName: 'John',
    lastName: 'Doe',
    skills: ['JavaScript', 'TypeScript']
  }

  date = new Date();

  url = "https://newsapi.org/v2/everything?q=Italia&sortBy=publishedAt&apiKey=cea52831eed64f90961345afeec19f5e&pageSize=10&page="

  // RxJS && TypeScript
  count$ = new BehaviorSubject<number>(1);
  title$ = this.count$.pipe(
    tap(console.log), // tap: esegue operazioni esterne
    // switchMap((count) => this.httpClient.get<News>(this.url+count)),
    switchMap((count) => of<[News, number]>([mock, count])), // prende un valore, e torna un nuovo Osservabile
    map<[News, number], [Article[], number]>(([news, count]) => [news.articles, count]), // prende un valore e ne torna un'altro
    map(([articles, count]) => articles.slice(0, count).map((article) => article.title))
  );

  increment(){
    const currentValue = this.count$.getValue();
    this.count$.next(currentValue+1);
  }

  decrement(event: UIEvent){
    event.preventDefault();

    const currentValue = this.count$.getValue();
    this.count$.next(currentValue-1);
  }

  // La classe viene istanziata ma non è ancora stata renderizzata
  constructor(){
    const pipe = new IntPipe();
    console.log(pipe.transform('10', 'number', {style: 'currency', currency: 'EUR'}));
  }

  // Viene lanciato appena viene fatto il passaggio di props, ma ancora alcuni elementi potrebbero non essere pronti
  ngOnInit(){

  }

  // Siamo sicuri che l'HTML sia stato caricato
  ngAfterViewInit(): void {
    // Viene usato per avere accesso agli elementi del DOM
  }

  // Metodo viene eseguito quando le props cambiano
  ngOnChanges(changes: SimpleChanges): void {

  }

  handleClickedOnNav(event: any){
    console.log({event});
  }
}

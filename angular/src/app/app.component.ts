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

  // ok - Output
  // ok - TS - Function overloads
  // ok - Post pranzo - Animations
  // - M/P - Routing
  // - P - Services

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

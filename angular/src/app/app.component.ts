import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {

  // Direttive
  // HttpInterceptor
  // Signals (opt.)

  userRole = 'guest'

  /*

    Scrivere un service dentro la nostra applicazione che espone un counter$
    e due metodi: increase() e decrease().

    Usare i metodi in due componenti diversi tramite counterService.decrease()
    e mostrare il counter aggiornato in entrambi in modo reattivo;

  */

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

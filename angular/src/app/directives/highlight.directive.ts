import { AfterViewChecked, Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements AfterViewChecked  {

  element = inject(ElementRef<HTMLElement>);
  initialColors: Record<'color'|'background', string>;

  @Input() appHighlight:string = 'blue';
  @Input() appBackgroundColor:string = 'transparent';

  /*
    Creare una direttiva appAccordion che permette di aprire/chiudere un elemento al click;
     - la direttiva funziona solo se all'interno del mio elemento ho un <button>;
     - Al caricamento devo prendere l'altezza del mio elemento e salvarla;
     - Al click sul button voglio chiudere il mio elemento, lasciando visibile solo il button.
     - Il button deve essere sempre il primo elemento all'interno dell'HTML della direttiva.

     - TIPS:
      - usare "overflow:hidden;";
      - Per l'animazione di chiusura "transition" con "max-height";
      - Calcolo l'altezza naturale dell'elemento all'inizio, poi la salvo;
      - Devo animare portando max-height: ALTEZZA_INIZIALEpx -> ALTEZZA_BUTTON;
  */

  constructor() {
    const {color, background} = window.getComputedStyle(this.element.nativeElement);
    this.initialColors = {color, background};
  }

  ngOnInit(){
    console.log('sto per cambiare lo style.color')
    this.element.nativeElement.style.color = this.appHighlight;
    this.element.nativeElement.style.background = this.appBackgroundColor;
  }

  ngAfterViewChecked(): void {
    console.log(this.element, this.appHighlight)
  }

  @HostListener('mouseleave')
  onHoverClear(){
    // console.log(this.appHighlight);
    this.element.nativeElement.style.color = this.appHighlight;
    this.element.nativeElement.style.background = this.appBackgroundColor;
  }

  @HostListener('mouseenter')
  onHover(){
    console.log('initial color:', this.initialColors);
    const {color, background} = this.initialColors;
    this.element.nativeElement.style.color = color;
    this.element.nativeElement.style.background = background;
  }
}

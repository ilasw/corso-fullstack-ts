import { Component } from '@angular/core';

// Accordion group: è un componente che orchestra più componenti AccordionItem
// Al click sull'intestazione di un componente `AccordionItem` dovremo emettere un evento
// Il componente padre dovrà ascoltare gli eventi dei singoli elementi e capire cosa fare
// Passiamo lo stato di aperto/chiuso dal componente padre ai figli

// Da ricordare: dobbiamo avere al massimo 1 elemento aperto per volta!

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.scss'],
})
export class AccordionGroupComponent {
  items: Array<{ heading: string; content: string }> = [
    { heading: 'HTML', content: '...' },
    { heading: 'CSS', content: '...' },
    { heading: 'JavaScript', content: '...' },
  ];

  currentOpen: null | number = null;

  toggle(index: number) {
    const isTheOpenOne = index === this.currentOpen;
    this.currentOpen = isTheOpenOne ? null : index;
  }
}

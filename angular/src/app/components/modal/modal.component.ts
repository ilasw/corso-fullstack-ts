import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() isOpen: boolean = false;

  /*

  Scrivere un componente modale.
  Una modale non è altro che un div in posizione fixed che si
  pone sopra tutti gli altri elementi della pagina.
  Viene caratterizzata da due elementi:
   - Una shadow, che è uno sfondo generalmente scuro;
   - Un modal-body che è il nostro div con sfondo bianco che contiente HTML

  Al click sulla shadow dobbiamo far chiudere la modale.

  Bonus: Mettiamo dentro la modale un bottone "Accetta" che al click fa
  chiudere la modale, per differenziarlo dalla chiusura "shadow" emettiamo
  un valore differente. Il componente padre deve fare un console.log particolare
  quando questo avviene.

  Il componente deve mostrare il suo contenuto solo se @Input isOpen è true;
  Emettere un evento al click su shadow (e eventuale button accetta).

  */
}

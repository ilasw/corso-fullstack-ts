import {
  animate,
  animation,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, scale: 0, rotate: 0 }),
        animate('350ms', style({ opacity: 1, scale: 1 })),
      ]),
      transition(':leave', [animate('1s', style({ opacity: 0, scale: 0 }))]),
    ]),
    trigger('shadowEntrance', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() toggleOpen = new EventEmitter<string>();
}

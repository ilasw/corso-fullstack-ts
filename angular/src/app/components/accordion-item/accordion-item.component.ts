import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {
  @Input() item!: { heading: string, content: string };
  @Input() isOpen: boolean = false;

  @Output() clickOnButton = new EventEmitter();
}

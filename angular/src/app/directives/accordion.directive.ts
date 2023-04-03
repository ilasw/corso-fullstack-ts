import {
  Directive,
  inject,
  ElementRef,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appAccordion]',
})
export class AccordionDirective implements OnInit {
  elementRef = inject(ElementRef);
  initialHeight: number | null = null;
  isOpen: boolean = true;
  firstButton: HTMLButtonElement | null = null;

  ngOnInit(): void {
    const wrapperEl: HTMLElement = this.elementRef.nativeElement;

    if (
      !wrapperEl.firstChild ||
      !(wrapperEl.firstChild instanceof HTMLButtonElement)
    )
      return;

    wrapperEl.style.overflow = 'hidden';
    wrapperEl.style.transition = 'max-height .4s ease';
    wrapperEl.style.willChange = 'max-height';

    this.firstButton = wrapperEl.firstChild;
    this.initialHeight = wrapperEl.getBoundingClientRect().height;
    wrapperEl.style.maxHeight = this.initialHeight + 'px';
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    const closestButton = target?.closest?.('button');

    if (
      typeof this.initialHeight === 'object' ||
      !this.firstButton ||
      closestButton !== this.firstButton
    ) {
      return;
    }

    this.isOpen = !this.isOpen;
    const newMaxHeight = this.isOpen
      ? this.initialHeight
      : closestButton.offsetHeight;
    this.elementRef.nativeElement.style.maxHeight = `${newMaxHeight}px`;
  }
}

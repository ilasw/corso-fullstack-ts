import { SwiperInstance, Swiper as SwiperType } from 'tiny-swiper/types/core';
import { categoriesMock } from './../../mocks/categories';
import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';
import Swiper from 'tiny-swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  componentEl = inject(ElementRef);
  categories = categoriesMock;

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const el = this.componentEl;
    console.log(el?.nativeElement?.getBoundingClientRect?.());
  }

  // isModalOpen = false;

  // toggle(source:string) {
  //   this.isModalOpen = !this.isModalOpen;
  //   console.log(`La modale si è chiusa cliccado su:`, source);
  // }
}

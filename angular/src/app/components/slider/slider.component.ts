import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper, { SwiperInstance } from 'tiny-swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('element') mioElemento!: ElementRef<HTMLElement>;
  slider?: SwiperInstance;

  ngAfterViewInit() {
    if (this.mioElemento?.nativeElement) {
      const sliderInstance = new Swiper(this.mioElemento.nativeElement);
      console.log(sliderInstance);
      this.slider = sliderInstance;
    }
  }
}

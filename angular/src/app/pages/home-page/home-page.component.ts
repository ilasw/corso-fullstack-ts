import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isModalOpen = false;

  toggle(source:string) {
    this.isModalOpen = !this.isModalOpen;
    console.log(`La modale si è chiusa cliccado su:`, source);
  }
}

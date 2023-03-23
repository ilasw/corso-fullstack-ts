import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;

  increment(){
    this.count += 1
  }

  decrement(){
    this.count -= 1;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private httpClient = inject(HttpClient)

  // cea52831eed64f90961345afeec19f5e
  count = 0;
  items: string[] = ['Pippo', 'pluto', 'paperino'];

  url = "https://newsapi.org/v2/everything?q=Italia&sortBy=publishedAt&apiKey=cea52831eed64f90961345afeec19f5e&page=2&pageSize=10"

  increment(){
    this.count += 1
    console.log(this.httpClient);

    this.httpClient.get(this.url)
    .subscribe((value) => console.log({value}))
  }

  decrement(){
    this.count -= 1;
  }
}

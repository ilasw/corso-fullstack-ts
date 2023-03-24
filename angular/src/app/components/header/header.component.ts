import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navItems!: Array<string>;

  prop: string = 'pippo';

  constructor(){
    console.log(`I'm a beliver`);
    console.log(this.navItems);
  }

  ngOnInit(): void {
    console.log('on init');
    console.log('navItems:', this.navItems);
  }

}

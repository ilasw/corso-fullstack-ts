import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navItems!: Array<string>;

  constructor(){
    console.log(`I'm a beliver`);
    console.log(this.navItems);
  }

  ngOnInit(): void {
    console.log('on init');
    console.log('navItems:', this.navItems);
  }
}

import { BlogService } from './../../services/blog.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navItems!: Array<string>;
  @Output() logoClicked = new EventEmitter();

  // private blogService = inject(BlogService);
  public count$ = this.blogService.dato$;
  count = this.blogService.dato;
  obj = this.blogService.obj;

  constructor(private blogService: BlogService){
    console.log(`Non riesco a leggere la props e torno undefined`);
    console.log(this.navItems); // undefined
  }

  ngOnInit(): void {
    console.log('on init');
    console.log('navItems:', this.navItems); // [...]
  }

  logoClickHandler(){
    this.logoClicked.emit('Sono un valore emesso al click del logo');
  }
}

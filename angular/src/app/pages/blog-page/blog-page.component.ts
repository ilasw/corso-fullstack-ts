import { BlogService } from './../../services/blog.service';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {

  private route = inject(ActivatedRoute);
  public blogService = inject(BlogService);

  articles$ = this.route.data.pipe(map((data) => data['articles']??[]));

  updateDato(){
    const oldValue = this.blogService.dato$.getValue();
    this.blogService.dato$.next(oldValue+1);
  }
}

import { BlogService } from './../../services/blog.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {
  public blogService = inject(BlogService);

  articles$ =  this.blogService.getArticles$()

}

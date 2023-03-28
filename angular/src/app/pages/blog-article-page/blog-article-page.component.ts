import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs';

@Component({
  selector: 'app-blog-article-page',
  templateUrl: './blog-article-page.component.html',
  styleUrls: ['./blog-article-page.component.scss']
})
export class BlogArticlePageComponent implements OnInit {

  private route = inject(ActivatedRoute);

  article$ = this.route.data.pipe(
    map((data) => data['article'])
  );

  ngOnInit(){
    console.log(this.route);
    const snapshop = this.route.snapshot;
    const initialData = this.route.snapshot.data;

    console.log({initialData});
  }

}

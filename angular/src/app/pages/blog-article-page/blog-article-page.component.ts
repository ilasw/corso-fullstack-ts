import { BlogService } from './../../services/blog.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap, switchMap, filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-blog-article-page',
  templateUrl: './blog-article-page.component.html',
  styleUrls: ['./blog-article-page.component.scss'],
})
export class BlogArticlePageComponent {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  article$ = this.route.params.pipe(
    tap(console.log), // { id: 5284592 }
    map((params) => params.id),
    filter(Boolean),
    switchMap((id) => this.blogService.getArticleFromId$(id))
  );

  // Metodo alternativo senza l'auto-subscribe di |async
  // destroyed$ = new Subject();
  // article?: Article;

  // ngOnInit() {
  //   console.log(this.route);
  //   const snapshot = this.route.snapshot;
  //   console.log({ snapshot });

  //  this.route.params.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
  //    const id = params['id'];
  //    this.blogService.getArticleFromId$(id).subscribe((article) => {
  //      this.article = article;
  //    });
  //  });
  //  }

  // ngOnDestroy(): void {
  //   this.destroyed$.next(true);
  // }
}

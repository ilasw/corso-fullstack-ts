import { BlogArticlePageComponent } from './pages/blog-article-page/blog-article-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: HomePageComponent,
  },
  {
    title: 'Blog',
    path: 'blog',
    children: [
      {
        path: '',
        component: BlogPageComponent,
        data: {
          // creiamo dentro il blog-page.component una lista di articoli che passiamo da data
          // cliccando su un articolo navigiamo su /blog/:slug usando un routerLink
          articles: [
            {
              title: 'Il Catania va in serie C',
              date: new Date(),
              slug: 'catania-serie-c',
            },
          ],
        },
      },
      {
        path: ':slug',
        component: BlogArticlePageComponent,
        // mostrare il dato statico
        data: {
          article: {
            title: 'Il Catania va in serie C',
            data: new Date(),
            slug: 'catania-serie-c',
          },
        },
      },
      {
        path: ':slug/edit',
        component: HomePageComponent,
      },
    ],
  },
  {
    title: '404 - Not Found',
    path: '**',
    component: EmptyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

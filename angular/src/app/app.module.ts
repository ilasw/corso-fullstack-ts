import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@/components/header/header.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { ToDoubledNumberPipe } from './pipes/to-doubled-number/to-doubled-number.pipe';
import { IntPipe } from './pipes/intl/int.pipe';
import { CastArrayPipe } from './pipes/cast-array/cast-array.pipe';
import { AccordionGroupComponent } from './components/accordion-group/accordion-group.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogArticlePageComponent } from './pages/blog-article-page/blog-article-page.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavItemComponent,
    CapitalizePipe,
    ToDoubledNumberPipe,
    IntPipe,
    CastArrayPipe,
    AccordionGroupComponent,
    AccordionItemComponent,
    ModalComponent,
    HomePageComponent,
    EmptyPageComponent,
    BlogPageComponent,
    BlogArticlePageComponent,
    InputSelectComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

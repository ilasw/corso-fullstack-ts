import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@/components/header/header.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ToDoubledNumberPipe } from './pipes/to-doubled-number.pipe';
import { IntPipe } from './pipes/int.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavItemComponent,
    CapitalizePipe,
    ToDoubledNumberPipe,
    IntPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

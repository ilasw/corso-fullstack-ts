import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ModalComponent
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

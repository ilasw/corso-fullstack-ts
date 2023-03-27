import { CastArrayPipe } from './pipes/cast-array/cast-array.pipe';
import { ToDoubledNumberPipe } from './pipes/to-doubled-number/to-doubled-number.pipe';
import { HeaderComponent } from '@/components/header/header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { IntPipe } from './pipes/intl/int.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        NavItemComponent,
        CapitalizePipe,
        ToDoubledNumberPipe,
        IntPipe,
        CastArrayPipe
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'angular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('angular');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular app is running!');
  // });
});

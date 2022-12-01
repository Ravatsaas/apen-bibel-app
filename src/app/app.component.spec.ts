import { TestBed, waitForAsync } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownViewerComponent } from './markdown-viewer/markdown-viewer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BibleNavigationComponent } from './bible-navigation/bible-navigation.component';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent,
        MarkdownViewerComponent,
        FrontPageComponent,
        BibleNavigationComponent
      ],
      imports: [
        MatSidenavModule,
        MatTreeModule,
        MatMenuModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        MarkdownModule,
        MatButtonModule,
        MatCardModule,
        FontAwesomeModule
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain a side nav', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-sidenav-container').querySelector('mat-sidenav')).toBeTruthy();
  }));

  it('should contain a router outlet', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));

});

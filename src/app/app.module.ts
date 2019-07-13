import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { BibleNavigationButtonComponent } from './bible-navigation-button/bible-navigation-button.component';
import { MarkdownViewerComponent } from './markdown-viewer/markdown-viewer.component';
import { FrontPageComponent } from './front-page/front-page.component';

const appRoutes: Routes = [
  { path: 'tekst/:book/:chapter', component: MarkdownViewerComponent },
  { path: '**', component: FrontPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BibleNavigationButtonComponent,
    MarkdownViewerComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatTreeModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

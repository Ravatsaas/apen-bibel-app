import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { MarkdownViewerComponent } from './markdown-viewer/markdown-viewer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faBookReader, faAngleLeft, faAngleRight, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { BibleNavigationComponent, BibleNavigationDialogComponent } from './bible-navigation/bible-navigation.component';

const appRoutes: Routes = [
  { path: 'tekst/:book/:chapter', component: MarkdownViewerComponent },
  { path: 'tekst', component: MarkdownViewerComponent },
  { path: '**', component: FrontPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MarkdownViewerComponent,
    FrontPageComponent,
    SidebarComponent,
    BibleNavigationComponent,
    BibleNavigationDialogComponent
  ],
  entryComponents: [
    BibleNavigationDialogComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    library.add(faHome);
    library.add(faBookReader);
    library.add(faAngleLeft);
    library.add(faAngleRight);
    library.add(faLocationArrow);
  }
}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { BibleNavigationDialogComponent } from './bible-navigation-dialog-component';

interface BibleLocation {
  book: string;
  chapter: string;
}

@Component({
  selector: 'app-bible-navigation',
  templateUrl: './bible-navigation.component.html',
  styleUrls: ['./bible-navigation.component.css']
})
export class BibleNavigationComponent implements OnInit {
  faLocationArrow = faLocationArrow;

  public selectedBook: string;
  public selectedChapter: string;
  public canGoToPrevious = false;
  public canGoToNext = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.pipe(
      map((params: ParamMap) => (<BibleLocation>{book: params.get('book'), chapter: params.get('chapter')}))
    ).subscribe({
      next: routeParams => {
        if (!routeParams.book) {
          this.goToLocation(<BibleLocation>{book: 'Matteus', chapter: '1'});
          return;
        }
        if (!routeParams.chapter) {
          this.goToLocation(<BibleLocation>{book: routeParams.book, chapter: '1'});
        }
        this.selectedBook = routeParams.book;
        this.selectedChapter = routeParams.chapter;
      }
    });
  }

  private goToLocation(loc: BibleLocation) {
    if (loc.book === this.selectedBook && loc.chapter === this.selectedChapter) {
      return;
    }
    this.router.navigate(['tekst', loc.book, loc.chapter], {skipLocationChange: true});
  }


  public openDialog() {
    const dialogRef = this.dialog.open(BibleNavigationDialogComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
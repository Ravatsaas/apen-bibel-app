import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { IBookModel, IChapterModel } from '../../model/IBookModel';
import { ContentService } from '../../services/content.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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

@Component({
  selector: 'app-bible-navigation-dialog',
  templateUrl: './bible-navigation-dialog.component.html'
})
export class BibleNavigationDialogComponent implements OnInit {
  public toc$: Observable<IBookModel[]>;
  public selectedBook: IBookModel;

  constructor(
    public dialogRef: MatDialogRef<BibleNavigationDialogComponent>,
    private contentService: ContentService
    ) {}

  ngOnInit() {
    this.toc$ = this.contentService.getTableOfContent();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

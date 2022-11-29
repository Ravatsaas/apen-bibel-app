import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IBookModel } from '../../model/IBookModel';
import { ContentService } from '../../services/content.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-bible-navigation-dialog',
    templateUrl: './bible-navigation-dialog.component.html',
    styleUrls: ['./bible-navigation-dialog.component.css']
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
  
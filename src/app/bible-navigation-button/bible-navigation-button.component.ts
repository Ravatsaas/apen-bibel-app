import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IBookModel } from '../../model/IBookModel';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-bible-navigation-button',
  templateUrl: './bible-navigation-button.component.html',
  styleUrls: ['./bible-navigation-button.component.css']
})
export class BibleNavigationButtonComponent implements OnInit {

  public books: Observable<IBookModel[]>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.books = this.contentService.getTableOfContent();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.css']
})
export class MarkdownViewerComponent implements OnInit {

  public document$: Observable<string | undefined>;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit() {
    this.document$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.getDocument(params.get('book'), params.get('chapter'))
      )
    );

    this.markdownService.renderer.code = (text: string, language: string) => {
      return `<p class="formatted-text">${text}</p>`;
    };
  }

  public getDocument(book: string, chapter: string): Observable<string> {
    if (!book || !chapter) {
      return new Observable<string>();
    }

    return this.contentService.getTableOfContent().pipe(
      switchMap(toc => {
        const bookObj = toc.find(b => b.lbl === book);

        if (!bookObj) {
          console.log(`Could not find book ${book} in the table of content`);
          return new Observable<string>();
        }

        const chapterObj = bookObj.toc.find(c => c.lbl === chapter);
        if (!chapterObj) {
          console.log(`Could not find chapter ${chapter} in the table of content for ${book}`);
          return new Observable<string>();
        }

        return this.contentService.getDocument(bookObj.dir, chapterObj.fnm);
      })
    );
  }
}

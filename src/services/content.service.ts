import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IBookModel } from '../model/IBookModel';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private tocUrl = 'assets/static-data/toc.json';
  private documentUrlRoot = 'https://raw.githubusercontent.com/Ravatsaas/apen-bibel/master/Tekst/';

  constructor(private http: HttpClient) { }

  getTableOfContent(): Observable<IBookModel[]> {
    return this.http.get<IBookModel[]>(this.tocUrl);
  }

  getDocument(book: string, chapter: string): Observable<string> {
    return this.http.get(this.documentUrlRoot + book + '/' + chapter, {responseType: 'text'});
  }
}

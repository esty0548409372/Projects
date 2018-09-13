import { Injectable } from '@angular/core';
import { Observable, Subject } from '../../../../node_modules/rxjs';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  subject = new Subject();
  // subjectDetails=new Subject();
  constructor(private http: HttpClient) { }

  getAllProducts(filterByMe): Observable<any> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=
    
    ${filterByMe}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`);
  }
  getMyProducts() {
    return localStorage.getItem("productsList");
  }

  // 
}

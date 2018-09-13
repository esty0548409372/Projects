import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;nativeName;capital;population;flag');
  }
}

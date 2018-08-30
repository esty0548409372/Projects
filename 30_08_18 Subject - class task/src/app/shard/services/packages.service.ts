import { Injectable } from '@angular/core';
import { Subject } from 'node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  subject = new Subject();
  subject2 = new Subject();
  subject3 = new Subject();

  constructor(private http: HttpClient) { }


  getPakcages(input: string) {
    return this.http.get(`https://api.npms.io/v2/search/suggestions?q=${input}&size=40`);

  }


  getPackageByDate(name, arrDate) {
    return this.http.get(`https://api.npmjs.org/downloads/point/${arrDate[0]}:${arrDate[1]}/${name}`);
  }

}

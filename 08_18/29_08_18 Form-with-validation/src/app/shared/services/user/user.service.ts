import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3800/api/user";
  addPerson(user) {

    return this.http.post(this.url, user).subscribe(res => {
      alert("user added to list")
    }
    ), err => {
      alert("user not added to list")
    }
  }

}

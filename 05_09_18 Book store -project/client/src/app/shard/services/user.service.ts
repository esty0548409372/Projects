import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginItems: any = [];
    //can enter to cart if has user in login
  subjectMyCart=new Subject();
  constructor(private http: HttpClient) { }

  addUser(newUser: any) {
    return this.http.post("http://localhost:3500/api/registerBookStore", newUser);
  }

  login(newLogin: any) {
    //check if login successful 
    return this.http.post("http://localhost:3500/api/loginBookStore", JSON.parse(JSON.stringify(newLogin)))
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}

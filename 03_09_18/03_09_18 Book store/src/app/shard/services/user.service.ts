import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginItems: any = [];
  constructor(private http: HttpClient) { }

  addUser(newUser: any) {
    return this.http.post("http://localhost:3500/api/userBookStore", newUser);
  }

  login(newLogin: any) {
    // this.loginItems[0] = username;
    // this.loginItems[1] = password;
    //check if login successful 
    return this.http.post("http://localhost:3500/api/loginBookStore", JSON.parse(JSON.stringify(newLogin)))
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}

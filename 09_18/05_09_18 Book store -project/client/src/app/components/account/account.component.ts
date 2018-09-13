import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  //chek if need logout button- if has user login
  currentUser: any = localStorage.getItem('currentUser');
  constructor() { }

  logout() {
    localStorage.clear();
    //remove logout button
    this.currentUser = localStorage.getItem('currentUser');
  }

}

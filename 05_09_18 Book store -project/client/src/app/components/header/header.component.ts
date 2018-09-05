import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shard/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: boolean = false;
  localStorage = localStorage;
  json = JSON;
  constructor(private userService: UserService) { }

  ngOnInit() {
    //if show my cart
    this.userService.subjectMyCart.subscribe(
      {
        next: () => {
          if (localStorage.getItem('currentUser'))
            this.currentUser = true;
        }
      }
    )
  }
}

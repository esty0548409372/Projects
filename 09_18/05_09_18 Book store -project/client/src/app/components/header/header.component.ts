import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shard/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  localStorage = localStorage;
  json = JSON;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }
}

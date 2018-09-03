import { Component, OnInit } from '@angular/core';
import { Store } from '../../shard/models/store';
import { store } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myStore: Store = new Store();
  constructor() {

    this.myStore.name = "bookStore";
    this.myStore.city = "Bney-Brak";
    this.myStore.street = "Gefen"
    this.myStore.numHome = 50;
  }

  ngOnInit() {
  }


}

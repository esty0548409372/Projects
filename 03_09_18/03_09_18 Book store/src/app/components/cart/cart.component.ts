import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shard/services/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCart: any = [];
  constructor(private bookService: BookService) { }
  // this.myCart=this.bookService.getMyCart();

  //   this.bookService.subject.subscribe(
  //     {
  //       next: (res: any) => { console.log(res); this.myCart = localStorage.getItem("productsList"); console.log(this.myCart); }
  //     }
  //   )
  // }

  ngOnInit() {
    this.myCart =JSON.parse(this.bookService.getMyProducts()) ;
    console.log(this.myCart);
    // if (!this.myCart)
    //   t

  }
  removeFromCart(){

  }
}

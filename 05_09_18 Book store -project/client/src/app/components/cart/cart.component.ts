import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shard/services/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCart: any = [];
  productsList: any = []
  localStorage = localStorage;
  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.productsList = this.bookService.getCurrentList();
    // this.myCart = JSON.parse(localStorage.getItem("productsList"));

    //remove from cart
    this.bookService.subject.subscribe(
      {
        next: (book: any) => {
          this.removeFromCart(book);

        }
      }
    )
  }

  removeFromCart(book: any) {
    let index = this.productsList.indexOf(book);
    this.productsList.splice(index, 1);
    localStorage.setItem("productsList", JSON.stringify(this.productsList));
  }
}

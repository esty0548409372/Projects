import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shard/services/book.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts: any = [];
  filterByMe: string;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.filterListBook("a");
  }

  filterListBook(e) {
    if (typeof e != "string") {
      this.filterByMe = e.target.value;
      this.bookService.getAllProducts(this.filterByMe).subscribe(data => {
        console.log(data);
        this.listProducts = data['items'];
      })
    } else {
      this.filterByMe = e;
      this.bookService.getAllProducts(this.filterByMe).subscribe(data => {
        console.log(data);
        this.listProducts = data['items'];
      })
    }
  }
}


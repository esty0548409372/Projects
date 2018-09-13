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
  }

  filterListBook(e) {
    this.filterByMe = e.target.value;
    this.bookService.getAllProducts(this.filterByMe).subscribe(data => { this.listProducts = data['items']});
  }

}

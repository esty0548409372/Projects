import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../shard/services/book.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  @Input() book: any;
  constructor(private bookService:BookService) { }

  ngOnInit() {
  }

  removeFromCart() {
    //call to subject 
    this.bookService.subject.next(this.book);
  }

}

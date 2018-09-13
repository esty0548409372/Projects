import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../shard/services/book.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  @Input() book: any;
  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit() { }

  getCurrentList() {
    let list = localStorage.getItem("productsList");  //if "peopleList" does not exist in the local storage we will get null
    return (list) ? JSON.parse(list) : [];
  }

  addToCart() {
    let currentList = this.getCurrentList();
    currentList.push(this.book.volumeInfo);
    localStorage.setItem("productsList", JSON.stringify(currentList));

    //call to subject 
    // this.bookService.subject.next(this.book);
  }
  openDetails(){
    this.router.navigate(['/productsDetails',this.book.volumeInfo]);
  }
}

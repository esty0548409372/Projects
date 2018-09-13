import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../shard/services/book.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  @Input() book: any;
  userLogin:any;
  constructor(private router:Router,private bookService:BookService) {
    //chek if has user in login
    this.userLogin=JSON.parse(localStorage.getItem("currentUser"));
   }

  ngOnInit() { }


  addToCart() {
    let currentList = this.bookService.getCurrentList();
    currentList.push(this.book.volumeInfo);
    localStorage.setItem("productsList", JSON.stringify(currentList));
  }
  openDetails(){
    this.router.navigate(['/bookStore/productsDetails',this.book.volumeInfo]);
  }
}

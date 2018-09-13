import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shard/services/book.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  book: any;
  constructor(private bookService: BookService, private activeRouter: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.activeRouter.params.forEach(p => {
      console.log(p);
      this.book = p
    }
    );
  }
  backToList(){
    this.router.navigate(['/products']);
  }

}

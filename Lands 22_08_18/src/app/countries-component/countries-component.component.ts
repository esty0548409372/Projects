import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-countries-component',
  templateUrl: './countries-component.component.html',
  styleUrls: ['./countries-component.component.css']
})
export class CountriesComponentComponent implements OnInit {
  listCountries: any;
  input:string;
  constructor(private service: MyServiceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data =>{this.listCountries= data } );
  }

}

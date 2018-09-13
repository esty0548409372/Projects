import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../shard/services/packages.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent{

  listPackage: any;
  constructor(private packageSrvice: PackagesService) {
    
 
    this.packageSrvice.subject.subscribe(
      {
        next: (res: any) => this.listPackage = res
      }
    )
    //add downloads to the list - get start and end date
    this.packageSrvice.subject2.subscribe(
      {
        next: (res: any) => {
          for (let i = 0; i < this.listPackage.length; i++) {
            this.packageSrvice.getPackageByDate(this.listPackage[i]["package"].name, res).subscribe((res) =>
              this.listPackage[i]["package"].download = res["downloads"]
            )
          }
        }
      }
    )
  }
}

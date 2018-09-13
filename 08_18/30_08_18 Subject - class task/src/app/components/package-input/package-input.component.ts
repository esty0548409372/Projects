import { Component } from '@angular/core';
import { PackagesService } from '../../shard/services/packages.service';

@Component({
  selector: 'app-package-input',
  templateUrl: './package-input.component.html',
  styleUrls: ['./package-input.component.css']
})
export class PackageInputComponent {

  constructor(private packageSrvice: PackagesService) { }

  listPakages: any;

  onKeyPress(e) {
    this.packageSrvice.getPakcages(e.target.value).subscribe((res) => {
      this.packageSrvice.subject
        .next(res);
    });
  }
  //when the name change and not the date
  changeNameOfPackage(){
    this.packageSrvice.subject3.next();
  }
}

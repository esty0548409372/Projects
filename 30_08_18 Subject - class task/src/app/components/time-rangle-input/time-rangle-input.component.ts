import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../shard/services/packages.service';

@Component({
  selector: 'app-time-rangle-input',
  templateUrl: './time-rangle-input.component.html',
  styleUrls: ['./time-rangle-input.component.css']
})
export class TimeRangleInputComponent {
  listPackageByName: any;
  dateStart: any;
  dateEnd: any;
  arrDate: any;

  constructor(private packageSrvice: PackagesService) {
    this.arrDate = ["1950-01-01", "2050-01-01"];
    
    //return null if the name of package changed and not the date
    this.packageSrvice.subject3.subscribe(
      {
        next: () => this.dateCange(null)
      }
    );
  }

  dateCange(e) {
    if (e) {
      if (e.target.id == "startDate")
        this.arrDate[0] = e.target.value;
      else this.arrDate[1] = e.target.value;
    }
    this.packageSrvice.subject2.next(this.arrDate);
  }
}

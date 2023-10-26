import { Component,OnInit } from '@angular/core';
import {StaffService} from '../service/staff.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
staffData:any;
  constructor(private staffService: StaffService) {}

  ngOnInit() {
    this.staffService.getstaff().subscribe(
      (res:any) => {
        this.staffData = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
 
}

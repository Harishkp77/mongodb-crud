import { Component,OnInit } from '@angular/core';
import {StaffService} from '../service/staff.service';


@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
staffData:any;
shiftToTectBox:any;


  constructor(private staffService: StaffService) {}

  ngOnInit() {
    this.refresh();

  }

refresh(){
  this.staffService.getstaff().subscribe(
    (res:any) => {
      this.staffData = res.reverse();
     
    },
    (err) => {
      console.log(err);
    }
  );
}

 
  editStaff(clickedData:{}){
    this.shiftToTectBox=clickedData;
   


  }
  deleteStaff(clickedData:any){

  }
}

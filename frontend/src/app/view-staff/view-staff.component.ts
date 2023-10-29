import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffService } from '../service/staff.service';
import { StaffRegistrationComponent } from '../staff-registration/staff-registration.component';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css'],
})
export class ViewStaffComponent implements OnInit {
  staffData: any;
  shiftToTectBox: any;
  @ViewChild(StaffRegistrationComponent) staffRegisterComponent:
    | StaffRegistrationComponent
    | undefined;

  constructor(private staffService: StaffService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.staffService.getstaff().subscribe(
      (res: any) => {
        this.staffData = res.reverse();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editStaff(clickedData: {}) {
    this.shiftToTectBox = clickedData;
  }

  deleteStaff(clickedData: {}) {
    this.staffService.deleteStaff(clickedData).subscribe(
      (res) => {
        console.log('data deleted sucessfully');
        this.refresh();
        this.staffRegisterComponent!.onCancel();
      },
      (err) => {
        console.log('not data deleted');
      }
    );
  }
}

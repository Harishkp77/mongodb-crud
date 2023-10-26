import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff-registration',
  templateUrl: './staff-registration.component.html',
  styleUrls: ['./staff-registration.component.css'],
})

export class StaffRegistrationComponent {
  staff = {
    firstName: '',
    lastName: '',
    age: '',
    phonenumber: '',
    emailid: '',
  };

  constructor(private staffService: StaffService) {}

  onSubmit(data: NgForm) {
    this.staff = data.value;
    // const jsonData = JSON.stringify(this.staff);
    this.staffService.registerStaff(this.staff).subscribe(
      (res) => {
        console.log('Staff registered successfully:', res);
      },
      (err) => {
        console.log('staff registered failed', err);
      }
    );
  }
}

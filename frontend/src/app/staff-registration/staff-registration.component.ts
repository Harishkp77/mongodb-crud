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
  isSuccess: boolean = false;

  constructor(private staffService: StaffService) {}

  onSubmit(data: NgForm) {
    this.staff = data.value;
    this.staffService.registerStaff(this.staff).subscribe(
      (res) => {
        console.log('Staff registered successfully:', res);
        data.resetForm();
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
        }, 5000);
      },
      (err) => {
        console.log('staff registered failed', err);
      }
    );
  }




  
}

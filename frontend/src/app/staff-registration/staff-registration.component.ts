import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff-registration',
  templateUrl: './staff-registration.component.html',
  styleUrls: ['./staff-registration.component.css'],
})
export class StaffRegistrationComponent implements OnChanges {
  staff = {
    firstName: '',
    lastName: '',
    age: '',
    phonenumber: '',
    emailid: '',
  };

  isEditMode: boolean = false;
  isSuccess: boolean = false;
  isUpdateSuccess:boolean= false;
  @Output() refreshViewStaff: EventEmitter<any> = new EventEmitter<any>();
  @Input('FromParent') receivedStaff: ReceivedStaff | null = null;

  constructor(private staffService: StaffService) {}

  ngOnChanges(changes: any) {
    if (changes.receivedStaff && this.receivedStaff != null) {
      this.isEditMode = true;
    }
  }

  onSubmit(data: NgForm) {
    this.staff = data.value;
    this.staffService.registerStaff(this.staff).subscribe(
      (res) => {
        console.log('Staff registered successfully:', res);
        data.resetForm();
        this.refreshViewStaff.emit();
        this.isSuccess = true;

        setTimeout(() => {
          this.isSuccess = false;
        }, 3000);
      },
      (err) => {
        console.log('staff registered failed', err);
      }
    );
  }


onUpdate(data:NgForm){
  if (this.receivedStaff){
    const updatedStaffData = { ...data.value, _id: this.receivedStaff._id };
    this.staffService.updateStaff(updatedStaffData).subscribe((res)=>{
    console.log('Staff updated successfully:', res);
    data.resetForm();
    this.refreshViewStaff.emit();
    this.isUpdateSuccess = true;
    this.isEditMode=false;

    
    setTimeout(() => {
      this.isUpdateSuccess = false;
    }, 3000);
  
  },  (err) => {
    console.log('staff registered failed', err);
  })
}
}

}

export class ReceivedStaff {
  _id!: string;
  firstName!: string;
  lastName!: string;
  age!: string;
  emailid!: string;
  phonenumber!: string;
}

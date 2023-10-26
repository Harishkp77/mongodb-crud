import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StaffRegistrationComponent } from './staff-registration/staff-registration.component';
import { FormsModule } from '@angular/forms';
import { ViewStaffComponent } from './view-staff/view-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffRegistrationComponent,
    ViewStaffComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

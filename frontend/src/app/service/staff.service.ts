import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private apiUrl = 'http://localhost:3000/api/staff';
  private getapiUrl = 'http://localhost:3000/read/staff';
  private updateapiUrl = 'http://localhost:3000/update/staff';
  private deleteapiUrl ='http://localhost:3000/delete/staff';

  constructor(private http: HttpClient) {}

  registerStaff(staffData: any) {
    return this.http.post(this.apiUrl, staffData);
  }

  getstaff() {
    return this.http.get(this.getapiUrl);
  }

  updateStaff(updateData: any) {
    return this.http.post(this.updateapiUrl, updateData);
  }

  deleteStaff(deleteData: any) {
    return this.http.post(this.deleteapiUrl, deleteData);
  }
}

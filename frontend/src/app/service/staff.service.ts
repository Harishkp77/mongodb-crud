import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private apiUrl = 'http://localhost:3000/api/staff';
  constructor(private http: HttpClient) {}

  registerStaff(staffData: any) {
    return this.http.post(this.apiUrl, staffData);
  }

  getstaff(){
    return this.http.get('http://localhost:3000/read/staff')
  }

}

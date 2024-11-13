import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDashbooardService {
  constructor(private http: HttpClient) { }

  GetAllHostelDetails(){
    return this.http.get<any>(`${environment.BaseUrl}GetAllHostelDetails`);
  }
  GetHostelDetailsById(UserID: number){
    return this.http.get<any>(`${environment.BaseUrl}GetHostelDetailsById?UserID=${UserID}`);
  }
}

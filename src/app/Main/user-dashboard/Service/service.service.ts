import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendName, env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class UserDashbooardService {
  constructor(private http: HttpClient) { }
  private backend: string = BackendName.Hostel;

  GetAllHostelDetails(){
    return this.http.get<any>(`${env.BaseUrl + this.backend}/GetAllHostelDetails`);
  }
  GetHostelDetailsById(UserID: number){
    return this.http.get<any>(`${env.BaseUrl + this.backend}/GetHostelDetailsById?UserID=${UserID}`);
  }
}

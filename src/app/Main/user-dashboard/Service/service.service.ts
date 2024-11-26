import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class UserDashbooardService {
  constructor(private http: HttpClient) { }

  GetAllHostelDetails(){
    return this.http.get<any>(`${env.BaseUrl}GetAllHostelDetails`);
  }
  GetHostelDetailsById(UserID: number){
    return this.http.get<any>(`${env.BaseUrl}GetHostelDetailsById?UserID=${UserID}`);
  }
}

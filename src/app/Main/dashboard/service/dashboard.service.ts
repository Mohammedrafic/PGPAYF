import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  GetUserDetails(UserId: number){
    return this.http.get<any>(`${env.BaseUrl}GetUserDetails?UserId=${UserId}`);
  }

  GetMinimumRent(HostelId: number){
    return this.http.get<any>(`${env.BaseUrl}GetMinimumRent?HostelID=${HostelId}`);
  }
}

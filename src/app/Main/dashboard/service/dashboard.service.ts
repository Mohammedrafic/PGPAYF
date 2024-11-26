import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendName, env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }
  private backend: string = BackendName.Dashboard;

  GetUserDetails(UserId: number){
    return this.http.get<any>(`${env.BaseUrl + this.backend}/GetUserDetails?UserId=${UserId}`);
  }

  GetMinimumRent(HostelId: number){
    return this.http.get<any>(`${env.BaseUrl + this.backend}/GetMinimumRent?HostelID=${HostelId}`);
  }
}

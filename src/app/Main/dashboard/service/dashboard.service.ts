import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  GetUserDetails(UserId: number){
    return this.http.get<any>(`${environment.BaseUrl}GetUserDetails?UserId=${UserId}`);
  }

  GetMinimumRent(HostelId: number){
    return this.http.get<any>(`${environment.BaseUrl}GetMinimumRent?HostelID=${HostelId}`);
  }
}

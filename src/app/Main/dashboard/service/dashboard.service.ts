import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  BaseURL: string = 'https://localhost:7202/';
  constructor(private http: HttpClient) { }

  GetUserDetails(HostelId: number){
    return this.http.get<any>(`${this.BaseURL}GetUserDetails?HostelId=${HostelId}`);
  }
}

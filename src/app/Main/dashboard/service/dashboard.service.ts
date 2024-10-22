import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  GetUserDetails(HostelId: number){
    return this.http.get<any>(`${environment.BaseUrl}GetUserDetails?HostelId=${HostelId}`);
  }
}

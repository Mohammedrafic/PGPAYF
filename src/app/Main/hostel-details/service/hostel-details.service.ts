import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HostelDetailsService {

  constructor(private http: HttpClient) { }

  GetHostelByID(HostelID: number){
    return this.http.get<any>(`${environment.BaseUrl}GetHostelFullDetailsById?HostelID=${HostelID}`);
  }
}

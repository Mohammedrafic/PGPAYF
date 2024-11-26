import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class HostelDetailsService {

  constructor(private http: HttpClient) { }

  GetHostelByID(HostelID: number){
    return this.http.get<any>(`${env.BaseUrl}GetHostelFullDetailsById?HostelID=${HostelID}`);
  }
}

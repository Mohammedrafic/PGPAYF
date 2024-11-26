import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  AddHostelDetails(HostelDetails: any) {
    return this.http.post<any>(`${env.BaseUrl}AddHostelDetails`, HostelDetails);
  }
}

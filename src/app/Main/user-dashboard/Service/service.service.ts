import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDashbooardService {
  BaseURL: string = 'https://localhost:7202/';
  constructor(private http: HttpClient) { }

  GetAllHostelDetails(){
    return this.http.get<any>(`${this.BaseURL}GetAllHostelDetails`);
  }
}

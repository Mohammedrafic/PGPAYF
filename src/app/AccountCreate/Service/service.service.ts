import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  AddUser(UserDetails: any){
    return this.http.post(`${env.BaseUrl}AddUser`,UserDetails);
  }
}

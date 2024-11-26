import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendName, env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  private backend: string = BackendName.User;

  AddUser(UserDetails: any){
    return this.http.post(`${env.BaseUrl + this.backend}/AddUser`,UserDetails);
  }
}

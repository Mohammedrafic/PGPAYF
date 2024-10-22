import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from 'src/app/model/UserDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  AddUser(UserDetails: any){
    return this.http.post(`${environment.BaseUrl}AddUser`,UserDetails);
  }
}

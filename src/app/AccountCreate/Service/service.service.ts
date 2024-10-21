import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from 'src/app/model/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  AddUser(UserDetails: any){
    return this.http.post('https://localhost:7202/AddUser',UserDetails);
  }
}

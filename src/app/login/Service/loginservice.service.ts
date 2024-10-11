import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  GetLoginDetails(Email: any, Password: any){
    return this.http.get(`https://localhost:7202/Login?Email=${Email}&Password=${Password}`);
  }
}

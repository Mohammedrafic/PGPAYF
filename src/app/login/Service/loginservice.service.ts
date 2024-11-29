import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendName, env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }
  private backend: string = BackendName.Login;

  GetLoginDetails(Email: any, Password: any){
    return this.http.get(`${env.BaseUrl + this.backend}/Login?Email=${Email}&Password=${Password}`);
  }

  ForgotPassword(Email: any){
    return this.http.get(`${env.BaseUrl + this.backend}/ForgotPassword?Email=${Email}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  GetLoginDetails(Email: any, Password: any){
    return this.http.get(`${env.BaseUrl}Login?Email=${Email}&Password=${Password}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  GetLoginDetails(Email: any, Password: any){
    return this.http.get(`${environment.BaseUrl}Login?Email=${Email}&Password=${Password}`);
  }
}

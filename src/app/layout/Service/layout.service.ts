import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendName, env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private http: HttpClient) { }
  private backend: string = BackendName.User;

  GetLayoutData(UserRole: string | null){
    return this.http.get(`${env.BaseUrl + this.backend}/GetLayoutData?UserRole=${UserRole}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private http: HttpClient) { }

  GetLayoutData(UserRole: string | null){
    return this.http.get(`${env.BaseUrl}GetLayoutData?UserRole=${UserRole}`);
  }
}

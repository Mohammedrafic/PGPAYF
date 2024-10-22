import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private http: HttpClient) { }

  GetLayoutData(UserRole: string | null){
    return this.http.get(`${environment.BaseUrl}GetLayoutData?UserRole=${UserRole}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private http: HttpClient) { }

  GetLayoutData(UserRole: string | null){
    return this.http.get(`https://localhost:7202/GetLayoutData?UserRole=${UserRole}`);
  }
}

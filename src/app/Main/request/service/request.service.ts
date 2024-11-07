import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  GetHostelRequest(UserID: number){
    return this.http.get<any>(`${environment.BaseUrl}GetHostelRequest/${UserID}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendName, env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  private backend: string = BackendName.Hostel;

  GetHostelRequest(UserID: number){
    return this.http.get<any>(`${env.BaseUrl + this.backend}/GetHostelRequest/${UserID}`);
  }
}

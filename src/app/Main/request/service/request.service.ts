import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  GetHostelRequest(UserID: number){
    return this.http.get<any>(`${env.BaseUrl}GetHostelRequest/${UserID}`);
  }
}

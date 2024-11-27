import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendName, env } from 'src/app/enum/enum';

@Injectable({
  providedIn: 'root'
})
export class ReviewSectionService {
  
  constructor(private http: HttpClient) { }
  private backend: string = BackendName.Hostel;

  Rating(rating: any){
    return this.http.post<any>(`${env.BaseUrl + this.backend}/RatingHostel`,rating);
  }
}

import { Component, OnInit } from '@angular/core';
import { HostelDetailsService } from './service/hostel-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hostel-details',
  templateUrl: './hostel-details.component.html',
  styleUrls: ['./hostel-details.component.scss']
})
export class HostelDetailsComponent implements OnInit {
  hotelDetails : any;
  ParamsId: number = 0;
  constructor(private service: HostelDetailsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Getparamsid();
    this.service.GetHostelByID(this.ParamsId).subscribe((res: any) => {
      if(res.content){
        this.hotelDetails = res.content;
        console.log(this.hotelDetails);
      }
    });
  }
  images = [
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/beds-hostel-affordable-housing-36997317.webp'
  ];

  bookNow(): void {
    console.log('Booking triggered for:', this.hotelDetails.name);
  }

  Backbtn(): void {
    console.log('Viewing details for:', this.hotelDetails.name);
  }

  Getparamsid(){
    this.route.params.subscribe((params) => {
      this.ParamsId = params['id'];
    });
  }
}

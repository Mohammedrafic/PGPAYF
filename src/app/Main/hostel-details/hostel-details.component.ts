import { Component, OnInit } from '@angular/core';
import { HostelDetailsService } from './service/hostel-details.service';

@Component({
  selector: 'app-hostel-details',
  templateUrl: './hostel-details.component.html',
  styleUrls: ['./hostel-details.component.scss']
})
export class HostelDetailsComponent implements OnInit {
  hotelDetails : any;
  constructor(private service: HostelDetailsService) { }

  ngOnInit(): void {
    this.service.GetHostelByID(1).subscribe((res: any) => {
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
    // Navigate to the booking page or trigger a booking service
    console.log('Booking triggered for:', this.hotelDetails.name);
  }

  viewDetails(): void {
    // Show additional details or navigate to the details page
    console.log('Viewing details for:', this.hotelDetails.name);
  }
}

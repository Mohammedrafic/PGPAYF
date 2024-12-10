import { Component, OnInit } from '@angular/core';
import { HostelDetailsService } from './service/hostel-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hostel-details',
  templateUrl: './hostel-details.component.html',
  styleUrls: ['./hostel-details.component.scss']
})
export class HostelDetailsComponent implements OnInit {
  hotelDetails: any;
  ParamsId: number = 0;
  UserRole: any;
  isBookbtn: boolean = false;
  constructor(private service: HostelDetailsService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.UserRole = sessionStorage.getItem('userRole');
    this.isBookbtn = this.UserRole == 'Admin';
    if (this.UserRole == null) {
      this.router.navigate([''])
    }
    this.Getparamsid();
    this.service.GetHostelByID(this.ParamsId).subscribe((res: any) => {
      if (res.content) {
        this.hotelDetails = res.content;
        sessionStorage.setItem('HostelName',res.content.name)
        console.log(this.hotelDetails);
      }
    });
  }
  images = [
    'assets/images/hostel-img-1.jpg',
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/hostel-image-2.jpg',
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/beds-hostel-affordable-housing-36997317.webp'
  ];

  bookNow(): void {
    this.router.navigate(['/main/Booking', this.ParamsId])
  }

  Backbtn(): void {
    if (this.UserRole == 'Admin') {
      this.router.navigate(['/main/hostels'])
    } else {
      this.router.navigate(['/main/userdashboard'])
    }
  }

  Getparamsid() {
    this.route.params.subscribe((params) => {
      this.ParamsId = params['id'];
    });
  }
}

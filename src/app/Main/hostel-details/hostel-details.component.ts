import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostel-details',
  templateUrl: './hostel-details.component.html',
  styleUrls: ['./hostel-details.component.scss']
})
export class HostelDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hotelDetails = {
    name: 'FabExpress Santhi Inn - Near Promenade Beach',
    location: 'Plot No.57, Jawaharlal Nehru Street, Pondicherry, India',
    rating: 8.6,
    reviewCount: 1129,
    reviewText: 'Good size room complete with sitting area for two. Even had a fridge. Staff were so helpful and helped us arrange our onward journey.',
    reviewer: { name: 'David', country: 'Australia' },
    amenities: [
      { icon: 'restaurant', label: 'Restaurant' },
      { icon: 'bathtub', label: 'Private bathroom' },
      { icon: 'wifi', label: 'Free WiFi' },
      { icon: 'ac_unit', label: 'Air conditioning' },
      { icon: 'family_restroom', label: 'Family rooms' },
      { icon: 'shower', label: 'Shower' },
    ]
  };
  images = [
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/beds-hostel-affordable-housing-36997317.webp',
    'assets/images/beds-hostel-affordable-housing-36997317.webp'
  ];
}

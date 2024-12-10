import { Component, OnInit } from '@angular/core';
import { BookRequestService } from './service/book-request.service';

@Component({
  selector: 'app-book-request',
  templateUrl: './book-request.component.html',
  styleUrls: ['./book-request.component.scss']
})
export class BookRequestComponent implements OnInit {
  dtl: any = {
    images: [
      'assets/images/hostel-img-1.jpg',
      'assets/images/beds-hostel-affordable-housing-36997317.webp',
      'assets/images/beds-hostel-affordable-housing-36997317.webp',
      'assets/images/hostel-image-2.jpg',
      'assets/images/beds-hostel-affordable-housing-36997317.webp',
      'assets/images/beds-hostel-affordable-housing-36997317.webp'
    ]
  }
  propertylist: any;
  HostelName: any;
  ReviewCount: any;
  Rating: any;
  HostelAddress: any;
  ReviewText: any;
  Offer: any;
  Amount: any;
  DiscountAmount: any;
  constructor(private service: BookRequestService) { }

  ngOnInit(): void {
    this.service.GetHostelByID(2).subscribe((res: any) => {
      console.log(res);
      this.propertylist = res.content.amenities;
      this.HostelName = res.content.name;
      this.ReviewCount = res.content.reviewCount;
      this.Rating = res.content.rating;
      this.HostelAddress = res.content.location;
      this.ReviewText = res.content.reviewText;
      this.Offer = res.content.offer;
      this.Amount = res.content.amount;
      this.DiscountAmount = res.content.discount;
    });
  }

}

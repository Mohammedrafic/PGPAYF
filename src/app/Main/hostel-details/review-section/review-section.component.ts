import { Component, Input, OnInit } from '@angular/core';
import { ReviewSectionService } from './service/review-section.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss']
})
export class ReviewSectionComponent implements OnInit {
  @Input() review: string = '';
  @Input() reviewer: any;
  @Input() rating: string = '';
  @Input() amount: number = 0;
  @Input() discount: number = 0;
  @Input() offer: string = '';
  stars: number[] = Array(5).fill(0);
  selectedRating: number = 0;
  hoverRatingValue: number = 0;
  ParamsId: any;

  constructor(private service: ReviewSectionService,private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Getparamsid();
    this.selectedRating = isNaN(Number(this.rating)) ? 0 : Math.round(Number(this.rating));
    console.log(this.reviewer);
  }

  hoverRating(rating: number): void {
    this.hoverRatingValue = rating;
  }

  // Reset hover effect
  resetHover(): void {
    this.hoverRatingValue = 0;
  }

  // Handle star click
  selectRating(rating: number): void {
    debugger;
    this.selectedRating = rating;
    let request = {
      hostelId: Number(this.ParamsId),
      starrate: rating
    }
    this.service.Rating(request).subscribe((res: any) => {
      if(res.content){
        this.toastr.success(res.message,'Success')
      }else{
        this.toastr.error(res.message,'Error')
      }
    });
  }

  Getparamsid(){
    this.route.params.subscribe((params) => {
      this.ParamsId = params['id'];
    });
  }
}

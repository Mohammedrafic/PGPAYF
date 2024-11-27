import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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
    this.selectedRating = rating;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss']
})
export class ReviewSectionComponent implements OnInit {
  @Input() review: string = '';
  @Input() reviewer: any;
  @Input() rating: number = 0;
  @Input() amount: number = 0; // Product amount
  @Input() discount: number = 0; // Discount amount
  @Input() offer: string = ''; // Offer description
  stars: number[] = Array(5).fill(0); // Array for 5 stars
  selectedRating: number = this.rating;
  hoverRatingValue: number = 0;

  constructor() { }

  ngOnInit(): void {
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

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
  constructor() { }

  ngOnInit(): void {
  }

}

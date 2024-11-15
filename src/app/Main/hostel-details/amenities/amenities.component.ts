import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {
  @Input() amenities: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

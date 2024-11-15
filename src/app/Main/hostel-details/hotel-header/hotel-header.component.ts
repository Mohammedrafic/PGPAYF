import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-header',
  templateUrl: './hotel-header.component.html',
  styleUrls: ['./hotel-header.component.scss']
})
export class HotelHeaderComponent implements OnInit {
  @Input() hotel: any;
  constructor() { }

  ngOnInit(): void {
  }

}

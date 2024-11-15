import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss']
})
export class LocationMapComponent implements OnInit {
  @Input() location: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

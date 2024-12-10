import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertydtl',
  templateUrl: './propertydtl.component.html',
  styleUrls: ['./propertydtl.component.scss']
})
export class PropertydtlComponent implements OnInit {

  constructor() { }
  @Input() propertyList: any[] = []

  ngOnInit(): void {
    console.log(this.propertyList)
  }

}

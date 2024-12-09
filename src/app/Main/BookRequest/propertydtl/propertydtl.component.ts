import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertydtl',
  templateUrl: './propertydtl.component.html',
  styleUrls: ['./propertydtl.component.scss']
})
export class PropertydtlComponent implements OnInit {

  constructor() { }
  propertyList: any[] = ['hgfdsjh','fdgdfg','dsfsdfs','dfsdfsd']

  ngOnInit(): void {
  }

}

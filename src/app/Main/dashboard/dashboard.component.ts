import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  PendingUserRent = 1456;

  public rowData: any[] = [];
  public columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
  public defaultColDef = {
    sortable: true, 
    filter: true,
    resizable: true 
  };
  constructor() { 
    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxster', price: 72000 }
    ];
  }

  ngOnInit(): void {
  }

  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  PendingUserRent = 1456;
  HostelList: any[] = [1,2,3,4,5,6,7,8,9];
  panels = ['A', 'B', 'C', 'D', 'E'];


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

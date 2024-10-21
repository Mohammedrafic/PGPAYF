import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  PendingUserRent = 1456;

  public rowData: any[] = [];
  public columnDefs: any = [
    { field: 'userId', headerName: 'UserId', sortable: true, filter: true },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'age', headerName: 'Age', sortable: true, filter: true },
    { field: 'phoneNo', headerName: 'PhoneNo', sortable: true, filter: true },
    { field: 'dateOfBirth', headerName: 'DateOfBirth', sortable: true, filter: true },
    { field: 'maritalStatus', headerName: 'MaritalStatus', sortable: true, filter: true },
    { field: 'state', headerName: 'State', sortable: true, filter: true },
    { field: 'address', headerName: 'Address', sortable: true, filter: true },
    { field: 'altPhoneNo', headerName: 'AltPhoneNo', sortable: true, filter: true },
    { field: 'sex', headerName: 'Sex', sortable: true, filter: true },
    { field: 'createDate', headerName: 'CreateDate', sortable: true, filter: true }
];
  public defaultColDef = {
    sortable: true, 
    filter: true,
    resizable: true 
  };
  constructor(private dashService: DashboardService) { 
  }

  ngOnInit(): void {
    this.GetUserDetails(2);
  }

  GetUserDetails(HostelId: number){
    this.dashService.GetUserDetails(HostelId).subscribe((res: any)=>{
        this.rowData = res.content;
    });
  }

  
}

import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public PendingUserRent: number = 0;
  public TotalUsers: number = 0;
  public TotalIncome: number = 0;
  public MinAmt: number = 0;
  public NoOfHostels: number = 0;
  public rowData: any[] = [];
  public columnDefs: any = [
    { field: 'hostelId', headerName: 'HostelId', sortable: true, filter: true },
    { field: 'hostelName', headerName: 'HostelName', sortable: true, filter: true },
    { field: 'hostelAddress', headerName: 'HostelAddress', sortable: true, filter: true },
    { field: 'noofRooms', headerName: 'NoofRooms', sortable: true, filter: true },
    { field: 'rent', headerName: 'Rent', sortable: true, filter: true },
    { field: 'discountPer', headerName: 'DiscountPer', sortable: true, filter: true }
  ];
  public defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };
  constructor(private dashService: DashboardService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
  
    if (userId !== null) {
      const numericUserId = parseInt(userId, 10);
      this.GetUserDetails(numericUserId);
    }
  }

  GetUserDetails(UserId: number) {
    this.dashService.GetUserDetails(UserId).subscribe((res: any) => {
      this.rowData = res.content.hostelDetails;
      this.TotalUsers = res.content.totalUser;
      this.PendingUserRent = res.content.pendingPaymentCount ?? 0;
      this.TotalIncome = res.content.totalIncome;
      this.MinAmt = res.content.minamt;
      this.NoOfHostels = res.content.noOfHostels;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserDashbooardService } from './Service/service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  imglist: any[] = [];
  HostelDetails: any[] = [];

  constructor(private service: UserDashbooardService) {
  }

  ngOnInit(): void {
    this.GetAllHostelDetails();
  }

  GetAllHostelDetails() {
    this.service.GetAllHostelDetails().subscribe((res: any) => {
      if (res.isSuccess) {
        this.HostelDetails = res.content;
        console.log(res.content);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { UserDashbooardService } from './Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  imglist: any[] = [];
  HostelDetails: any[] = [];

  constructor(private service: UserDashbooardService, private route: Router) {
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

  Navigate(hostelId: number){
    this.route.navigate(['main/HostelDetails', hostelId]);
  }

  BookNow(hostelId: number){
    this.route.navigate(['main/HostelDetails', hostelId]);
  }

}

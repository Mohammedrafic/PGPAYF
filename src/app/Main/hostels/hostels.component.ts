import { Component, OnInit } from '@angular/core';
import { UserDashbooardService } from '../user-dashboard/Service/service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.scss']
})
export class HostelsComponent implements OnInit {
  
  imglist: any[] = [];
  HostelDetails: any[] = [];

  constructor(private service: UserDashbooardService, private route: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');

    if (userId !== null) {
      const numericUserId = parseInt(userId, 10);
      this.GetAllHostelDetails(numericUserId);
    }else{
      this.route.navigate(['']);
    }
  }

  GetAllHostelDetails(UserID: number) {
    this.service.GetHostelDetailsById(UserID).subscribe((res: any) => {
      if (res.isSuccess) {
        this.HostelDetails = res.content;
        console.log(res.content);
      }
    });
  }

  Navigate(hostelId: number){
    this.route.navigate(['main/HostelDetails', hostelId]);
  }

  Delete(hostelId: number){
    this.toastr.info('Currently Delete option is unavaliable','Not Action!!!')
  }
}

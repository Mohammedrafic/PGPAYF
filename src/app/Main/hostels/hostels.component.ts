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
  filter: any;
  UserId: any;

  constructor(private service: UserDashbooardService, private route: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.UserId = sessionStorage.getItem('userId');

    if (this.UserId !== null) {
      const numericUserId = parseInt(this.UserId, 10);
      this.GetAllHostelDetails(numericUserId);
    }else{
      this.route.navigate(['']);
    }
  }

  GetAllHostelDetails(UserID: number) {
    const filter = {
      userId: UserID,
      searchTerm: this.filter?.searchTerm ?? "",
      sortOrder: this.filter?.sortOrder ?? "",
      priceRange: this.filter?.priceRange ?? 0,
      minRating: this.filter?.minRating ?? 0
    }
    this.HostelDetails = [];
    this.service.GetHostelDetailsById(filter).subscribe((res: any) => {
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

  Filter(filter: any){
    console.log(filter);
    this.filter = filter;
    this.GetAllHostelDetails(this.UserId);
  }
}

import { Component, OnInit } from '@angular/core';
import { UserDashbooardService } from '../user-dashboard/Service/service.service';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.scss']
})
export class HostelsComponent implements OnInit {
  
  imglist: any[] = [];
  HostelDetails: any[] = [];

  constructor(private service: UserDashbooardService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (userId !== null) {
      const numericUserId = parseInt(userId, 10);
      this.GetAllHostelDetails(numericUserId);
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
}

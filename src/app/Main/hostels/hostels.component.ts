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

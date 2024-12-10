import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookRequestService } from '../service/book-request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdtl',
  templateUrl: './userdtl.component.html',
  styleUrls: ['./userdtl.component.scss']
})
export class UserdtlComponent implements OnInit {
  userDetailForm!: FormGroup;
  HostelId: any;
  UserId: any;
  @Input() btnClick = (res: any) =>{
    debugger;
    console.log(res);
  }
  constructor(private fb: FormBuilder, private service: BookRequestService, private route: ActivatedRoute,) {
    this.Getparamsid();
  }

  ngOnInit(): void {
    this.userDetailForm = this.fb.group({
      username: ['', Validators.required],
      hostelName: ['', Validators.required],
      status: ['Pending'],
      requestType: ['Booking'],
      contactDetails: ['', Validators.required],
      description: ['']
    });
    this.GetUserDetailsById();
  }

  GetUserDetailsById() {
    this.service.GetUserDetailsByID(this.UserId, this.HostelId).subscribe((res: any) => {
      console.log(res);
      this.userDetailForm.controls['username'].setValue(res.content.name);
      this.userDetailForm.controls['hostelName'].setValue(sessionStorage.getItem('HostelName'));
    });
  }

  Getparamsid() {
    this.route.params.subscribe((params) => {
      const hostelId = params['id'];
      const userId= sessionStorage.getItem('userId');
      if (userId !== null) {
        this.UserId = parseInt(userId, 10);
        this.HostelId = parseInt(hostelId, 10);
      }
    });
  }

}

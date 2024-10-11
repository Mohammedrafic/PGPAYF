import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-acc',
  templateUrl: './user-acc.component.html',
  styleUrls: ['./user-acc.component.scss']
})
export class UserAccComponent implements OnInit {

  @Output() NextPage = new EventEmitter<any>();
  @Output() ChildData = new EventEmitter<FormGroup>();
  @Input() PageNo: number = 0;

  UserDetailsForm = new FormGroup({
    Name: new FormControl('',Validators.required),
    Age: new FormControl('',Validators.required), 
    PhNo: new FormControl('',Validators.required), 
    DOB: new FormControl('',Validators.required), 
    Maritalstatus: new FormControl('',Validators.required), 
    State: new FormControl('',Validators.required), 
    Address: new FormControl('',Validators.required),
    AltPhNo: new FormControl(''), 
    IDProof: new FormControl('',Validators.required), 
    Sex: new FormControl('',Validators.required) 
  })

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Nextpage(){
    if (this.UserDetailsForm.valid) {
      this.NextPage.emit({ No: this.PageNo, Key: 'UserDetails'}); 
      this.ChildData.emit(this.UserDetailsForm)
    } else {
      this.toastr.error('Invalid PersonalDetails Form!', 'Error')
    }
  }
}

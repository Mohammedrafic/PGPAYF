import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Output() NextPage = new EventEmitter<any>()
  @Output() PrevPage = new EventEmitter<any>()
  @Output() ChildData = new EventEmitter<FormGroup>();

  AccountForm = new FormGroup({
    UserName: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required), 
    Password: new FormControl('',Validators.required)
  })

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Save(){
    if (this.AccountForm.valid) {
      this.PrevPage.emit({ No: 3, Key: 'Account'});
      this.ChildData.emit(this.AccountForm) 
    } else {
      this.toastr.error('Invalid Account Form!', 'Error')
    }
  }

  previouspage(){
    this.PrevPage.emit({ No: 2, Key: 'Account'}); 
  }
}

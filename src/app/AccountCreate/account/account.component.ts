import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() PageNo: any;

  AccountForm = new FormGroup({
    UserName: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required), 
    Password: new FormControl('',Validators.required)
  });

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Save(){
    if (this.AccountForm.valid) {
      this.NextPage.emit({ No: this.PageNo.Frontpage, Key: 'Account'});
      this.ChildData.emit(this.AccountForm);
    } else {
      this.toastr.error('Invalid Account Form!', 'Error')
    }
  }

  previouspage(){
    this.PrevPage.emit({ No: this.PageNo.prevpage, Key: 'Account'}); 
  }
}

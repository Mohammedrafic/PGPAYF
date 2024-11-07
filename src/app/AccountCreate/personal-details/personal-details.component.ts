import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  @Output() NextPage = new EventEmitter<any>();
  @Output() ChildData = new EventEmitter<FormGroup>();
  @Input() PageNo: any;

  PersonalDetailsForm = new FormGroup({
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
    if (this.PersonalDetailsForm.valid) {
      this.NextPage.emit({ No: this.PageNo.Frontpage, Key: 'PersonalDetails'}); 
      this.ChildData.emit(this.PersonalDetailsForm)
    } else {
      this.toastr.error('Invalid PersonalDetails Form!', 'Error')
    }
  }
}

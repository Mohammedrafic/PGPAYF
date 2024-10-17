import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hostals-details',
  templateUrl: './hostals-details.component.html',
  styleUrls: ['./hostals-details.component.scss']
})
export class HostalsDetailsComponent implements OnInit {

  @Output() NextPage = new EventEmitter<any>()
  @Output() PrevPage = new EventEmitter<any>()
  @Output() ChildData = new EventEmitter<FormGroup>();
  @Input() PageNo: any;
  selectedFiles: File[] = [];

  HostelDetailsForm = new FormGroup({
    HostelName: new FormControl('',Validators.required),
    HostalAddress: new FormControl('',Validators.required), 
    NoOfRooms: new FormControl('',Validators.required), 
    minrent: new FormControl('',Validators.required), 
    maxrent: new FormControl('',Validators.required), 
    contactno: new FormControl('',Validators.required), 
    ownerName: new FormControl('',Validators.required),
    HostelPhotos: new FormControl<File[]|null>(null,Validators.required)
  })

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Nextpage(){
    if (true) {
      debugger;
      this.NextPage.emit({ No: this.PageNo.Frontpage, Key: 'HostelDetails'}); 
      this.ChildData.emit(this.HostelDetailsForm)
    } else {
      this.toastr.error('Invalid HostelDetails Form!', 'Error')
    }
  }

  previouspage(){
    this.PrevPage.emit({ No: this.PageNo.prevpage, Key: 'HostelDetails'}); 
  }

  onFileSelected(event: any): void {
    if (event.target.files) {
      this.selectedFiles = Array.from(event.target.files);
      this.HostelDetailsForm.patchValue({
        HostelPhotos: this.selectedFiles
      });
    }
  }

}

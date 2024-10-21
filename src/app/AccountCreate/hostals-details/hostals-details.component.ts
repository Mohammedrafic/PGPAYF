import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hostals-details',
  templateUrl: './hostals-details.component.html',
  styleUrls: ['./hostals-details.component.scss']
})
export class HostalsDetailsComponent implements OnInit {
  HostelDetailsForm!: FormGroup;

  @Output() NextPage = new EventEmitter<any>()
  @Output() PrevPage = new EventEmitter<any>()
  @Output() ChildData = new EventEmitter<FormGroup>();
  @Input() PageNo: any;
  selectedFiles: any[] = [];
  HostelDetails: any;

  constructor(private fb: FormBuilder,private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.HostelDetailsForm = this.fb.group({
      HostelName: ['', Validators.required],
      HostalAddress: ['', Validators.required],
      NoOfRooms: ['', Validators.required],
      minrent: ['', Validators.required],
      maxrent: ['', Validators.required],
      contactno: ['', Validators.required],
      ownerName: ['', Validators.required],
      HostelPhotos: [[]] 
    });
  }

  Nextpage(){
    if (true) {
      debugger;
      this.HostelDetails = this.HostelDetailsForm.value;
      if(this.HostelDetails){
        this.HostelDetails.HostelPhotos = this.selectedFiles;
      }
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
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const selectedFiles: File[] = [];
      for (let i = 0; i < files.length; i++) {
        selectedFiles.push(files[i]);
      }
      this.HostelDetailsForm.patchValue({
        HostelPhotos: selectedFiles
      });
    }
  }

}

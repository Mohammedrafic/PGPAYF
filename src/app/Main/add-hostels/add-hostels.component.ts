import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-hostels',
  templateUrl: './add-hostels.component.html',
  styleUrls: ['./add-hostels.component.scss']
})
export class AddHostelsComponent implements OnInit {

  HostelDetailsForm!: FormGroup;

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

  onFileSelected(event: any): void {
    debugger;
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const selectedFiles: File[] = [];
      for (let i = 0; i < files.length; i++) {
        selectedFiles.push(files[i]);
      }
      this.selectedFiles = selectedFiles;
    }
  }

  Submit(){
    if (this.HostelDetailsForm.valid) {
      this.HostelDetails = this.HostelDetailsForm.value;
      if(this.HostelDetails){
        this.HostelDetails.HostelPhotos = this.selectedFiles;
      }
    } else {
      this.toastr.error('Invalid HostelDetails Form!', 'Error')
    }
    console.log(this.HostelDetailsForm);
  }
}

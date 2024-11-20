import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from './service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hostels',
  templateUrl: './add-hostels.component.html',
  styleUrls: ['./add-hostels.component.scss']
})
export class AddHostelsComponent implements OnInit {

  HostelDetailsForm!: FormGroup;

  selectedFiles: any[] = [];
  HostelDetails: any;
  UserID: any;

  constructor(private fb: FormBuilder,private toastr: ToastrService, private service: ServiceService, private router: Router) {
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

    const userId = localStorage.getItem('userId');
  
    if (userId !== null) {
      this.UserID = parseInt(userId, 10);
    }
  }

  onFileSelected(event: any): void {
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
    debugger;
    if (this.HostelDetailsForm.valid) {
      this.HostelDetails = this.HostelDetailsForm.value;
      if(this.HostelDetails){
        this.HostelDetails.HostelPhotos = this.selectedFiles;
        this.service.AddHostelDetails(this.formValues()).subscribe((res: any) => {
          if(res.content){
            this.toastr.success('Added Successfully','Success')
            this.router.navigate(['main/dashboard'])
          }else{
            this.toastr.error(res.message,'Error')
          }
        });
      }
    } else {
      this.toastr.error('Invalid HostelDetails Form!', 'Error')
    }
    console.log(this.HostelDetailsForm);
  }

  formValues() {
    const formData = new FormData();
    const UserDetails: any = {
      UserID: this.UserID,
      HostelName: this.HostelDetails?.HostelName || '',
      HostalAddress: this.HostelDetails?.HostalAddress || '',
      NoOfRooms: this.HostelDetails?.NoOfRooms || 0,
      MinimumRent: this.HostelDetails?.minrent || 0,
      MaximunRent: this.HostelDetails?.maxrent || 0,
      ContactNumber: this.HostelDetails?.contactno || 0,
      OwnerName: this.HostelDetails?.ownerName || '',
      HostalPhotosPath: this.HostelDetails?.HostelPhotos || []
    };
  
    formData.append("UserID", UserDetails.UserID);
    formData.append("HostelName", UserDetails.HostelName);
    formData.append("HostalAddress", UserDetails.HostalAddress);
    formData.append("NoOfRooms", UserDetails.NoOfRooms.toString());
    formData.append("MinimumRent", UserDetails.MinimumRent.toString());
    formData.append("MaximunRent", UserDetails.MaximunRent.toString());
    formData.append("ContactNumber", UserDetails.ContactNumber.toString());
    formData.append("OwnerName", UserDetails.OwnerName);
    
    // Append each file in HostalPhotosPath array
    for (const file of UserDetails.HostalPhotosPath) {
      formData.append("HostelDetails.HostalPhotosPath", file, file.name);
    }
    return formData;
  }
}

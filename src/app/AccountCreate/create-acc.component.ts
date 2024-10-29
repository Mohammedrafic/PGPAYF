import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from './Service/service.service';
import { UserDetails } from 'src/app/model/UserDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.scss'],
})
export class CreateAccComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  ParamsId: any;

  constructor(
    private UserService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  DetailsHeader: any[] = [];
  AdminHeader: any[] = [
    {
      title: 'PersonalDetails', page: {
        Frontpage: 2, prevpage: 1
      }, color: 'white', value: 1
    },
    {
      title: 'HostalsDetails', page: {
        Frontpage: 3, prevpage: 1
      }, color: 'white', value: 2
    },
    {
      title: 'Account', page: {
        Frontpage: 3, prevpage: 2
      }, color: 'white', value: 3
    },
  ];
  UserHeader: any[] = [
    {
      title: 'PersonalDetails', page: {
        Frontpage: 2, prevpage: 1
      }, color: 'white', value: 1
    },
    {
      title: 'Account', page: {
        Frontpage: 3, prevpage: 2
      }, color: 'white', value: 2
    },
  ];
  MainDetails: number = 1;
  personalDetailsForm: any;
  hostalsDetailsForm: any;
  accountForm: any;
  UserAccountDetails: any;
  PageKey: string = '';
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ParamsId = params['id'];
      if (this.ParamsId == 'Admin') {
        this.DetailsHeader = this.AdminHeader;
      } else if (this.ParamsId == 'User') {
        this.DetailsHeader = this.UserHeader;
      }
    });
  }

  PageChanged(data: any) {
    if (this.ParamsId == 'Admin') {
      this.MainDetails = data.No;
      this.PageKey = data.Key;
      if (data.No == 2) {
        this.changeColorByIndex(this.DetailsHeader, 0, 'limegreen');
      } else if (data.No == 3) {
        this.changeColorByIndex(this.DetailsHeader, 1, 'limegreen');
      } else {
        this.changeColorByIndex(this.DetailsHeader, 0, 'white');
      }
    } else if (this.ParamsId == 'User') {
      this.MainDetails = data.No;
      this.PageKey = data.Key;
      if (data.No == 2) {
        this.changeColorByIndex(this.DetailsHeader, 0, 'limegreen');
      } else {
        this.changeColorByIndex(this.DetailsHeader, 0, 'white');
      }
    }
  }

  changeColorByIndex(array: any[], index: number, newColor: string) {
    if (index >= 0 && index < array.length) {
      array[index].color = newColor;
    } else {
      console.log('Index out of bounds');
    }
  }

  Getdata(form: FormGroup) {
    if (this.ParamsId == 'Admin') {
      if (this.PageKey === 'PersonalDetails') {
        this.personalDetailsForm = form.value;
      } else if (this.PageKey === 'HostelDetails') {
        this.hostalsDetailsForm = form.value;
      } else if (this.PageKey === 'Account') {
        this.accountForm = form.value;
        this.Submit();
      }
    } else if (this.ParamsId == 'User') {
      if (this.PageKey === 'UserDetails') {
        this.personalDetailsForm = form.value;
      } else if (this.PageKey === 'Account') {
        this.accountForm = form.value;
        this.Submit();
      }
    }
  }

  Submit() {
    let UserDetails = this.formValues();
    if (this.personalDetailsForm && this.accountForm) {
      if (this.hostalsDetailsForm || !this.hostalsDetailsForm) {
        this.subs.add(
          this.UserService.AddUser(UserDetails).subscribe(
            (res: any) => {
              if (res.isSuccess) {
                this.toastr.success('User has been created....', 'Success');
                this.router.navigate(['']);
              } else {
                this.toastr.error(res.message, 'Error');
              }
            },
            (error) => {
              console.error('API error:', error);
              this.toastr.error(error.error.message, 'Error');
            }
          )
        );
      }
    }
  }

  formValues() {
    const formData = new FormData();
    const UserDetails: any = {
      UserName: this.accountForm?.UserName || '',
      Email: this.accountForm?.Email || '',
      Password: this.accountForm?.Password || '',
      UserRole: this.ParamsId || '',
      CreateBy: 'Rafic',
      UpdateBy: 'Rafic',
      CreateDate: new Date(),
      UpdateDate: new Date(),
      Name: this.personalDetailsForm?.Name || '',
      Age: this.personalDetailsForm?.Age || 0,
      PhoneNo: this.personalDetailsForm?.PhNo || 0,
      DateOfBirth: this.personalDetailsForm?.DOB || null,
      MaritalStatus: this.personalDetailsForm?.Maritalstatus || '',
      State: this.personalDetailsForm?.State || '',
      Address: this.personalDetailsForm?.Address || '',
      AltPhoneNo: this.personalDetailsForm?.AltPhNo || 0,
      ProofPath: this.personalDetailsForm?.IDProof || '',
      Sex: this.personalDetailsForm?.Sex || '',
      HostelDetails: {
        HostelName: this.hostalsDetailsForm?.HostelName || '',
        HostalAddress: this.hostalsDetailsForm?.HostalAddress || '',
        NoOfRooms: this.hostalsDetailsForm?.NoOfRooms || 0,
        MinimumRent: this.hostalsDetailsForm?.minrent || 0,
        MaximunRent: this.hostalsDetailsForm?.maxrent || 0,
        ContactNumber: this.hostalsDetailsForm?.contactno || 0,
        OwnerName: this.hostalsDetailsForm?.ownerName || '',
        HostalPhotosPath: this.hostalsDetailsForm?.HostelPhotos || []
      }
    };
  
    formData.append("UserName", UserDetails.UserName);
    formData.append("Email", UserDetails.Email);
    formData.append("Password", UserDetails.Password);
    formData.append("UserRole", UserDetails.UserRole);
    formData.append("CreateBy", UserDetails.CreateBy);
    formData.append("UpdateBy", UserDetails.UpdateBy);
    formData.append("CreateDate", new Date().toISOString());
    formData.append("UpdateDate", new Date().toISOString());
    formData.append("Name", UserDetails.Name);
    formData.append("Age", UserDetails.Age.toString());
    formData.append("PhoneNo", UserDetails.PhoneNo.toString());
    formData.append("DateOfBirth", UserDetails.DateOfBirth ?? null);
    formData.append("MaritalStatus", UserDetails.MaritalStatus);
    formData.append("State", UserDetails.State);
    formData.append("Address", UserDetails.Address);
    formData.append("AltPhoneNo", UserDetails.AltPhoneNo.toString());
    formData.append("ProofPath", UserDetails.ProofPath);
    formData.append("Sex", UserDetails.Sex);
    
    // Nested HostelDetails fields
    formData.append("HostelDetails.HostelName", UserDetails.HostelDetails.HostelName);
    formData.append("HostelDetails.HostalAddress", UserDetails.HostelDetails.HostalAddress);
    formData.append("HostelDetails.NoOfRooms", UserDetails.HostelDetails.NoOfRooms.toString());
    formData.append("HostelDetails.MinimumRent", UserDetails.HostelDetails.MinimumRent.toString());
    formData.append("HostelDetails.MaximunRent", UserDetails.HostelDetails.MaximunRent.toString());
    formData.append("HostelDetails.ContactNumber", UserDetails.HostelDetails.ContactNumber.toString());
    formData.append("HostelDetails.OwnerName", UserDetails.HostelDetails.OwnerName);
    
    // Append each file in HostalPhotosPath array
    for (const file of UserDetails.HostelDetails.HostalPhotosPath) {
      formData.append("HostelDetails.HostalPhotosPath", file, file.name);
    }
    return formData;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

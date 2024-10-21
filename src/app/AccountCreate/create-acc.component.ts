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
                console.log(res.content);
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
  
    Object.keys(UserDetails).forEach(key => {
      if (key === 'HostelDetails') {
        const hostelDetails = UserDetails[key];
        Object.keys(hostelDetails).forEach(hostelKey => {
          if (hostelKey === 'HostalPhotosPath') {
            hostelDetails[hostelKey].forEach((file: File) => {
              formData.append(`${key}[${hostelKey}]`, file, file.name);
            });
          } else {
            formData.append(`${key}[${hostelKey}]`, hostelDetails[hostelKey]);
          }
        });
      } else {
        formData.append(key, UserDetails[key]);
      }
    });

    const hostelDetails = UserDetails.HostelDetails;
    if (hostelDetails && hostelDetails.HostalPhotosPath) {
      hostelDetails.HostalPhotosPath.forEach((file: File) => {
        formData.append('HostelDetails[HostalPhotosPath]', file, file.name);
      });
    }
    return formData;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

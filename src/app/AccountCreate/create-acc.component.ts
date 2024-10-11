import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from './Service/service.service';
import { UserDetails } from 'src/app/model/UserDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.scss'],
})
export class CreateAccComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  ParamsId: any;

  constructor(private UserService: UserService, private router: Router,private route: ActivatedRoute) {}

  DetailsHeader: any[] = [];
  AdminHeader: any[] = [
    { title: 'PersonalDetails', value: 1, color: 'white' },
    { title: 'HostalsDetails', value: 2, color: 'white' },
    { title: 'Account', value: 3, color: 'white' },
  ];
  UserHeader: any[] = [
    { title: 'PersonalDetails', value: 1, color: 'white' },
    { title: 'Account', value: 2, color: 'white' },
  ];
  MainDetails: number = 1;
  personalDetailsForm: any;
  hostalsDetailsForm: any;
  accountForm: any;
  UserAccountDetails: any;
  PageKey: string = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ParamsId = params['id'];
      if(this.ParamsId == 'admin'){
        this.DetailsHeader = this.AdminHeader;
      }else if(this.ParamsId == 'user'){
        this.DetailsHeader = this.UserHeader;
      }
    });
  }

  PageChanged(data: any) {
    debugger;
    if(this.ParamsId == 'admin'){
      this.MainDetails = data.No;
      this.PageKey = data.Key;
      if (data.No == 2) {
        this.changeColorByIndex(this.DetailsHeader, 0, 'limegreen');
      } else if (data.No == 3) {
        this.changeColorByIndex(this.DetailsHeader, 1, 'limegreen');
      } else {
        this.changeColorByIndex(this.DetailsHeader, 0, 'white');
      }
    }else if(this.ParamsId == 'user'){
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
    if(this.ParamsId == 'admin'){
      if (this.PageKey === 'PersonalDetails') {
        this.personalDetailsForm = form.value;
      } else if (this.PageKey === 'HostelDetails') {
        this.hostalsDetailsForm = form.value;
      } else if (this.PageKey === 'Account') {
        this.accountForm = form.value;
        this.Submit();
      }
    }else if(this.ParamsId == 'user'){
      if (this.PageKey === 'UserDetails') {
        this.personalDetailsForm = form.value;
      } else if (this.PageKey === 'Account') {
        this.accountForm = form.value;
        this.Submit();
      }
    }
  }

  Submit() {
    if (
      this.personalDetailsForm &&
      this.hostalsDetailsForm &&
      this.accountForm
    ) {
      let UserDetails = this.formValues();
      this.subs.add(this.UserService.AddUser(UserDetails).subscribe((res: any) => {
        if (res.isSuccess) {
          console.log(res.content);
          this.router.navigate(['']);
        }
      }));
    }
  }

  formValues() {
    var UserDetails: UserDetails = {
      UserName: this.accountForm.UserName,
      Email: this.accountForm.Email,
      Password: this.accountForm.Password,
      UserRole: 'Admin',
      CreateBy: 'Rafic',
      UpdateBy: 'Rafic',
      CreateDate: new Date(),
      UpdateDate: new Date(),
      Name: this.personalDetailsForm.Name,
      Age: this.personalDetailsForm.Age,
      PhoneNo: this.personalDetailsForm.PhNo,
      DateOfBirth: this.personalDetailsForm.DOB,
      MaritalStatus: this.personalDetailsForm.Maritalstatus,
      State: this.personalDetailsForm.State,
      Address: this.personalDetailsForm.Address,
      AltPhoneNo: this.personalDetailsForm.AltPhNo,
      ProofPath: this.personalDetailsForm.IDProof,
      Sex: this.personalDetailsForm.Sex,
      HostelName: this.hostalsDetailsForm.HostelName,
      HostalAddress: this.hostalsDetailsForm.HostalAddress,
      NoOfRooms: this.hostalsDetailsForm.NoOfRooms,
      MinimumRent: this.hostalsDetailsForm.minrent,
      MaximunRent: this.hostalsDetailsForm.maxrent,
      ContactNumber: this.hostalsDetailsForm.contactno,
      OwnerName: this.hostalsDetailsForm.ownerName,
      HostalPhotosPath: this.hostalsDetailsForm.HostelPhotos,
    };
    return UserDetails;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

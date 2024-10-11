import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from './Service/service.service';
import { UserDetails } from 'src/app/model/UserDetails';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.scss'],
})
export class CreateAccComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  constructor(private UserService: UserService, private router: Router) {}

  DetailsHeader: any[] = [
    { title: 'PersonalDetails', value: 1, color: 'white' },
    { title: 'HostalsDetails', value: 2, color: 'white' },
    { title: 'Account', value: 3, color: 'white' },
  ];
  MainDetails: number = 1;
  personalDetailsForm: any;
  hostalsDetailsForm: any;
  accountForm: any;
  PageKey: string = '';
  ngOnInit(): void {}

  PageChanged(data: any) {
    this.MainDetails = data.No;
    this.PageKey = data.Key;
    if (data.No == 2) {
      this.changeColorByIndex(this.DetailsHeader, 0, 'limegreen');
    } else if (data.No == 3) {
      this.changeColorByIndex(this.DetailsHeader, 1, 'limegreen');
    } else {
      this.changeColorByIndex(this.DetailsHeader, 0, 'white');
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
    if (this.PageKey === 'PersonalDetails') {
      this.personalDetailsForm = form.value;
    } else if (this.PageKey === 'HostelDetails') {
      this.hostalsDetailsForm = form.value;
    } else if (this.PageKey === 'Account') {
      this.accountForm = form.value;
      this.Submit();
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

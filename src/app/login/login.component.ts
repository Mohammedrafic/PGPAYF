import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginserviceService } from './Service/loginservice.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  LoginForm = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
  });

  constructor(
    private LoginService: LoginserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  Login() {
    let Email = this.LoginForm.controls['Email'].value;
    let Password = this.LoginForm.controls['Password'].value;
    this.subs.add(this.LoginService.GetLoginDetails(Email, Password).subscribe((res: any) => {
      if (res.isSuccess) {
        console.log(res.content);
        if(res.content.userRole == 'Admin'){
          this.router.navigate(['main','dashboard']);
        }else if(res.content.userRole == 'User'){
          this.router.navigate(['main','userdashboard']);
        }else{
          this.router.navigate(['main','']);
        }
      }
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

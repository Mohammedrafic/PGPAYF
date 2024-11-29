import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../Service/loginservice.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  private subs = new SubSink();

  forgotPasswordForm = new FormGroup({
    Email: new FormControl(''),
  });

  constructor(
    private LoginService: LoginserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  resetPassword() {
    const email = this.forgotPasswordForm.controls['Email'].value;
    this.subs.add(this.LoginService.ForgotPassword(email).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Password reset instructions have been sent to your email.');
        this.router.navigate(['/login']);
      } else {
        alert('Failed to send password reset instructions.');
      }
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

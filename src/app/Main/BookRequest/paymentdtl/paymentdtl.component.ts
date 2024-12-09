import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentdtl',
  templateUrl: './paymentdtl.component.html',
  styleUrls: ['./paymentdtl.component.scss']
})
export class PaymentdtlComponent implements OnInit {

  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cardNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{16}$/)],
      ],
      expiryDate: ['', Validators.required],
      securityCode: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{3}$/)],
      ],
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      console.log('Payment Submitted:', this.paymentForm.value);
      alert('Payment Submitted Successfully!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}

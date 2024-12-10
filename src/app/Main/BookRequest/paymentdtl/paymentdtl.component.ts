import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentdtl',
  templateUrl: './paymentdtl.component.html',
  styleUrls: ['./paymentdtl.component.scss']
})
export class PaymentdtlComponent implements OnInit {

  paymentForm!: FormGroup;
  selectedPaymentMethod: string = 'upi'; // Default payment method

  constructor(private fb: FormBuilder) { }

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
      upiId: ['', [Validators.required, Validators.pattern(/^[\w.-]+@[\w.-]+$/)]],
      qrCode: [''],
    });
    this.onPaymentMethodChange(this.selectedPaymentMethod);
  }

  onPaymentMethodChange(method: any): void {
    debugger;
    this.selectedPaymentMethod = method.target != undefined ? method.target.value : method;

    if (this.selectedPaymentMethod === 'upi') {
      this.paymentForm.get('upiId')?.setValidators([Validators.required, Validators.pattern(/^[\w.-]+@[\w.-]+$/)]);
      this.paymentForm.get('qrCode')?.clearValidators();
      ['cardNumber', 'expiryDate', 'securityCode', 'firstName', 'lastName'].forEach((field) => {
        this.paymentForm.get(field)?.clearValidators();
        this.paymentForm.get(field)?.reset();
      });
    } else if (this.selectedPaymentMethod === 'qr') {
      this.paymentForm.get('qrCode')?.setValidators([Validators.required]);
      this.paymentForm.get('upiId')?.clearValidators();
      ['cardNumber', 'expiryDate', 'securityCode', 'firstName', 'lastName'].forEach((field) => {
        this.paymentForm.get(field)?.clearValidators();
        this.paymentForm.get(field)?.reset();
      });
    } else {
      ['cardNumber', 'expiryDate', 'securityCode', 'firstName', 'lastName'].forEach((field) => {
        this.paymentForm.get(field)?.setValidators(Validators.required);
      });
      this.paymentForm.get('upiId')?.clearValidators();
      this.paymentForm.get('qrCode')?.clearValidators();
    }

    this.paymentForm.get('upiId')?.updateValueAndValidity();
    this.paymentForm.get('qrCode')?.updateValueAndValidity();
    ['cardNumber', 'expiryDate', 'securityCode', 'firstName', 'lastName'].forEach((field) => {
      this.paymentForm.get(field)?.updateValueAndValidity();
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

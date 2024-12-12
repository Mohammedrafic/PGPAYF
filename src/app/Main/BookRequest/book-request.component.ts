import { Component, OnInit, ViewChild } from '@angular/core';
import { BookRequestService } from './service/book-request.service';
import { UserdtlComponent } from './userdtl/userdtl.component';
import { PaymentdtlComponent } from './paymentdtl/paymentdtl.component';
import { HostelRequest } from 'src/app/model/UserDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-request',
  templateUrl: './book-request.component.html',
  styleUrls: ['./book-request.component.scss']
})
export class BookRequestComponent implements OnInit {
  @ViewChild(UserdtlComponent) userDetailsComponent!: UserdtlComponent;
  @ViewChild(PaymentdtlComponent) PaymentdtlComponent!: PaymentdtlComponent;

  dtl: any = {
    images: [
      'assets/images/hostel-img-1.jpg',
      'assets/images/beds-hostel-affordable-housing-36997317.webp',
      'assets/images/beds-hostel-affordable-housing-36997317.webp',
      'assets/images/hostel-image-2.jpg',
      'assets/images/beds-hostel-affordable-housing-36997317.webp',
      'assets/images/beds-hostel-affordable-housing-36997317.webp'
    ]
  }
  propertylist: any;
  HostelName: any;
  ReviewCount: any;
  Rating: any;
  HostelAddress: any;
  ReviewText: any;
  Offer: any;
  Amount: any;
  DiscountAmount: any;
  Isbtnclick: any;
  HostelId: number = 0;
  UserId: number = 0;
  constructor(private service: BookRequestService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.Getparamsid();
    this.service.GetHostelByID(this.HostelId).subscribe((res: any) => {
      console.log(res);
      this.propertylist = res.content.amenities;
      this.HostelName = res.content.name;
      this.ReviewCount = res.content.reviewCount;
      this.Rating = res.content.rating;
      this.HostelAddress = res.content.location;
      this.ReviewText = res.content.reviewText;
      this.Offer = res.content.offer;
      this.Amount = res.content.amount;
      this.DiscountAmount = res.content.discount;
    });
  }

  btnsubmit(event: any) {
    this.Isbtnclick = true;
    this.validateUserDetails();
  }

  validateUserDetails() {
    debugger;
    if (this.userDetailsComponent) {
      const isValid = this.userDetailsComponent.ValidateForm();
      if (isValid) {
        let UserForm = this.userDetailsComponent.userDetailForm.value;
        let PaymentForm = this.PaymentdtlComponent.paymentForm.value;
        console.log('UserForm:', UserForm);
        console.log('PaymentForm:', PaymentForm)

        const payload = this.HostelRequestPayload(UserForm, PaymentForm);
        this.service.BookingRequest(payload).subscribe((res: any) => {
          if (res) {
            if (res.content) {
              this.toastr.success('request sent successfully', 'Success');
              this.router.navigate(['/main/HostelDetails', this.HostelId]);
            } else {
              this.toastr.error(res.message, 'Error');
              this.router.navigate(['/main/HostelDetails', this.HostelId]);
            }
            console.log(res);
          }
        });
      }
      console.log('Valid', isValid);
      if (this.PaymentdtlComponent) {
        const payemnt = this.PaymentdtlComponent.isPaumentSuccessfull;
        console.log(payemnt);
      }
    }
  }

  HostelRequestPayload(Udetails: any, PDetails: any) {
    let UserDetails: HostelRequest = {
      requestType: Udetails.requestType,
      hostelId: this.HostelId,
      userId: this.UserId,
      requestDate: new Date().toISOString(),
      status: Udetails.status,
      description: Udetails.description,
      assignedTo: Udetails.username,
      response: "",
      contactDetails: Udetails.contactDetails,
      isResolved: false,
      lastUpdated: new Date().toISOString(),
      payment: {
        hostelId: this.HostelId,
        userId: this.UserId,
        paymentDate: new Date().toISOString(),
        amount: 5000,
        paymentMethod: PDetails.paymentMethod,
        transactionId: Udetails.contactDetails,
        paymentStatus: "Pending",
        isAdvancePayment: false,
        advanceAmount: 0,
        remainingBalance: 0,
        remarks: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    }
    return UserDetails;
  }

  Getparamsid() {
    this.route.params.subscribe((params) => {
      const hostelId = params['id'];
      const userId = sessionStorage.getItem('userId');
      if (userId !== null) {
        this.UserId = parseInt(userId, 10);
        this.HostelId = parseInt(hostelId, 10);
      }
    });
  }
}

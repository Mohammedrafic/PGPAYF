import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { RequestComponent } from './Main/request/request.component';
import { CreateAccComponent } from './AccountCreate/create-acc.component';
import { PersonalDetailsComponent } from './AccountCreate/personal-details/personal-details.component';
import { HostalsDetailsComponent } from './AccountCreate/hostals-details/hostals-details.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { AccountComponent } from './AccountCreate/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAccComponent } from './AccountCreate/user-acc/user-acc.component';
import { UserDashboardComponent } from './Main/user-dashboard/user-dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { HostelsComponent } from './Main/hostels/hostels.component';
import { PDetailsComponent } from './pdetails/pdetails.component';
import { FiltersComponent } from './Main/filters/filters.component';
import { LeftnavComponent } from './layout/leftnav/leftnav.component';
import { AddHostelsComponent } from './Main/add-hostels/add-hostels.component';
import { ContactComponent } from './Main/contact/contact.component';
import { FeedbackComponent } from './Main/feedback/feedback.component';
import { HostelModule } from './Main/hostel-details/hostel-details.module';
import { CommonModule, DatePipe } from '@angular/common';
import { spinnerModule } from './loader/spinner.module';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SinglerDemoComponent } from './singler-demo/singler-demo.component';
import { UserdtlComponent } from './Main/BookRequest/userdtl/userdtl.component';
import { BookRequestComponent } from './Main/BookRequest/book-request.component';
import { PropertydtlComponent } from './Main/BookRequest/propertydtl/propertydtl.component';
import { PaymentdtlComponent } from './Main/BookRequest/paymentdtl/paymentdtl.component';
import { HostelcardComponent } from './Main/BookRequest/hostelcard/hostelcard.component';
import { TopnavComponent } from './layout/topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    DashboardComponent,
    RequestComponent,
    CreateAccComponent,
    PersonalDetailsComponent,
    HostalsDetailsComponent,
    RoleSelectionComponent,
    AccountComponent,
    UserAccComponent,
    UserDashboardComponent,
    HostelsComponent,
    PDetailsComponent,
    FiltersComponent,
    LeftnavComponent,
    AddHostelsComponent,
    ContactComponent,
    FeedbackComponent,
    ForgotPasswordComponent,
    SinglerDemoComponent,
    BookRequestComponent,
    UserdtlComponent,
    PropertydtlComponent,
    PaymentdtlComponent,
    HostelcardComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', 
      timeOut: 3000,  
      preventDuplicates: true,
      closeButton: true, 
      progressBar: true 
    }),
    BrowserAnimationsModule,
    AgGridModule,
    FormsModule,
    HostelModule,
    CommonModule,
    spinnerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }

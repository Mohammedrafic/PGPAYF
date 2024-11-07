import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { RequestComponent } from './Main/request/request.component';
import { CreateAccComponent } from './AccountCreate/create-acc.component';
import { PersonalDetailsComponent } from './AccountCreate/personal-details/personal-details.component';
import { HostalsDetailsComponent } from './AccountCreate/hostals-details/hostals-details.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { AccountComponent } from './AccountCreate/account/account.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserAccComponent } from './AccountCreate/user-acc/user-acc.component';
import { UserDashboardComponent } from './Main/user-dashboard/user-dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { SpinnerComponent } from './loader/spinner/spinner.component';
import { LoaderInterceptor } from './loader/interceptors/loader.interceptor';
import { HostelsComponent } from './Main/hostels/hostels.component';
import { PDetailsComponent } from './pdetails/pdetails.component';


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
    SpinnerComponent,
    HostelsComponent,
    PDetailsComponent,
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
    AgGridModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }

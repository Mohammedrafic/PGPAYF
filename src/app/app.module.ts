import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
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
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

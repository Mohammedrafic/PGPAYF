import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { RequestComponent } from './Main/request/request.component';
import { CreateAccComponent } from './AccountCreate/create-acc.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { UserDashboardComponent } from './Main/user-dashboard/user-dashboard.component';
import { HostelsComponent } from './Main/hostels/hostels.component';
import { AddHostelsComponent } from './Main/add-hostels/add-hostels.component';
import { ContactComponent } from './Main/contact/contact.component';
import { FeedbackComponent } from './Main/feedback/feedback.component';
import { HostelDetailsComponent } from './Main/hostel-details/hostel-details.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SinglerDemoComponent } from './singler-demo/singler-demo.component';
import { BookRequestComponent } from './Main/BookRequest/book-request.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'userdashboard',
        component: UserDashboardComponent,
      },
      {
        path: 'request',
        component: RequestComponent
      },
      {
        path: 'hostels',
        component: HostelsComponent
      }, 
      {
        path: 'add-hostels',
        component: AddHostelsComponent
      }, 
      {
        path: 'contact',
        component: ContactComponent
      }, 
      {
        path: 'feedback',
        component: FeedbackComponent
      }, 
      {
        path: 'HostelDetails/:id',
        component: HostelDetailsComponent,
        loadChildren: () => import('./Main/hostel-details/hostel-details.module').then(m => m.HostelModule)
      },
      {
        path: 'singler',
        component: SinglerDemoComponent
      },
      {
        path: 'Booking',
        component: BookRequestComponent
      }
    ],
  },
  {
    path: 'createacc',
    component: RoleSelectionComponent,
  },
  {
    path: 'createacc/:id',
    component: CreateAccComponent
  }, 
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

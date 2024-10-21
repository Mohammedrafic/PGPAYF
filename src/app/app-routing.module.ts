import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { RequestComponent } from './Main/request/request.component';
import { CreateAccComponent } from './AccountCreate/create-acc.component';
import { RoleSelectionComponent } from './role-selection/role-selection.component';
import { UserDashboardComponent } from './Main/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

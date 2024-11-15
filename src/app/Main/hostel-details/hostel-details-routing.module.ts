import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelDetailsComponent } from './hostel-details.component';

const routes: Routes = [
    { path: '', component: HostelDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostelRoutingModule { }

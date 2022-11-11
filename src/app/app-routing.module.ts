import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreelancerDetailComponent } from './freelancer-detail/freelancer-detail.component';

const routes: Routes = [{path: 'freelancers', component: DashboardComponent}, 
{path: 'freelancer-detail/:id/:action', component: FreelancerDetailComponent},
{path: 'freelancer/:action', component: FreelancerDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

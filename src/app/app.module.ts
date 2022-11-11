import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreelancerListComponent } from './freelancer-list/freelancer-list.component';
import { FreelancerDetailComponent } from './freelancer-detail/freelancer-detail.component';
import { FreelancerCardComponent } from './freelancer-card/freelancer-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FreelancerListComponent,
    FreelancerDetailComponent,
    FreelancerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

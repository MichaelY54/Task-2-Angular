import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Freelancer, FreelancerModel } from '../model/freelancer';
import { FreelancerService } from '../service/freelancer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchName?:string = "";

  constructor(private freelancerService:FreelancerService, private router:Router) { }

  ngOnInit(): void {
  }

  search(){
    this.freelancerService.getFreelancers().subscribe(freelancers =>{
      var flag = 0;
      freelancers.forEach(fl => {
        if(fl.name?.toLowerCase() == this.searchName?.toLowerCase()){
          flag = 1;
          // alert("found data in id "+fl.id);
          this.router.navigate(['/freelancer-detail/'+fl.id+"/view"]);
        }
      });
      if(flag==0)
        alert("Name not found!");
    });
  }
}

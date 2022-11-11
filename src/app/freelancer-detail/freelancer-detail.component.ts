import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Freelancer, FreelancerModel } from '../model/freelancer';
import { FreelancerService } from '../service/freelancer.service';

@Component({
  selector: 'app-freelancer-detail',
  templateUrl: './freelancer-detail.component.html',
  styleUrls: ['./freelancer-detail.component.css']
})
export class FreelancerDetailComponent implements OnInit {
  freelancer?: Freelancer;
  action: string = "";
  disableBtn: boolean = true;
  freelancerModel = new FreelancerModel("","","","");

  constructor(private freelancerService: FreelancerService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getAction();
  }

  getFreelancer(): void{
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.freelancerService.getFreelancer(idParam).subscribe(a => this.freelancer=a);
  }

  getAction(): void{
    const act = String(this.route.snapshot.paramMap.get('action'));
    this.action = act;
    if(act == "update"){
      this.getFreelancer();
      this.disableBtn = false;
    }
    else if(act == "add"){
      this.freelancer = new FreelancerModel("","","","");
      this.disableBtn = false;
    }
    else if(act == "view"){
      this.getFreelancer();
    }
  }

  goBack(){
    this.location.back();
  }

  submitData(){
    if(this.action == "add"){
      if(this.freelancer!=undefined){
        this.freelancerService.addFreelancerService(this.freelancer).subscribe();
        this.goBack();
      }
    }
    else if(this.action == "update"){
      if(this.freelancer!=undefined){
        this.freelancerService.updateFreelancerService(this.freelancer).subscribe();
        this.goBack();

      }
    }
  }

}

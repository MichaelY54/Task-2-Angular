import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Freelancer } from '../model/freelancer';
import { FreelancerService } from '../service/freelancer.service';

@Component({
  selector: 'app-freelancer-card',
  templateUrl: './freelancer-card.component.html',
  styleUrls: ['./freelancer-card.component.css']
})
export class FreelancerCardComponent implements OnInit {
  @Input() freelancers!: Freelancer[];

  constructor(private freelancerService:FreelancerService, private location:Location) { }

  ngOnInit(): void {
  }

  deleteFreelancer(id?:number){
    if(id!=undefined){
      this.freelancerService.deleteFreelancer(id).subscribe();
      window.location.reload();
    }
  }

}

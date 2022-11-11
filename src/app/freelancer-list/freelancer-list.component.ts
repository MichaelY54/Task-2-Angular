import { Component, OnInit } from '@angular/core';
import { Freelancer } from '../model/freelancer';
import { FreelancerService } from '../service/freelancer.service';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.css']
})
export class FreelancerListComponent implements OnInit {
  freelancers: Freelancer[] = []
  constructor(private freelancerService: FreelancerService) { }

  ngOnInit(): void {
    this.getFreelancers();
  }

  getFreelancers(){
    this.freelancerService.getFreelancers().subscribe(freelancers => this.freelancers = freelancers);
  }

}

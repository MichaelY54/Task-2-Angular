import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freelancer } from '../model/freelancer';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private url: string = "http://localhost:3005/freelancers";
  httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }
  constructor(private http: HttpClient){}

  getFreelancers():Observable<Freelancer[]>{
    return this.http.get<Freelancer[]>(this.url);
  }

  getFreelancer(id: number):Observable<Freelancer>{
    const urlById = `${this.url}/${id}`;
    return this.http.get<Freelancer>(urlById);
  }

  addFreelancerService(freelancer: Freelancer): Observable<Freelancer>{
    // console.log("Posting something")
    return this.http.post<Freelancer>(this.url, freelancer, this.httpOptions);
  }

  updateFreelancerService(freelancer: Freelancer): Observable<Freelancer>{
    // console.log("Posting something")
    const urlById = `${this.url}/${freelancer.id}`;
    return this.http.put<Freelancer>(urlById, freelancer, this.httpOptions);
  }

  deleteFreelancer(id: number):Observable<Freelancer>{
    const urlById = `${this.url}/${id}`;
    return this.http.delete<Freelancer>(urlById);
  }
  
}

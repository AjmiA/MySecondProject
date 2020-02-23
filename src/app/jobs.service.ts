import { Injectable } from '@angular/core';
import { Job } from './interfaces/job';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs =[] ;
  constructor(private httpClient: HttpClient ) { }

  
  addJobs(job){
   
    this.httpClient.post('http://127.0.0.1:8080/jobs',job).subscribe((res =>{
      this.jobs.push(res);
    }))
  }
  getAllJobs(filters) {
    let queryString = new URLSearchParams(filters).toString();
    console.log(queryString);
    return this.httpClient.get('http://127.0.0.1:8080/jobs?' + queryString); 
  }
}

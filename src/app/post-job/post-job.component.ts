import { Component, OnInit } from '@angular/core';

import { JobsService } from '../jobs.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  title : string;
  location:String 
  field : String ;
  jobType : number;
  description :String ;
  experience :String ;
  education : String ;
  requiredSkills : String;
  defaultChoice = 0;
  



  constructor(private jobsService : JobsService,private router : Router, private auth: AuthService) { }


  post(){
    this.jobsService.addJobs({
      title: this.title ,
      location: this.location,
      field: this.field,
      jobType:this.jobType,
      description:this.description,
      experience:this.experience,
      education:this.education,
      requiredSkills: this.requiredSkills.split(','),
      recruiter: this.auth.getCurrentUser().id
    });

     this.router.navigate(["/jobs"]);
  }

  chooseJobType(e) {
    this.jobType = e;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Job } from '../interfaces/job';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  jobs: any[];
  title: string = '';
  location :string = 'All';
  field: string = 'All';
  jobType: number = 9;

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.search();    
  }

  search() {
    
    this.jobsService.getAllJobs({
      title: this.title,
      location: this.location,
      field: this.field,
      jobType: this.jobType
    })
    .subscribe((res: any) => {
      this.jobs = res;
    });
    
  }

}

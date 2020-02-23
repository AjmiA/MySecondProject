import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  educations = [1];
  skills = [1];
  languages=[1];
  hobbies=[1];


  constructor(private router: Router,private profilService : ProfilService ) { }

  ngOnInit() {
  }
  addEducation (){
    
    this.educations.push(this.educations.length + 1);
  }

  addLanguage (){
    
    this.languages.push(this.languages.length + 1);
  }
  addSkill (){
    
    this.skills.push(this.skills.length + 1);
  }
  addHobby (){
    
    this.hobbies.push(this.hobbies.length + 1);
  }

  public removeEducation = id => {
    this.educations.splice(id - 1, 10);
    // 'sqdsqd-sqdsd-qsdq-sdsqd'.split('-')
    // [1, 2, 3, 4].join('-') // "1-2-3-4"
  }

  public removeLanguage = id => {
    this.languages.splice(id - 1, 10);
    
  }
  public removeSkill = id => {
    this.skills.splice(id - 1, 10);
    
  }
  public removeHobby = id => {
    this.hobbies.splice(id - 1, 10);
    
  }

  Next() {

    


    this.router.navigate(['validation'])

  }

}

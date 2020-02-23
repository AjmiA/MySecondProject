import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { ProfilComponent } from './profil/profil.component';
import { DetailComponent } from './detail/detail.component';
import { NavComponent } from './nav/nav.component';
import { ValidationComponent } from './validation/validation.component';
import { TopjobComponent } from './topjob/topjob.component';
import { RecruiterProfilComponent } from './recruiter-profil/recruiter-profil.component';
import { PostJobComponent } from './post-job/post-job.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    JobSearchComponent,
    ProfilComponent,
    DetailComponent,
    NavComponent,
    ValidationComponent,
    TopjobComponent,
    RecruiterProfilComponent,
    PostJobComponent,
    EducationComponent,
    SkillsComponent,
    LanguagesComponent,
    HobbiesComponent
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

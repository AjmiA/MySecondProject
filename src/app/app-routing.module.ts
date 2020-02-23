import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { ProfilComponent } from './profil/profil.component';
import { DetailComponent } from './detail/detail.component';
import { ValidationComponent } from './validation/validation.component';
import { TopjobComponent } from './topjob/topjob.component';
import { AuthGuard } from './auth.guard';
import { RecruiterProfilComponent } from './recruiter-profil/recruiter-profil.component';
import { PostJobComponent } from './post-job/post-job.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: SignUpComponent
  },
  {
    path: 'jobs', component: JobSearchComponent
  },
  {
    path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]
  },
  {
    path: 'detail', component: DetailComponent,canActivate: [AuthGuard]
  },
  {
    path: 'validation', component: ValidationComponent
  },
  {
    path: 'topjob', component: TopjobComponent
  },
  {
    path: 'recruiter', component: RecruiterProfilComponent, canActivate : [AuthGuard]
  },
  {
    path: 'postJob', component: PostJobComponent, canActivate : [AuthGuard]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

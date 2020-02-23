import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = null;


  constructor(private httpClient: HttpClient, private router: Router) {    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  signUp(email, password, userType) {
    this.httpClient.post('http://127.0.0.1:8080/signup', { email, password, userType })
      .subscribe(res => {
        console.log(res)
      });
  }

  login(email, password) {

    this.httpClient.post('http://127.0.0.1:8080/login', { email, password })
      .subscribe((res: any) => {

        if (res.logged == true) {
          if (res.currentUser.userType == 'candidate') {
            this.router.navigate(['/profil'])
          } else {
            this.router.navigate(['/recruiter'])
          }

          this.currentUser = res.currentUser;

          localStorage.setItem('currentUser', JSON.stringify(res.currentUser));
        } else {
          alert('Email or password incorrect');
        }
      });
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isUserLoggedIn() {
    return this.currentUser != null; 
  }

  logout() {          
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.router.navigate(['/login']);
  }




}

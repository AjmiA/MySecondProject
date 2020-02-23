import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private isLoggedIn = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.isUserLoggedIn();
    console.log(this.isLoggedIn)
    console.log(this.auth.getCurrentUser())
  }

  logout() {
    this.auth.logout();
    this.isLoggedIn = false;
  }

}

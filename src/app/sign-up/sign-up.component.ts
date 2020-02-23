import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //private username;
  private email;
  private password;
  private userType;


  constructor(private auth : AuthService) { }

  ngOnInit() {
  }
  signUp(){
    this.auth.signUp(this.email,this.password,this.userType);

    


  }


}

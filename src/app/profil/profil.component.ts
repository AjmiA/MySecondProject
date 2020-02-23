import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ProfilService } from '../profil.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  email: string;
  dateOfBirth: string;
  maritalStatus: string;
  drivingLicense: string;
  telephone: string;




  constructor(private router: Router, private profilService: ProfilService, private auth: AuthService) { }

  Next() {


    this.profilService.addProfil({
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      city: this.city,
      postCode: this.postalCode,
      email: this.email,
      dateOfBirth: this.dateOfBirth,
      maritalStatus: this.maritalStatus,
      drivingLicense: this.drivingLicense,
      telephone: this.telephone,
      userId: this.auth.getCurrentUser().id
    });
    this.router.navigate(['/detail']);

  }

  ngOnInit() {

    this.profilService.getCandidateProfil(this.auth.getCurrentUser().id)
    .subscribe((profil: any) => {
      if (profil != null) {
        this.firstName = profil.firstName;
        this.lastName = profil.lastName;
        this.street = profil.street;
        this.city = profil.city;
        this.telephone = profil.telephone;
        this.postalCode = profil.postCode;
        this.email = profil.email;
        this.dateOfBirth = profil.dateOfBirth;
        this.maritalStatus = profil.maritalStatus;
        this.drivingLicense = profil.drivingLicense;
      }
    });
  }

}

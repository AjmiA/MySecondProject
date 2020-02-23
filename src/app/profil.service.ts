import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private httpClient: HttpClient) { }

  addProfil(profil){
   
    this.httpClient.post('http://127.0.0.1:8080/profil',profil).subscribe((res =>{
      
    }))
  }

  getCandidateProfil(id) {
    return this.httpClient.get('http://127.0.0.1:8080/candidates/' + id);
  }

  addDetail (detail){
    this.httpClient.post('http://127.0.0.1:8080/detail',detail).subscribe((res =>{
      
     
    }))


   

  }




}

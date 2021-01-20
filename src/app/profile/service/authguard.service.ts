import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router:Router,private service:SharedService) { }
  canActivate(){
    if(this.service.is_logedin()){
      return  true;
    }
    else{
      this.router.navigate(['auth','login']);
      return false;
    }
  }    
}

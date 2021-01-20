import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguard implements CanActivate {

  constructor(private router:Router,private service:SharedService) { }
  canActivate(){
    if(this.service.is_admin()){
      return  true;
    }
    else{
      this.router.navigate(['auth','login']);
      return false;
    }
  }
}

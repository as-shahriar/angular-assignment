import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../service/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {
  constructor(private service:ProfileService){
    
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getProfile(1);
  }
}

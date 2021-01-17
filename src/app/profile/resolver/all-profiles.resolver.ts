import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileService } from '../service/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AllProfilesResolver implements Resolve<any> {
  constructor(private service:ProfileService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return  this.service.getAllProfiles();
  }
}

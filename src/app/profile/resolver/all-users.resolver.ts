import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileService } from '../service/profile.service';

@Injectable({
  providedIn: 'root'
})
export class AllUsersResolver implements Resolve<any> {
  constructor(private service:ProfileService){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return  this.service.getAllUsers();
  }
}

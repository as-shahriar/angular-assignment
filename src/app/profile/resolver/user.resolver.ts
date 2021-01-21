import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/service/shared.service';
import { ProfileService } from '../service/profile.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  constructor(private service:ProfileService, private sharedService:SharedService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getUser(this.sharedService.getUser().id).pipe(
      map((data:any)=>{
          data.password = null; //hiding password from UI
          return data
      })
    );
  }
}

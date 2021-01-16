import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) { }

    is_authenticated(email:string, password:string){
      return this.http.get('api/users').pipe(map( (users:any)=>{
        let user = null;
        users.forEach((_user:any) => {
          if( _user.email === email && _user.password === password ){
            user = { 
              id: _user.id,
              is_admin: _user.is_admin
            }
            return;
          }
        });
        return user;
      }
      ));
    }
}

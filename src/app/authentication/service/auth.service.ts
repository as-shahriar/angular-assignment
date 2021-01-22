import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, mergeMap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) { }

    getAll(){
      return this.http.get('api/users');
    }
    getAllProfile(){
      return this.http.get('api/profiles');
    }

    is_authenticated(email:string, password:string){
      let query = email.split("@")[0];
      return this.http.get(`api/users/?email=${query}`).pipe(map( (users:any)=>{
        let user = null;
        users.every((_user:any) => {
          if( _user.email === email && _user.password === password ){
            user = { 
              id: _user.id,
              is_admin: _user.is_admin
            }
            return false;
          }
          return true;
        });
        localStorage.setItem('user',JSON.stringify(user));
        return user;
      }
      ));
    }
    


    signup(user:any){
      return this.http.post('api/users',user);     
    }

    createProfile(profile:any){
      return this.http.post('api/profiles', profile);
    }

}

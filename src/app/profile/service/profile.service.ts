import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  
  constructor(
    private http: HttpClient) { }

    getAllProfiles(){
      return this.http.get('api/profiles');
    }
    getProfile(id:number){
      return this.http.get(`api/profiles/${id}`);      
    }
    getUser(id:number){
      return this.http.get(`api/users/${id}`);
    }
    getAllUsers(){
      return this.http.get('api/users');
    }
    updateProfile(profile:any){
      return this.http.put('api/profiles', profile).subscribe();
    }
    onDelete(id:number){
      this.http.delete(`api/users/${id}`).subscribe(e=>{
        this.http.delete(`api/profiles/${id}`);
      });
    }
}



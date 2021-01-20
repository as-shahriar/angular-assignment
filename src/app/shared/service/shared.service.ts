import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getUser(){
    let userJson = localStorage.getItem("user");
    if (userJson!=null){
      let user = JSON.parse(userJson);
      return user;
    }
    return null;
  }

  is_admin(){
    let user = this.getUser();
    if(user!=null)
      return user.is_admin;
    return false;
  }

  is_logedin(){
    let user = this.getUser();
    if(user!=null)
      return true;
    return false;
  }
}

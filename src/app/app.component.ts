import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private service:SharedService){}


  title = 'Angular';


  isLogedin(){
    return this.service.is_logedin();
  }
  isAdmin(){
    return this.service.is_admin();
  }

  logout(){
    this.is_logedin = false;
    this.is_admin = false;
    localStorage.removeItem('user');
  }



}



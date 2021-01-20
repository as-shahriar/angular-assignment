import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  constructor(private service:SharedService){}
  ngOnInit(): void {
    this.is_logedin = this.service.is_logedin();
    this.is_admin = this.service.is_admin();
  }

  title = 'Angular';
  is_logedin = false;
  is_admin = false;
  logout(){
    this.is_logedin = false;
    this.is_admin = false;
    localStorage.removeItem('user');
  }



}



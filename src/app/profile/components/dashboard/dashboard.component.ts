import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sort } from './sort.enums';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit  {
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.setUserList(0);
  }

  users:any[] = []
  is_sorted:Sort=Sort.normal;
  last_index = 0;
  has_next:boolean = false;
  has_previous:boolean = false;

  sort(){  
    if(this.is_sorted===Sort.normal){
      this.users.sort((a, b) => (a.name > b.name) ? 1 : -1);
      this.is_sorted = Sort.asc;
    }
    else if(this.is_sorted===Sort.asc){
      this.users.sort((a, b) => (a.name > b.name) ? -1 : 1);
      this.is_sorted = Sort.desc;
    }
    else{
      this.users.sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.is_sorted = Sort.normal;
    }
  }

 
  setUserList(start:number){
    this.users = []
    let size = 1, i = start;
    let limit = this.route.snapshot.data['allUserData'].length;
    limit = (limit> start+11)? start+11:limit;
    while(size<limit && i<limit){
      if(this.route.snapshot.data['allUserData'][i].is_admin) {i++; continue;}
      let user = {
          id : this.route.snapshot.data['allUserData'][i].id,
          name : `${this.route.snapshot.data['allProfileData'][i].fname} ${this.route.snapshot.data['allProfileData'][i].lname}`,
          email: this.route.snapshot.data['allUserData'][i].email,
      }
      this.users.push(user);
      i++;
      size++;
    }
    this.last_index = i;
  }
  nextPage(){
    this.setUserList(this.last_index);
  }
}

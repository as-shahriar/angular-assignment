import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { Sort } from './sort.enums';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit  {
  

  constructor(private route:ActivatedRoute,private service:ProfileService ) { }

  ngOnInit() {

    for(let i=0;i<this.route.snapshot.data['allUserData'].length;i++){
      if(this.route.snapshot.data['allUserData'][i].is_admin)  continue;
      this.allUsers.push({
        id : this.route.snapshot.data['allUserData'][i].id,
        name : `${this.route.snapshot.data['allProfileData'][i].fname} ${this.route.snapshot.data['allProfileData'][i].lname}`,
        email: this.route.snapshot.data['allUserData'][i].email,
      })
    }
    this.setUserList(0);
  }

  users:any[] = []
  allUsers:any[] = []
  is_sorted:Sort=Sort.normal;
  last_index = 0;
  has_next:boolean = false;
  has_previous:boolean = false;
  on_edit  = false;

  sort(){  
    if(this.is_sorted===Sort.normal){
      this.allUsers.sort((a, b) => (a.name > b.name) ? 1 : -1);
      this.is_sorted = Sort.asc;
    }
    else if(this.is_sorted===Sort.asc){
      this.allUsers.sort((a, b) => (a.name > b.name) ? -1 : 1);
      this.is_sorted = Sort.desc;
    }
    else{
      this.allUsers.sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.is_sorted = Sort.normal;
    }
    this.setUserList(0);
  }


  setUserList(start:number){
    this.users = []
    let end = start+10;
    let limit = this.allUsers.length;
    
    this.has_next = (limit>end)? true : false;
    this.has_previous = (start!=0)? true : false; 
    limit = (limit> end)? end:limit;
  
    this.users = this.allUsers.slice(start,end);
    this.last_index = end;
  }

  nextPage(){
    this.setUserList(this.last_index);
  }
  previousPage(){
    this.setUserList(this.last_index-20);
  }

  onDelete(id:number){
    this.users = this.users.filter(user=>{
        return user.id !== id;
    })
    this.service.onDelete(id);
  }
  onEdit(){
    this.on_edit = true;
  }
  onClose(){
    this.on_edit = false;
  }
}

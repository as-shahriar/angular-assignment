import { DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/service/shared.service';
import { PasswordValidator } from 'src/app/shared/validators/password.validator';
import { ProfileService } from '../../service/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  constructor(
    private fb: FormBuilder,
    private service:ProfileService,
    private route:ActivatedRoute,
    private sharedService:SharedService) {   }
  

  userID = this.route.snapshot.data['userData'].id;
  is_submitted = false;
  is_editable = false;
  profileForm = this.fb.group({
    fname:  [this.route.snapshot.data['profileData'].fname,Validators.required],
    lname:  [this.route.snapshot.data['profileData'].lname,Validators.required],
    email : [this.route.snapshot.data['userData'].email,[Validators.required,Validators.email]],
    password: ['',PasswordValidator],
    date_of_birth: [this.route.snapshot.data['profileData'].date_of_birth],
    gender: [this.route.snapshot.data['profileData'].gender],
    address: [this.route.snapshot.data['profileData'].address],
    phone: [this.route.snapshot.data['profileData'].phone],
    interest: [this.route.snapshot.data['profileData'].interest]
  })

  get fname(){
    return this.profileForm.get('fname');
  }
  get lname(){
   return this.profileForm.get('lname');
 }
 get email(){
   return this.profileForm.get('email');
 }
 get password(){
   return this.profileForm.get('password');
 }
 get gender(){
  return this.profileForm.get('gender');
}
get date_of_birth(){
  return this.profileForm.get('date_of_birth');
}

 onSubmit(){
  this.is_editable = false;
  let data = this.profileForm.value;
  data.id = this.sharedService.getUser().id;
  this.service.updateProfile(data);
 }
 enableEdit(){
   this.is_editable = true;
 }

}

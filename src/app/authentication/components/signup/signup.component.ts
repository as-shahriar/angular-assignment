import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/shared/validators/password.validator';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  is_submitted:boolean = false;
  constructor(private fb: FormBuilder,private service :AuthService,private router: Router,) {
  }

 signupForm = this.fb.group({
   fname:  ['',Validators.required],
   lname:  ['',Validators.required],
   email : ['',[Validators.required,Validators.email]],
   password: ['',PasswordValidator],
   role: ['',Validators.required]
 })

 get fname(){
   return this.signupForm.get('fname');
 }
 get lname(){
  return this.signupForm.get('lname');
}
get email(){
  return this.signupForm.get('email');
}
get password(){
  return this.signupForm.get('password');
}
get role(){
  return this.signupForm.get('role');
}

onSubmit(){
  
    this.is_submitted = true;
    if(!this.signupForm.invalid){
    let is_admin = (this.signupForm.value.role==='admin')? true:false;

    this.service.signup(
      {  
        email: this.signupForm.value.email,
        password: this.signupForm.value.password, 
        is_admin: is_admin 
      }
    ).subscribe(user=>{
      console.log(user);
      
      if(user){
        this.service.createProfile({
          fname: this.signupForm.value.fname,
          lname:this.signupForm.value.lname,
          date_of_birth: null,
          gender: null,
          phone: null,
          address: null,
          interest: null,
        }).subscribe(profile=>{
          console.log(profile);
          
          if(profile){
            this.router.navigate(['auth','login']);
          }
        })
      }
    })

    
  }
}

  

}

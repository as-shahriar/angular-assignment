import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  is_submitted:boolean = false;

  constructor(private fb: FormBuilder,private service:AuthService) {
   }

  loginForm = this.fb.group({
    email : ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  })
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }



  onSubmit(){
    this.is_submitted = true;
    if(!this.loginForm.invalid){
      this.service.is_authenticated(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        (user)=>{
          console.log(user);
        }
      )
      
       
    }
    
  
  }
}

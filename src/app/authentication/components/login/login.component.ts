import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  is_submitted:boolean = false;

  constructor(private fb: FormBuilder) {
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
      console.log(this.loginForm.value);
    }
   
  
  }
}

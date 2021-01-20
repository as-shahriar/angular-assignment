import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  is_submitted:boolean = false;
  error = false;

  constructor(private fb: FormBuilder,private service:AuthService,private router:Router) {
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
        (user:any)=>{
          if(user==null) this.error = true;
          
          else{
            if(user.is_admin){
              this.router.navigate(['user','dashboard']);
            }
            else{
              this.router.navigate(['user']);
            }
          }
        }
      )
      
       
    }
    
  
  }
}

import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  is_submitted:boolean = false;
  constructor(private fb: FormBuilder) {
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
  console.log(this.signupForm.value);
  }
}
  

}

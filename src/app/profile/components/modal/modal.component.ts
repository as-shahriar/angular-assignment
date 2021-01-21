import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges   {

  constructor(private fb: FormBuilder,private service: ProfileService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.modal === true){
      this.service.getProfile(this.userID).subscribe((data:any)=>{
        const form =  this.profileForm; 
        if(form){
          form.get("fname").setValue(data.fname);
          form.get("lname").setValue(data.lname);
          form.get("address").setValue(data.address);
          form.get("phone").setValue(data.phone);
          form.get("date_of_birth").setValue(data.date_of_birth);
          form.get("gender").setValue(data.gender);
          form.get("interest").setValue(data.interest);
        }
      })
    }
    
  }

  

  @Input("modal-state") modal = false;
  @Input("user-ID") userID:number = 0;
  @Output() modalStateChange = new EventEmitter(); 
  @Output() updatedUser = new EventEmitter(); 

  is_submitted = false;

  
  closeModal(){
    this.modal = false;
    this.modalStateChange.emit();
    const form =  this.profileForm; 
        if(form){
          form.get("fname").setValue('');
          form.get("lname").setValue( '');
          form.get("address").setValue( '');
          form.get("phone").setValue( '');
          form.get("date_of_birth").setValue( '');
          form.get("gender").setValue( '');
          form.get("interest").setValue( '');
        }
  }
  profileForm = this.fb.group({
    fname: [ ''],
    lname: [ ''],
    date_of_birth: [ ''],
    gender: [ ''],
    address: [ ''],
    phone: [ ''],
    interest: ['']
  })

  get fname(){
    return this.profileForm.get('fname');
  }
  get lname(){
   return this.profileForm.get('lname');
 }

 get gender(){
  return this.profileForm.get('gender');
}

 onSubmit(){
  this.is_submitted = true;
  if(!this.profileForm.invalid){
    let data = this.profileForm.value;
    data.id = this.userID;
    this.service.updateProfile(data);
    this.closeModal();
    this.updatedUser.emit({
      id: data.id,
      fname: data.fname,
      lname: data.lname,
      email: data.email
    });
  }
  

  
 }

}

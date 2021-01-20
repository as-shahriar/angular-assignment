import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor() { }
  @Input("modal-state") modal = false;
  @Output() modalStateChange = new EventEmitter(); 
  
  closeModal(){
    let id = 5;
    this.modal = false;
    this.modalStateChange.emit();
  }

}

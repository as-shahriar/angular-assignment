import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './service/shared.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[SharedService]
})
export class SharedModule { }

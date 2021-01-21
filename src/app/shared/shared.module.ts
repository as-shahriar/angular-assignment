import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './service/shared.service';
import { RequiredDirective } from './derectives/required.directive';



@NgModule({
  declarations: [RequiredDirective],
  imports: [
    CommonModule,
  ],
  providers:[SharedService]
})
export class SharedModule { }

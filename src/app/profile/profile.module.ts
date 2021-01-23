import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './service/profile.service';
import { ProfileResolver } from './resolver/profile.resolver';
import { UserResolver } from './resolver/user.resolver';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModalComponent } from './components/modal/modal.component';
import { CustomPipe } from './custom.pipe';
import { CustomDirective } from './custom.directive';




@NgModule({
  declarations: [
    ProfileComponent, 
    DashboardComponent, 
    ModalComponent,
    CustomPipe,
    CustomDirective
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    ProfileService,
    ProfileResolver,
    UserResolver
  ]
})
export class ProfileModule { }

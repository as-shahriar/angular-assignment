import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './service/profile.service';
import { ProfileResolver } from './resolver/profile.resolver';
import { UserResolver } from './resolver/user.resolver';
import { DashboardComponent } from './components/dashboard/dashboard.component';




@NgModule({
  declarations: [ProfileComponent, DashboardComponent],
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

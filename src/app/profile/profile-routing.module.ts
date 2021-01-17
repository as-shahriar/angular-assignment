import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileResolver } from './resolver/profile.resolver';
import { UserResolver } from './resolver/user.resolver';


const routes: Routes = [
    {
      path: '',
      component: ProfileComponent,
      resolve: {
        profileData : ProfileResolver,
        userData: UserResolver
      }
    },
    {
      path:'dashboard',
      component: DashboardComponent,
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

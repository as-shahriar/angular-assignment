import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AllProfilesResolver } from './resolver/all-profiles.resolver';
import { AllUsersResolver } from './resolver/all-users.resolver';
import { ProfileResolver } from './resolver/profile.resolver';
import { UserResolver } from './resolver/user.resolver';
import { AdminAuthguard } from './service/adminauthguard.service';
import { AuthguardService } from './service/authguard.service';


const routes: Routes = [
    {
      path: '',
      component: ProfileComponent,
      resolve: {
        profileData : ProfileResolver,
        userData: UserResolver
      },
      canActivate: [AuthguardService]
    },
    {
      path:'dashboard',
      component: DashboardComponent,
      resolve: {
        allProfileData : AllProfilesResolver,
        allUserData: AllUsersResolver
      },
      canActivate: [AdminAuthguard]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

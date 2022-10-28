import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MydashboardComponent } from './components/my-dashboard/mydashboard.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { PetsComponent } from './components/pets/pets.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuardService } from './service/sing-in/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'petFormFound',
    component: PetFormComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'petFormLost',
    component: PetFormComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'pets',
    component: PetsComponent,
  },
  {
    path: 'myDashboard',
    component: MydashboardComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'singIn',
    component: SignInComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MydashboardComponent } from './pages/mydashboard/mydashboard.component';
import { PetFormComponent } from './pages/pet-form/pet-form.component';
import { PetsComponent } from './pages/pets/pets.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'petFormFound',
    component: PetFormComponent,
  },
  {
    path: 'petFormLost',
    component: PetFormComponent,
  },
  {
    path: 'pets',
    component: PetsComponent,
  },
  {
    path: 'myDashboard',
    component: MydashboardComponent,
  },
  {
    path: 'singIn',
    component: SingInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

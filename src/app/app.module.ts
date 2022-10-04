import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PetsComponent } from './pages/pets/pets.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { MenubarModule } from 'primeng/menubar';
import { PetFormComponent } from './pages/pet-form/pet-form.component';
import { MydashboardComponent } from './pages/mydashboard/mydashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PetsComponent,
    SingInComponent,
    PetFormComponent,
    MydashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

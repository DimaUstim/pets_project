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
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from '../app/pages/home/productservice';
import { DialogModule } from 'primeng/dialog';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    DialogModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}

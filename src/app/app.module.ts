import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MenubarModule } from 'primeng/menubar';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { MydashboardComponent } from './components/my-dashboard/mydashboard.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetsService } from './service';
import { DialogModule } from 'primeng/dialog';
import { PetsRepository } from './repository';
import { BaseUrlInterceptor } from './interceptors';
import { PetDescriptionComponent } from './components/pet-description/pet-description.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { OverlayService } from './service';
import { SignInService } from './service';
import { AuthGuardService } from './service';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PetsComponent,
    SignInComponent,
    PetFormComponent,
    MydashboardComponent,
    PetDescriptionComponent,
    PopUpComponent,
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
    OverlayModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
  ],
  providers: [
    PetsService,
    PetsRepository,
    OverlayService,
    SignInService,
    AuthGuardService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
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
  providers: [
    PetsService,
    PetsRepository,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetiingDataComponent } from './movies/getiing-data.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
 
import {AuthGuardService} from './sevices/auth-guard.service';
import {LoginService} from './sevices/login.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    GetiingDataComponent,
    HomeComponent,
    NotfoundComponent,
    NavbarComponent,
    LoginFormComponent,
    MovieDescComponent,
    LoginComponent,
    
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuardService,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

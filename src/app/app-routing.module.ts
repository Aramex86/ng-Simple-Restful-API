import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {GetiingDataComponent} from './movies/getiing-data.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
import { AuthGuardService } from './sevices/auth-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent,canActivate:[AuthGuardService]},
  {path: 'movies', component: GetiingDataComponent,canActivate:[AuthGuardService]},
  {path: 'movies/movie/:imdbID', component: MovieDescComponent,canActivate:[AuthGuardService]},
  {path: 'singup', component: LoginFormComponent, 
  canActivate:[AuthGuardService]},
  {path:'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

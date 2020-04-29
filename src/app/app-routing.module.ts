import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {GetiingDataComponent} from './movies/getiing-data.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: GetiingDataComponent},
  {path: 'movies/movie/:imdbID', component: MovieDescComponent},
  {path: 'login', component: LoginFormComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

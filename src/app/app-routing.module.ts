import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
import { GetiingDataComponent } from './movies/getiing-data.component';


const routes: Routes = [
  {path: '' , component: GetiingDataComponent},
  {path: 'movie-desc' , component: MovieDescComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

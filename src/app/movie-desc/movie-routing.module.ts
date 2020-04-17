import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDescComponent } from './movie-desc.component';
import { GetiingDataComponent } from '../movies/getiing-data.component';


const routes: Routes = [
  {path: 'movie-desc' , component: MovieDescComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MovieRoutingModule { }

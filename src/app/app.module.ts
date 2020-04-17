import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetiingDataComponent } from './movies/getiing-data.component';
import { MovieDescComponent } from './movie-desc/movie-desc.component';
import { MovieRoutingModule } from './movie-desc/movie-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GetiingDataComponent,
    MovieDescComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MovieRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

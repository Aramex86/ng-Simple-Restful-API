import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {filter, debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Movies } from '../models/Movie.model';


@Injectable({
  providedIn: 'root'
})


export class RestfulService {

// Api key =10052ba5 &s=

//private url = 'http://www.omdbapi.com/?i=tt1291150&apikey=10052ba5'; //one movie

private _url2 = 'http://www.omdbapi.com/?apikey=10052ba5&plot=full&t='; //movies

private serial ="http://www.omdbapi.com/?apikey=10052ba5&t=Game of Thrones&Season=1";

private coutries ="https://cors-anywhere.herokuapp.com/https://api.printful.com/countries" //list of countries

//queryUrl = '&s=';

//http://www.omdbapi.com/?i=tt1291150&apikey=10052ba5

  constructor(private http: HttpClient) {}

  getMovieData(title: string) {
    const searchByTitle = '&s=';
    return this.http.get(`${this._url2}${searchByTitle}${title}`).pipe(map(res => {
      return res;
    }));
  }

  getSerial(){
    return this.http.get(this.serial);
  }

  getCountries(){
    return this.http.get(this.coutries);
  }

  getOneMovie(imdbID: string){
    const getOneMovieId = '&i=';
    return this.http.get(`${this._url2}${getOneMovieId}${imdbID}`);
  }
}

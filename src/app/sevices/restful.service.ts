import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {filter, debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class RestfulService {

// Api key =10052ba5

//private url = 'http://www.omdbapi.com/?i=tt1291150&apikey=10052ba5'; //one movie

private _url2 = 'http://www.omdbapi.com/?apikey=10052ba5&t=&s='; //movies

//queryUrl = '&s=';

//http://www.omdbapi.com/?i=tt1291150&apikey=10052ba5

  constructor(private http: HttpClient) {}

  getSpotyfyData(title: string) {
    return this.http.get(this._url2 + title).pipe(map(res => {
      return res;
    }));

  }
}

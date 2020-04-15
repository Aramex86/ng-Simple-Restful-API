import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestfulService {

//private url = 'http://dummy.restapiexample.com/api/v1/employees';
//private _url1 = 'https://jsonplaceholder.typicode.com/users';
private _url2 = 'http://www.omdbapi.com/?i=tt3896198&apikey=10052ba5'; //movies

  constructor(private http: HttpClient) { }

  getSpotyfyData() {
    return this.http.get(this._url2)
  }
}

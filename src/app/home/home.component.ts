import { Component, OnInit } from '@angular/core';
import { RestfulService } from './../sevices/restful.service';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movie.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serial$: Observable<Movies[]>

  serials: any=[];
  constructor(private serialservice: RestfulService,) {

   }

  ngOnInit() {

    this.serialservice.getSerial().subscribe((data) => {
      this.serials = data;

      // console.log(data);
    });
  }
}

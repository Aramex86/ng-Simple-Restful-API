import { Component, OnInit } from '@angular/core';
import { RestfulService } from './../sevices/restful.service';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import {filter,debounceTime, distinctUntilChanged} from 'rxjs/operators';



@Component({
  selector: 'geting-data',
  templateUrl: './getiing-data.component.html',
  styleUrls: ['./getiing-data.component.scss']
})
export class GetiingDataComponent implements OnInit {

  // users;
  movies:any = [];
  isLoading = true;
  title = 'Resful Api';

  searchControl = new FormControl();



  constructor(private restfulService: RestfulService) {

    this.searchControl.valueChanges.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(val => console.log(val));



  }

  ngOnInit(): void {
    this.restfulService.getSpotyfyData().subscribe((data) => {
      this.isLoading = false;
      this.movies.push(data);
      console.log(this.movies);
     });
  }


}

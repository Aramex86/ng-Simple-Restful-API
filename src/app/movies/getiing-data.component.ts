import {Component,OnInit} from '@angular/core';
import {RestfulService} from '../sevices/restful.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {filter,debounceTime,distinctUntilChanged} from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'geting-data',
  templateUrl: './getiing-data.component.html',
  styleUrls: ['./getiing-data.component.scss']
})
export class GetiingDataComponent implements OnInit {

  movies: any = [];
  isLoading = false;
  title:string;
  searchControl = new FormControl();
  router: any;



  constructor(private restfulService: RestfulService) {

  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(q => {
      this.isLoading = true;
      this.title = q;
      this.restfulService.getSpotyfyData(this.title).subscribe((data) => {
        this.isLoading = false;
        this.movies = data;
        console.log(this.movies);
        console.log(data);
      });
    });
  }
}

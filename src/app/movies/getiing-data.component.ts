import {Component,OnInit} from '@angular/core';
import {RestfulService} from '../sevices/restful.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {filter,debounceTime,distinctUntilChanged} from 'rxjs/operators';



@Component({
  selector: 'geting-data',
  templateUrl: './getiing-data.component.html',
  styleUrls: ['./getiing-data.component.scss']
})
export class GetiingDataComponent implements OnInit {

  movies: any = [];
  isLoading = false;
  title;
  searchControl = new FormControl();

  constructor(private restfulService: RestfulService) {

  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(q => {
      this.isLoading = true;
      this.title = q;
      this.restfulService.getMovieData(this.title).subscribe((data) => {
        this.isLoading = false;
        this.movies = data;
        // console.log(this.movies.Search);
         //console.log(data);
      });
    });
  }
}

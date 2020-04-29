import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestfulService } from './../sevices/restful.service';

@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-desc.component.html',
  styleUrls: ['./movie-desc.component.scss']
})
export class MovieDescComponent implements OnInit {

  
  imdbID;
  Poster;
  response=[];
  subscription;
  
  

  constructor(
    private route: ActivatedRoute,
    private getonemovieservice: RestfulService
    ) {}

  ngOnInit(){
    this.subscription = this.route.params.subscribe(params => {
      this.imdbID= params['imdbID'];
    });
    this.getonemovieservice.getOneMovie(this.imdbID).subscribe(res => {
      this.response.push(res);
      this.Poster = this.response[0].Poster;
      console.log(this.Poster);
    });
  }
  ngOnDestroy(){
  this.subscription.unsubscribe();
  }
}




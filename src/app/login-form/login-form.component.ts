import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from './../user';
import { RestfulService } from './../sevices/restful.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required)
  });

  title ="Two-way data binding with ngModel"

  countries = ['USA', 'UK', 'Singapore', 'Australia'];

  model = new User('', '', '');
  submitted = false;

  constructor(private countryservice: RestfulService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }
}

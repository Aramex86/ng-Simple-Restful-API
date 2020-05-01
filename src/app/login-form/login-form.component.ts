import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { User } from './../user';
import { RestfulService } from './../sevices/restful.service';
import { LoginService } from '../sevices/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private countryservice: RestfulService,
    private loginservice: LoginService,
    fb: FormBuilder
    ) {
      this.form = fb.group({
        username : ['', Validators.required],
        password : ['', Validators.required],
        email:['', Validators.required]
    });
    }



  ngOnInit(): void { }
}

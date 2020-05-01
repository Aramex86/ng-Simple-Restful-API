import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../sevices/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private loginservice: LoginService,
    fb: FormBuilder
    ) {
      this.form = fb.group({
        username : ['', Validators.required],
        password : ['', Validators.required]
    });
   

    }
  ngOnInit(): void {
  }

  login(){
    const result = this.loginservice.login(
      this.form.controls['username'].value,
      this.form.controls['password'].value,
    );
    
    if(!result){
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });  
    }
    console.log(this.form.value)
  }

}

import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,
              private loginservice: LoginService) { }

  canActivate() {
    if(this.loginservice.isLoggedIn) {
      return true;
    }
    
    //  imperative navigation
    this.router.navigate(['login']);
    return false;
     }
  }







// 1.import Router and LoginService,


// 2.inject in constructor :  Router and service

// 3. add imperative navigation

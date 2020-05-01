import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()

export class LoginService {


  isLoggedIn = false;

  constructor(private router: Router) { }
  login(username, password) {
    if (username === 'slava' && password === '123') { 
      this.isLoggedIn = true;
      this.router.navigate(['']);

    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
  logout() {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}

import { NgModule, Injectable } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserObject } from '../models/user-info';
import 'rxjs/add/operator/filter';

@Injectable()
export class AuthenticationService {
  testUrl = 'https://jsonplaceholder.typicode.com/users/';
  repsonse: any;
  isAuthenticated = false;
  tempUser: any;
  constructor(
    private _router: Router,
    private http: HttpClient,
    private router: Router
  ) {}

  login(userName: string): boolean {
    this.http.get(this.testUrl, { observe: 'response' }).subscribe(data => {
      this.repsonse = data.body;
      const tempResponse = this.repsonse.filter(x => x.name === userName);
      if (tempResponse) {
        this.isAuthenticated = true;
        localStorage.setItem('currentUser', JSON.stringify(tempResponse));
        this.router.navigate(['/home', {outlets: {firstchild: ['post']}}]);
      }
    }); // return this.http
    return this.isAuthenticated;
  }
  logout() {
    localStorage.removeItem('currentUser');
    this._router.navigate(['/']);
  }
  checkCredentials() {
    if (!localStorage.currentUser) {
      this._router.navigate(['/login']);
    } else {
      this._router.navigate(['/home']);
    }
  }
}

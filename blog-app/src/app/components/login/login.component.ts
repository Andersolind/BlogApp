import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  post: any; // A property for our submitted form
  userName: string;

  // Bootstrap toggle
  collapsed = true;
  isAuthenticated: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  userLogin(myForm) {
    if (!myForm.invalid) {
      this.isAuthenticated = this.authenticationService.login(this.userName);
    }
  }
  ngOnInit() {
    // Check local storage to auto login
    this.authenticationService.checkCredentials();
  }
}

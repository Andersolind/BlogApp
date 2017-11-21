import { Component, OnInit } from '@angular/core';

import { UserDetails } from '../../../models/user-info';
import { AuthenticationService } from '../../../service/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthenticationService]
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  userDetails: UserDetails;
  currentUserName: string;
  currentUserWebsite: string;
  companyName: string;
  constructor(private authenticationService: AuthenticationService) {}
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  ngOnInit() {
    // Check local storage
    const userObject = localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser'))
      : [];
    this.currentUserName = userObject[0].name;
    console.log(userObject);
    this.currentUserWebsite = this.checkForMalformedStrings(
      userObject[0].website
    );
    this.companyName = userObject[0].company.name;
  }

  checkForMalformedStrings(url: string): string {
    let defaultHttp = 'http://';
    if (!/^http[s]?:\/\//.test(url)) {
      defaultHttp += url;
      url = defaultHttp;
    }
    return url;
  }
  logout() {
    this.authenticationService.logout();
  }
}

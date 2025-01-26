import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: [
    '../../pages/registration/registration.component.css',
    './registration-form.component.css',
  ],
})
export class RegistrationFormComponent implements OnInit {
  user: SocialUser = new SocialUser();
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.loggedIn);
      if (this.loggedIn) {
        this.handleLoginSuccess(user);
      }
    });
  }
  handleLoginSuccess(user: SocialUser) {
    console.log('Login successful', user);
    // Add your custom logic here, such as:
    // - Sending the user data to your backend
    // - Updating the UI
    // - Storing the user information in local storage
  }
}

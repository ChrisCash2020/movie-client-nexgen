import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../generated/graphql';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  user: User | undefined;
  loggedIn: boolean = false;

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      console.log('Login successful', user);

      // this.user = user;
      // this.loggedIn = user != null;
      // console.log(this.loggedIn);
      // if (this.loggedIn) {
      //   this.handleLoginSuccess(user);
      // }
    });
  }
  handleLoginSuccess(user: SocialUser) {
    console.log('Login successful', user);
    // Add your custom logic here, such as:
    // - Sending the user data to your backend
    // - Updating the UI
    // - Storing the user information in local storage
  }

  handleInternalSignIn() {
    this.authService.internalSignIn(this.email, this.password).subscribe({
      next: (user) => {
        this.user = user;
        console.log(this.user);
      },
      error: (error) => console.error('Error fetching users: ', error),
    });
  }
}

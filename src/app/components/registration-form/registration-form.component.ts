import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, Injectable, OnInit } from '@angular/core';
import {
  NgbDateParserFormatter,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
      : '';
  }
}
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: [
    '../../pages/registration/registration.component.css',
    './registration-form.component.css',
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class RegistrationFormComponent implements OnInit {
  //@ts-ignore
  model: NgbDateStruct;

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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrl: './landing-nav.component.css',
})
export class LandingNavComponent implements OnInit {
  displayProfile: boolean = false;
  homeLink: String = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.http.get('https://api.example.com/user').subscribe((data) => {
    // this.userService.setUser();
    // const userPresent = this.userService.getUser() != null;
    // this.displayProfile = userPresent;
    // this.homeLink = userPresent ? '/main' : '/landing';
    // this.displayProfile = true;
    // });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.http.get('https://api.example.com/user').subscribe((data) => {
    // this.userService.setUser(data);
    // });
  }
}

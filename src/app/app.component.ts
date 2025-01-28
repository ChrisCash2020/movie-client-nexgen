import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log(this.users);
      },
      error: (error) => console.error('Error fetching users: ', error),
    });
  }
}

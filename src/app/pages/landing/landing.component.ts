import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  isLoading: boolean = false;
  isAuth: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}

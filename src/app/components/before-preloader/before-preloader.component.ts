import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-before-preloader',
  templateUrl: './before-preloader.component.html',
  styleUrl: './before-preloader.component.css',
})
export class BeforePreloaderComponent {
  logoUrl: string = 'assets/images/movie-client-preloader.svg';
  @Input() isLoading: boolean = true;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-nav-links',
  templateUrl: './landing-nav-links.component.html',
  styleUrl: './landing-nav-links.component.css',
})
export class LandingNavLinksComponent {
  isVisible: boolean = false;

  onToggleTooltip(): void {
    this.isVisible = !this.isVisible;
  }
}

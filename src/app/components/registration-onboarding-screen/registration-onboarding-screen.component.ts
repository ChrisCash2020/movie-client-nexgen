import { Component } from '@angular/core';
import { OnboardingScreenItem } from '../../types/onboarding-screen-item';
import { mockOnboardingData } from '../../helpers/onboarding-screen-mock-data';

@Component({
  selector: 'app-registration-onboarding-screen',
  templateUrl: './registration-onboarding-screen.component.html',
  styleUrls: [
    '../../pages/registration/registration.component.css',
    './registration-onboarding-screen.component.css',
  ],
})
export class RegistrationOnboardingScreenComponent {
  // need to create a service worker to get the items
  onboardingScreenItem: OnboardingScreenItem = mockOnboardingData[0];
}

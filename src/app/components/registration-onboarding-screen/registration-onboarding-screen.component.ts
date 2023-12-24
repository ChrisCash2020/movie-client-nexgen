import { Component, Input } from '@angular/core';
import { OnboardingScreenItem } from '../../types/onboarding-screen-item';
import { isEqual } from 'lodash';
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
  @Input() onboardingScreenItem: OnboardingScreenItem | undefined;
  @Input() index: number | undefined;
  imgStyleFix: boolean | undefined;
  ngOnInit() {
    this.imgStyleFix = isEqual(this.index, 0);
  }
}

import { Component, Input } from '@angular/core';
import { OnboardingScreenItem } from '../../types/onboarding-screen-item';
import { isEqual, isNil } from 'lodash';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-registration-onboarding-screen',
  templateUrl: './registration-onboarding-screen.component.html',
  styleUrls: [
    '../../pages/registration/registration.component.css',
    './registration-onboarding-screen.component.css',
  ],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class RegistrationOnboardingScreenComponent {
  // need to create a service worker to get the items
  @Input() onboardingScreenItem: OnboardingScreenItem | undefined;
  @Input() index: number | undefined;
  imgStyleFix: boolean | undefined;
  displayOnboarding: boolean | undefined;
  displayForm: boolean | undefined;
  ngOnInit() {
    this.imgStyleFix = isEqual(this.index, 0);
    this.displayOnboarding = isNil(this.onboardingScreenItem?.form);
    this.displayForm = !isNil(this.onboardingScreenItem?.form);
  }
}

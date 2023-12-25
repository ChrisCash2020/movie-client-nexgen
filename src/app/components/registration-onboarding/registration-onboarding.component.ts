import { Component } from '@angular/core';
import { OnboardingScreenItem } from '../../types/onboarding-screen-item';

export const onboardingScreenItems: OnboardingScreenItem[] = [
  {
    image: 'assets/images/onboarding-welcome.gif',
    title: 'Welcome',
    description:
      'Embark on a cinematic quest to find your ideal match! Connect through the magic of movies.',
  },
  {
    image: 'assets/images/onboarding-camera.gif',
    title: 'Photo Upload',
    description:
      'Authenticity is key. Be genuine, and let your true self shine through your photos.',
  },
  {
    image: 'assets/images/onboarding-communicate.gif',
    title: 'Communicate',
    description:
      'Start chatting instantly! Share your interests, ask questions, and let the conversation flow.',
  },
  {
    image: 'assets/images/onboarding-auth.gif',
    title: 'Authentication',
    description:
      'Your security is our priority, Enjoy peace of mind with our secure, encrypted communication channels.',
  },
  {
    form: true,
  },
];

@Component({
  selector: 'app-registration-onboarding',
  templateUrl: './registration-onboarding.component.html',
  styleUrls: [
    '../../pages/registration/registration.component.css',
    './registration-onboarding.component.css',
  ],
})
export class RegistrationOnboardingComponent {
  onboardingScreenItems: OnboardingScreenItem[] = onboardingScreenItems;

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide =
      previous < 0 ? this.onboardingScreenItems.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.onboardingScreenItems.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }
}

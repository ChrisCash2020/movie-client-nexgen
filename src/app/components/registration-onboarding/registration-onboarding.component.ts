import { Component, HostListener } from '@angular/core';
import { OnboardingScreenItem } from '../../types/onboarding-screen-item';

export const onboardingScreenItems: OnboardingScreenItem[] = [
  {
    image: 'assets/images/onboarding-welcome.gif',
    title: 'Welcome',
    description: 'Embark On A Cinematic Quest To Find Your Ideal Match',
  },
  {
    image: 'assets/images/onboarding-camera.gif',
    title: 'Verification',
    description:
      'Authenticity is key. Be genuine, and let your true self shine through your photos.',
  },
  {
    image: 'assets/images/onboarding-communicate.gif',
    title: 'Communication',
    description:
      'Start chatting instantly! Share your interests, ask questions, and let the conversation flow.',
  },
  {
    image: 'assets/images/onboarding-auth.gif',
    title: 'Protection',
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

  currentSlide: number = 0;
  lastX: number = 0;

  constructor() {}

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide =
      previous < 0 ? this.onboardingScreenItems.length - 1 : previous;
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.onboardingScreenItems.length ? 0 : next;
  }

  isPreviousClickDisabled(): Boolean {
    return this.currentSlide == 0;
  }
  isNextClickDisabled(): Boolean {
    return this.currentSlide == 4;
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) {
      !this.isPreviousClickDisabled() && this.onPreviousClick();
    } else if (event.deltaY < 0) {
      !this.isNextClickDisabled() && this.onNextClick();
    }
  }
}

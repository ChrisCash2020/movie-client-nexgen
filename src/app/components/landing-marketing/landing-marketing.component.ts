import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-marketing',
  templateUrl: './landing-marketing.component.html',
  styleUrl: './landing-marketing.component.css',
})
export class LandingMarketingComponent {
  title = 'Why Choose Us';
  description =
    'Rewrite your love story with us! Explore meaningful connections grounded in shared movie tastes. Join now for a cinematic journey to find your perfect match and lasting happiness!';
  features = [
    {
      title: 'Swipe',
      description:
        'Swipe into a world of shared passions: Our dating app connects hearts through a reel of mutual movie interests.',
      iconUrl: 'assets/images/marketing-swipe.gif',
    },
    {
      title: 'Message',
      description:
        'We make connecting easy with seamless communication, icebreaker messages, and a variety of emojis and GIFs that allow you to express your self.',
      iconUrl: 'assets/images/marketing-message.gif',
    },
    {
      title: 'Profile',
      description:
        "Less is more: Build a user profile that's effortlessly simple yet effectively sparks meaningful connections.",
      iconUrl: 'assets/images/marketing-profile.gif',
    },
    {
      title: 'Security',
      description:
        'Enjoy peace of mind with our secure, encrypted communication channels. Our Authentication feature is designed to create a secure environment for genuine connections.',
      iconUrl: 'assets/images/onboarding-auth.gif',
    },
  ];
}

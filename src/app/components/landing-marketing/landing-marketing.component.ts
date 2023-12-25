import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-marketing',
  templateUrl: './landing-marketing.component.html',
  styleUrl: './landing-marketing.component.css',
})
export class LandingMarketingComponent {
  mainImgUrl = 'assets/images/placeholder-image.png';
  title = 'Why Choose Us';
  description =
    'Rewrite your love story with us! Explore meaningful connections grounded in shared movie tastes. Join now for a cinematic journey to find your perfect match and lasting happiness!';
  features = [
    {
      title: 'Swipe',
      description:
        'Swipe into a world of shared passions: Our dating app connects hearts through a reel of mutual movie interests.',
      iconUrl: 'assets/images/marketing-swipe.png',
    },
    {
      title: 'Cinematic Chats',
      description:
        'Our icebreaker messages and a emojis/GIFs allow you to express your self easliy and seamlessly.',
      iconUrl: 'assets/images/marketing-message.png',
    },
    {
      title: 'Dynamic Modes',
      description:
        "Our app's dual modes effortlessly cater to both the single and relationship stages",
      iconUrl: 'assets/images/marketing-modes.png',
    },
    {
      title: 'Safe & Secure',
      description:
        'Enjoy peace of mind with our secure, encrypted communication channels.',
      iconUrl: 'assets/images/marketing-auth.png',
    },
  ];
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingNavComponent } from './components/landing-nav/landing-nav.component';
import { LandingHeroComponent } from './components/landing-hero/landing-hero.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingMarketingComponent } from './components/landing-marketing/landing-marketing.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationOnboardingComponent } from './components/registration-onboarding/registration-onboarding.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RegistrationOnboardingScreenComponent } from './components/registration-onboarding-screen/registration-onboarding-screen.component';
import { LandingGetstartedLogoComponent } from './components/landing-getstarted-logo/landing-getstarted-logo.component';
import { LandingGetstartedComponent } from './components/landing-getstarted/landing-getstarted.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  GoogleSigninButtonDirective,
} from '@abacritt/angularx-social-login';
import { environment } from '../environments/environment';
import { LandingMarketingLogoComponent } from './components/landing-marketing-logo/landing-marketing-logo.component';
import { LandingNavLinksComponent } from './components/landing-nav-links/landing-nav-links.component';
import { DirectMessagesComponent } from './components/direct-messages/direct-messages.component';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingNavComponent,
    LandingHeroComponent,
    LandingComponent,
    LandingMarketingComponent,
    LandingFooterComponent,
    RegistrationFormComponent,
    LoginComponent,
    LoginFormComponent,
    RegistrationOnboardingComponent,
    RegistrationComponent,
    RegistrationOnboardingScreenComponent,
    LandingGetstartedLogoComponent,
    LandingGetstartedComponent,
    LandingMarketingLogoComponent,
    LandingNavLinksComponent,
    DirectMessagesComponent,
    MessagesComponent,
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientId),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    GoogleSigninButtonDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

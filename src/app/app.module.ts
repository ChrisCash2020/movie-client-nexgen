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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

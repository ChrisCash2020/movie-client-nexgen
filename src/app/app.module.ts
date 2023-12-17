import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingNavComponent } from './components/landing-nav/landing-nav.component';
import { LandingHeroComponent } from './components/landing-hero/landing-hero.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingCommunityComponent } from './components/landing-community/landing-community.component';
import { LandingMarketingComponent } from './components/landing-marketing/landing-marketing.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingNavComponent,
    LandingHeroComponent,
    LandingComponent,
    LandingCommunityComponent,
    LandingMarketingComponent,
    LandingFooterComponent,
    RegisterComponent,
    RegistrationFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

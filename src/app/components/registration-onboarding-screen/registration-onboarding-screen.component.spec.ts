import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOnboardingScreenComponent } from './registration-onboarding-screen.component';

describe('RegistrationOnboardingScreenComponent', () => {
  let component: RegistrationOnboardingScreenComponent;
  let fixture: ComponentFixture<RegistrationOnboardingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationOnboardingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationOnboardingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

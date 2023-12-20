import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOnboardingComponent } from './registration-onboarding.component';

describe('RegistrationOnboardingComponent', () => {
  let component: RegistrationOnboardingComponent;
  let fixture: ComponentFixture<RegistrationOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationOnboardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

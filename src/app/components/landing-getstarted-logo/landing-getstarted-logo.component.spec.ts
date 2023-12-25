import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGetstartedLogoComponent } from './landing-getstarted-logo.component';

describe('LandingGetstartedLogoComponent', () => {
  let component: LandingGetstartedLogoComponent;
  let fixture: ComponentFixture<LandingGetstartedLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingGetstartedLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingGetstartedLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

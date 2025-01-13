import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMarketingLogoComponent } from './landing-marketing-logo.component';

describe('LandingMarketingLogoComponent', () => {
  let component: LandingMarketingLogoComponent;
  let fixture: ComponentFixture<LandingMarketingLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingMarketingLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingMarketingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

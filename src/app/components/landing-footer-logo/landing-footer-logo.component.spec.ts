import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFooterLogoComponent } from './landing-footer-logo.component';

describe('LandingFooterLogoComponent', () => {
  let component: LandingFooterLogoComponent;
  let fixture: ComponentFixture<LandingFooterLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingFooterLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingFooterLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

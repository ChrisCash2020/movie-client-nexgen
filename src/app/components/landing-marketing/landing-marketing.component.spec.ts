import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMarketingComponent } from './landing-marketing.component';

describe('LandingMarketingComponent', () => {
  let component: LandingMarketingComponent;
  let fixture: ComponentFixture<LandingMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingMarketingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCommunityComponent } from './landing-community.component';

describe('LandingCommunityComponent', () => {
  let component: LandingCommunityComponent;
  let fixture: ComponentFixture<LandingCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

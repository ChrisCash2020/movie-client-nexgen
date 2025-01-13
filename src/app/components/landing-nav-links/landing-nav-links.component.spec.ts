import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavLinksComponent } from './landing-nav-links.component';

describe('LandingNavLinksComponent', () => {
  let component: LandingNavLinksComponent;
  let fixture: ComponentFixture<LandingNavLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingNavLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

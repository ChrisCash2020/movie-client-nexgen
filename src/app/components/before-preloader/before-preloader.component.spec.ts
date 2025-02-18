import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforePreloaderComponent } from './before-preloader.component';

describe('BeforePreloaderComponent', () => {
  let component: BeforePreloaderComponent;
  let fixture: ComponentFixture<BeforePreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeforePreloaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforePreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

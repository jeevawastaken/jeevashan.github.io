import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRingPlacementComponent } from './app-ring-placement.component';

describe('AppRingPlacementComponent', () => {
  let component: AppRingPlacementComponent;
  let fixture: ComponentFixture<AppRingPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppRingPlacementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppRingPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

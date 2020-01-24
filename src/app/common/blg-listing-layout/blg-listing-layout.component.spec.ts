import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlgListingLayoutComponent } from './blg-listing-layout.component';

describe('BlgListingLayoutComponent', () => {
  let component: BlgListingLayoutComponent;
  let fixture: ComponentFixture<BlgListingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlgListingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlgListingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

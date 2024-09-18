import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsplashImageSearchComponent } from './unsplash-image-search.component';

describe('UnsplashImageSearchComponent', () => {
  let component: UnsplashImageSearchComponent;
  let fixture: ComponentFixture<UnsplashImageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsplashImageSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsplashImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFrontPageComponent } from './body-front-page.component';

describe('BodyFrontPageComponent', () => {
  let component: BodyFrontPageComponent;
  let fixture: ComponentFixture<BodyFrontPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyFrontPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyFrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

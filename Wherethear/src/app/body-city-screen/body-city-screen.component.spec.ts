import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCityScreenComponent } from './body-city-screen.component';

describe('BodyCityScreenComponent', () => {
  let component: BodyCityScreenComponent;
  let fixture: ComponentFixture<BodyCityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCityScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

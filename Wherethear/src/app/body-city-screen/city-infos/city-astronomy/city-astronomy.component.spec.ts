import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAstronomyComponent } from './city-astronomy.component';

describe('CityAstronomyComponent', () => {
  let component: CityAstronomyComponent;
  let fixture: ComponentFixture<CityAstronomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityAstronomyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAstronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

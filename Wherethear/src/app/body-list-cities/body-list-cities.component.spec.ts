import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyListCitiesComponent } from './body-list-cities.component';

describe('BodyListCitiesComponent', () => {
  let component: BodyListCitiesComponent;
  let fixture: ComponentFixture<BodyListCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyListCitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyListCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

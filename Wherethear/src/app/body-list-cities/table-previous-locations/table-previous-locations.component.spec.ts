import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePreviousLocationsComponent } from './table-previous-locations.component';

describe('TablePreviousLocationsComponent', () => {
  let component: TablePreviousLocationsComponent;
  let fixture: ComponentFixture<TablePreviousLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePreviousLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePreviousLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

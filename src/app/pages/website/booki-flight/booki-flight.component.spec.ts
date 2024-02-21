import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookiFlightComponent } from './booki-flight.component';

describe('BookiFlightComponent', () => {
  let component: BookiFlightComponent;
  let fixture: ComponentFixture<BookiFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookiFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookiFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

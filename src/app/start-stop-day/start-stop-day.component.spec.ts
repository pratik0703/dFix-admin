import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStopDayComponent } from './start-stop-day.component';

describe('StartStopDayComponent', () => {
  let component: StartStopDayComponent;
  let fixture: ComponentFixture<StartStopDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartStopDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartStopDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

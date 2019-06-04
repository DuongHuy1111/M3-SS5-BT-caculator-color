import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorAwesomeComponent } from './calculator-awesome.component';

describe('CalculatorAwesomeComponent', () => {
  let component: CalculatorAwesomeComponent;
  let fixture: ComponentFixture<CalculatorAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

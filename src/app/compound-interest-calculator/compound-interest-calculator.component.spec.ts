import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundInterestCalculatorComponent } from './compound-interest-calculator.component';

describe('CompoundInterestCalculatorComponent', () => {
  let component: CompoundInterestCalculatorComponent;
  let fixture: ComponentFixture<CompoundInterestCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundInterestCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundInterestCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

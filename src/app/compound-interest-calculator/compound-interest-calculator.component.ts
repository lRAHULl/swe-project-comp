import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compound-interest-calculator',
  templateUrl: './compound-interest-calculator.component.html',
  styleUrls: ['./compound-interest-calculator.component.scss']
})
export class CompoundInterestCalculatorComponent implements OnInit {

  public principal: number = 0;
  public rate: number = 0;
  public timesPerYear: number = 0;
  public totalTime: number = 0;
  @Input() compounded: number = 0;
  @Input() simple: number = 0;
  @Input() diff: number = 0;
  calculate() {
    this.simple = this.principal * (1 + ((this.rate / 100) * this.totalTime))
    this.compounded = this.principal * Math.pow((1 + (this.rate / 100) / this.timesPerYear), (this.timesPerYear * this.totalTime));
    this.diff = Math.abs(this.compounded - this.simple)
  }
  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator-awesome',
  templateUrl: './calculator-awesome.component.html',
  styleUrls: ['./calculator-awesome.component.css']
})
export class CalculatorAwesomeComponent implements OnInit {
  output: number;
  first: number;
  second: number;
  operator = '+';

  constructor() {
  }

  onFirstChange(value) {
    this.first = Number(value);
  }

  onSecondChange(value) {
    this.second = Number(value);
  }

  onSelectChange(value) {
    this.operator = value;
  }

  caculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  ngOnInit() {
  }

}



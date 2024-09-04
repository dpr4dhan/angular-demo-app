import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  num1!: number;
  num2!: number;
  result!: number;

  constructor(private calculatorService: CalculatorService) {}

  performAddition() {
    this.result = this.calculatorService.add(this.num1, this.num2);
  }

  performSubtraction() {
    this.result = this.calculatorService.subtract(this.num1, this.num2);
  }

  performMultiplication() {
    this.result = this.calculatorService.multiply(this.num1, this.num2);
  }

  performDivision() {
    this.result = this.calculatorService.divide(this.num1, this.num2);
  }
}

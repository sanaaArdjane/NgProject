import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
value1: number=0;
value2: number=0;
result: number=0;
constructor(
  private readonly myCalculator:CalculatorService 
){}
devide() {
  this.result=this.myCalculator.devide(this.value1,this.value2)
}
multiply() {
  this.result=this.myCalculator.multiply(this.value1,this.value2)
}
sub() {
  this.result=this.myCalculator.sub(this.value1,this.value2);
}
sum() {
  this.result=this.myCalculator.sum(this.value1,this.value2)

}




}

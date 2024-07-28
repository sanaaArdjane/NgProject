import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  devide(value1:number,value2:number) {
    return value1/value2
  }
  multiply(value1:number,value2:number) {
    return value1*value2
  }
  sub(value1:number,value2:number) {
    return value1-value2
  }
  sum(value1:number,value2:number) {
    return +value1+ +value2
  
  }
  
  
}

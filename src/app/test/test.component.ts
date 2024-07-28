import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor,NgIf],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  @Input()
  inputValue:string="best engeneer ever!"
  displayMessage:boolean=false

  msgList:Array<string>=[]

  @Output() childClicked:EventEmitter<void> = new EventEmitter <void>();
  @Output() elementCreated:EventEmitter<string> = new EventEmitter <string>();
  click():void{
    // this.displayMessage=!this.displayMessage
    this.msgList.push(this.inputValue)
    this.childClicked.emit()
    this.elementCreated.emit(this.inputValue)


    
  }

}

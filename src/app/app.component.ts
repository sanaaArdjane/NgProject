import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { ItemListComponent } from "./item-list/item-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, CalculatorComponent, ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
displayLastElement(element: string) {
this.lastElementCreated=element;
}

  title = 'angular';
  count:number=0;
   lastElementCreated:string= "";
  handleChildClicked() {
    this.count++;
    }

}

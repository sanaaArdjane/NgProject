import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [NgFor],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {
  data:number[]=[];
//Creating an observable
myFirstObservable=new Observable(observer=>{
  setTimeout(()=>{observer.next(1)},1000);
  setTimeout(()=>{observer.next(2)},2000);
  setTimeout(()=>{observer.next(3)},3000);
  // setTimeout(()=>{observer.error(new Error("Somthing went wrong,try later!"))},4000);
  setTimeout(()=>{observer.complete()},3000);
  setTimeout(()=>{observer.next(4)},4000);
  setTimeout(()=>{observer.next(5)},5000);
}
)

getAsyncData() {
this.myFirstObservable.subscribe({next:(val:any)=>{
  this.data.push(val);
},
error(err) {
    alert(err.message);
},
complete() {
    alert('this session is completed ')
},

})

}


}



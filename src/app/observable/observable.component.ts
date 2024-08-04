import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [NgFor],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {
  data:number[]=[];
  array1:number[]=[1,2,3,4,5]
  array2:number[]=[6,7,8,9,]
  myPromise=new Promise((resolve,reject)=>{
    resolve([10,20,30,40]);
  })
//Creating an observable
myFirstObservable=of(this.array1,this.array2)
//Creating from operator observable to convert the promise
promiseObservable=from(this.myPromise)
// myFirstObservable=new Observable(observer=>{
//   setTimeout(()=>{observer.next(1)},1000);
//   setTimeout(()=>{observer.next(2)},2000);
//   setTimeout(()=>{observer.next(3)},3000);
//   // setTimeout(()=>{observer.error(new Error("Somthing went wrong,try later!"))},4000);
//   setTimeout(()=>{observer.complete()},3000);
//   setTimeout(()=>{observer.next(4)},4000);
//   setTimeout(()=>{observer.next(5)},5000);
// }
// )

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



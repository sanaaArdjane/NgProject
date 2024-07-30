import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
items:string[]=[]
  constructor() { }
  addItem(item:string):void{
    this.items.push(item);
  }
  removeItem(index:number):void{
    this.items.splice(index,1)
  }
  fetchItem():string[]{
    return this.items
  }}

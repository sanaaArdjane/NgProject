import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
items:string[]=[]
constructor( private dataservice:DataServiceService){
  this.items=this.dataservice.fetchItem()

}
addItems(newItem:string){
  this.dataservice.addItem(newItem)
  this.dataservice.fetchItem()

}
removeItems(index:number){
  this.dataservice.removeItem(index)
  this.dataservice.fetchItem()

}



}

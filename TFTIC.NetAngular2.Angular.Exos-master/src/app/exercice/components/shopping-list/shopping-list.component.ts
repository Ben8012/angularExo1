import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() list! : string[];
  @Output() onClickList : EventEmitter<number>;
  
  constructor() { 
    this.onClickList = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public onClick(index : number):void{
    this.onClickList.emit(index);
  }

}

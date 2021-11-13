import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list2',
  templateUrl: './shopping-list2.component.html',
  styleUrls: ['./shopping-list2.component.scss']
})
export class ShoppingList2Component implements OnInit {

  // Attention, la partie en commentaire est plus propre, mais il nous faudrait utiliser les BehaviorSubject 
  //public list! : Map<string, number>;

  public get list() : Map<string,number>{
    return this._shopService.get();
  }

  constructor(private _shopService : ShoppingService) { }

  ngOnInit(): void {
    //this.list = this._shopService.get();
  }

  public onClick(index : string):void{
    this._shopService.remove(index);
    //this.list = this._shopService.get();
  }
}

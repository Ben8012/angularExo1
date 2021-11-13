import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-main2',
  templateUrl: './shopping-main2.component.html',
  styleUrls: ['./shopping-main2.component.scss']
})
export class ShoppingMain2Component implements OnInit {

  public newArticle : string = "";
  public newQuantity : number = 1;

  constructor(private _shopService : ShoppingService) { }

  ngOnInit(): void {
  }

  public onClick(){
    try{
      this._shopService.add(this.newArticle, this.newQuantity);
    }
    catch(e)
    {
      alert("Veuillez recommencer...");
    }
    this.newArticle = "";
    this.newQuantity = 1;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private _list : Map<string,number> = new Map();

  constructor() { 
    this._list.set("Tomates",3);
  }

  public get():Map<string,number>{
    let newInstance = new Map<string,number>();
    for (const [key,value] of this._list) {
      newInstance.set(key,value);
    }
    return newInstance;
  }

  public add(article:string, quantity :number =1){
    if(quantity <= 0 ) throw new Error("Quantity must be always positive");
    if(article.length <= 0) throw new Error("Article must have a carater");
    if(this._list.has(article)) {
      let oldQuantity :number = this._list.get(article) ?? 0
      if(oldQuantity > 0) this._list.set(article, oldQuantity + quantity);
    }
    else{
      this._list.set(article, quantity)
    }
  }

  public remove(article:string, quantity : number = 1){
    if(quantity <= 0 ) throw new Error("Quantity must be always positive");
    if(article.length <= 0) throw new Error("Article must have a carater");
    if(!this._list.has(article)) throw new Error("Article not found...");
    let oldQuantity : number = this._list.get(article) ?? 0;
    if ( oldQuantity < quantity) throw new Error("Article don't have enough quantity");
    if ( oldQuantity === quantity) this.delete(article);
    else this._list.set(article, oldQuantity - quantity);
  }

  public delete(article : string){
    if(article.length <= 0) throw new Error("Article must have a carater");
    if(!this._list.has(article)) throw new Error("Article not found...");
    this._list.delete(article);
  }
}

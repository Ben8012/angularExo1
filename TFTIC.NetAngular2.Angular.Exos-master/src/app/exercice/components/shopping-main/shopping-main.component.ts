import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-main',
  templateUrl: './shopping-main.component.html',
  styleUrls: ['./shopping-main.component.scss']
})
export class ShoppingMainComponent implements OnInit {

  public list : string[] = [];
  public newArticle : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(): void{
    if(this.newArticle === "" || this.list.includes(this.newArticle)){
      this.newArticle = "";
      return;
    } 
    this.list.push(this.newArticle);
    this.newArticle = "";
  }

  public onClickList(event : number):void{
    this.list.splice(event,1);
  }

}

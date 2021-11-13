import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.scss']
})
export class DemoBindingComponent implements OnInit,OnDestroy {

  public message : string = "Bienvenu dans la démo binding."
  private timer : any;

  public user_firstname : string = "Jhon";
  public nb1 : number = 0;
  public nb2 : number = 0;

  public isActivated: boolean = true;

  constructor() { }
  ngOnDestroy(): void {
    console.log('Bye bye');
    clearTimeout(this.timer);
  }

  ngOnInit(): void {
    this.timer = setTimeout(()=>this.message='Vous êtes encore là?',3000)
  }

  public getTotal():number{
    return this.nb1+this.nb2;
  }

  public alertUser():void{
    alert(`Attention ${this.user_firstname}!`)
    this.switchActivated();
  }

  public switchActivated(){
    this.isActivated=!this.isActivated;
  }

  public changeMessage(new_text:string):void{
    this.message=new_text;
  }
}

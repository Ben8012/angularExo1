import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-main',
  templateUrl: './input-output-main.component.html',
  styleUrls: ['./input-output-main.component.scss']
})
export class InputOutputMainComponent implements OnInit {

  public listToDo : string[] = [];
  public listDone : string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listToDo.push("Nourrir le chien.")
    this.listToDo.push("Nourrir les enfants.")
    this.listToDo.push("Nourrir le poisson.")
    this.listToDo.push("Nourrir la femme.")
  }

  public onClickedListItem(event : any){
    let deletedItem = this.listToDo.splice(event,1)[0];
    this.listDone.push(deletedItem);
  }
}

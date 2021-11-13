import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-direct-compo',
  templateUrl: './demo-direct-compo.component.html',
  styleUrls: ['./demo-direct-compo.component.scss']
})
export class DemoDirectCompoComponent implements OnInit {

  public size : number = 12;
  public isChecked : boolean = true;
  public isDeleted : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

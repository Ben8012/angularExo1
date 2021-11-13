import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-direct-struct',
  templateUrl: './demo-direct-struct.component.html',
  styleUrls: ['./demo-direct-struct.component.scss']
})
export class DemoDirectStructComponent implements OnInit {

  public isDeleted : boolean = false;
  public mealChoice : string = "";

  public students : string[]=[
    "Benjamin",
    "Yélingnan Aubin Fiacre",
    "Alexandre",
    "Samad Salaoudinovitch",
    "Yohan",
    "Yves"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

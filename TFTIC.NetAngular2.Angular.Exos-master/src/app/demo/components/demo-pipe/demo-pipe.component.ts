import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent implements OnInit {

  public get currentDate(): Date{ return new Date();}

  public user : any = {firstname:'Samuel', lastname:'Legrain'};

  constructor() { }

  ngOnInit(): void {
  }

}

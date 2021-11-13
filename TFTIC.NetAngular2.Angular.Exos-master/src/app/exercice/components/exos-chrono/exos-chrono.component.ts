import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exos-chrono',
  templateUrl: './exos-chrono.component.html',
  styleUrls: ['./exos-chrono.component.scss']
})
export class ExosChronoComponent implements OnInit {


  public chrono: number = 0;

  public interval : any;

  constructor() { }

  ngOnInit(): void {
  }

  public startChrono(){
    this.interval = setInterval(()=>this.chrono++, 1000);
  }

  public pauseChrono(){
    clearInterval(this.interval);
    this.interval = null;
  }

  public resetChrono(){
    this.chrono = 0;
    this.pauseChrono();
  }

}

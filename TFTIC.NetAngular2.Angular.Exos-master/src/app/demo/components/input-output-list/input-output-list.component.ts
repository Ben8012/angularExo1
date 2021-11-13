import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-list',
  templateUrl: './input-output-list.component.html',
  styleUrls: ['./input-output-list.component.scss']
})
export class InputOutputListComponent implements OnInit {

  @Input() list! : string[];
  @Output() onClickedListItem :EventEmitter<number>;

  constructor() {
    this.onClickedListItem = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  public onClick(index:number){
    this.onClickedListItem.emit(index);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  @Input() form! : FormGroup;
  @Input() prefix? : string;

  constructor() { }

  ngOnInit(): void {
  }

}

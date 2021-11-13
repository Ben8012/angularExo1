import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-person-form',
  templateUrl: './demo-person-form.component.html',
  styleUrls: ['./demo-person-form.component.scss']
})
export class DemoPersonFormComponent implements OnInit {

  @Input() form! : FormGroup;
  @Input() prefix? : string;

  constructor() { }

  ngOnInit(): void {
  }

}

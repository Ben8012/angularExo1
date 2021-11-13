import { Component, OnInit } from '@angular/core';
import { WelcomeUserService } from 'src/app/services/welcome-user.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.scss']
})
export class DemoServiceComponent implements OnInit {

  public username? : string;

  constructor(private _usernameService : WelcomeUserService) { }

  ngOnInit(): void {
    this.username = this._usernameService.getUsername();
  }

}

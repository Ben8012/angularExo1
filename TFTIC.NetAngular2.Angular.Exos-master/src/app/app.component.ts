import { Component } from '@angular/core';
import { WelcomeUserService } from './services/welcome-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';

  public userName? : string;

  constructor(private _usernameService : WelcomeUserService){

  }

  public saveUserName(username:string){
    if(username.length>0) {
      this._usernameService.setUsername(username);
      this.userName = this._usernameService.getUsername();
    }
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeUserService {

  private _username? : string;
  constructor() { }

  public setUsername(newUsername : string):void{
    this._username = newUsername;
  }

  public cleanUsername():void{
    this._username = undefined;
  }

  public getUsername():string | undefined{
    return this._username;
  }
}

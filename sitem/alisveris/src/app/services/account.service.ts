import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})

export class AccountService{
  constructor(){ }
  loggedIn=false;
  login(user:User):boolean
  {
    if(user.userName=="mansur" && user.password=="1")
    {
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.userName);
      return true;
    }
    return false;
  }
  isLoggedIn(){
    return this.loggedIn;
  }
  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}

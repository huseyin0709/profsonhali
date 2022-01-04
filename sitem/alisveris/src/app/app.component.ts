import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private accountService:AccountService,private router:Router) {}

  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logout();
    this.router.navigate(["products"]);
  }
}

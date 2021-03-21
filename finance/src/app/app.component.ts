import { Component,  OnInit, DoCheck } from '@angular/core';
import {  Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'finance';
  token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){  }

  ngOnInit(){
    this.token = this._userService.getToken();    
  }

  ngDoCheck(){
    this.token = this._userService.getToken();
  }

  logout(){
    localStorage.clear();
    this.token = null;
    this._router.navigateByUrl('login');

  }  
}

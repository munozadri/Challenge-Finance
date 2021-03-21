import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { Router } from '@angular/router';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  
  user: User={
    first_name: '',
    last_name:'',
    email:'',
    password:''
  };

  constructor(private _UserService: UserService, private _route: Router) { }

  ngOnInit(): void {
  }

  add(){
    this._UserService.addUser(this.user).subscribe();
    this._route.navigate(['/login']);
      
    
  }
}

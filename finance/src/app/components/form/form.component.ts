import { Component, OnInit } from '@angular/core';
import { Operation, UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [UserService]
})
export class FormComponent implements OnInit {
 
  operation: Operation={
    concept: '',
    price: 0,
    date: new Date(),
    type: '',
    categories: ''
  };

  constructor(private _UserService: UserService, private _route: Router) { }

  ngOnInit(): void {
  }

  add(){
    this._UserService.addOperation(this.operation).subscribe();
    this._route.navigate(['/listado']);
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService, Operation } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  providers: [UserService]
})
export class ExpensesComponent implements OnInit {
  listar: Operation[];

  constructor(private _UserService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.listarGastosOperativos();
  }

  listarGastosOperativos(){
    this._UserService.getExpenses().subscribe(
      res=>{
        console.log(res)
        this.listar=<any>res;
      },
      err => console.log(err)
    );
  }

}

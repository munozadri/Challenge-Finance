import { Component, OnInit } from '@angular/core';
import { UserService, Operation } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css'],
  providers: [UserService]
})
export class InvestmentComponent implements OnInit {
  listar: Operation[];

  constructor(private _UserService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.listarInversion();
  }

  listarInversion(){
    this._UserService.getInvestment().subscribe(
      res=>{
        console.log(res)
        this.listar=<any>res;
      },
      err => console.log(err)
    );
  }

}

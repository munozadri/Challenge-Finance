import { Component, OnInit } from '@angular/core';
import { UserService, Operation } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
  providers: [UserService]
})
export class FunComponent implements OnInit {
  listar: Operation[];

  constructor(private _UserService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.listarRecreacion();
  }

  listarRecreacion(){
    this._UserService.getFun().subscribe(
      res=>{
        console.log(res)
        this.listar=<any>res;
      },
      err => console.log(err)
    );
  }

}

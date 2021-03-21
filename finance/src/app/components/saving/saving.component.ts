import { Component, OnInit } from '@angular/core';
import { UserService, Operation } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css'],
  providers: [UserService]
})
export class SavingComponent implements OnInit {
  listar: Operation[];

  constructor(private _UserService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.listarAhorro();
  }

  listarAhorro(){
    this._UserService.getSaving().subscribe(
      res=>{
        console.log(res)
        this.listar=<any>res;
      },
      err => console.log(err)
    );
  }

}

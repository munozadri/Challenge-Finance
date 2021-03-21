import { Component, OnInit } from '@angular/core';
import { UserService, Operation } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
  listar: Operation[];
  ingreso;
  egreso;
  resultado;
  

  constructor(private _UserService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.listarDiezOperaciones();
    this.obtenerEgreso();
    this.obtenerIngreso();
    this.resultadoBalance();
  }

  listarDiezOperaciones(){
    this._UserService.getTenOperations().subscribe(
      res=>{
        console.log(res)
        this.listar=<any>res;
      },
      err => console.log(err)
    );
  }

  obtenerIngreso(){
    this._UserService.getEntry().subscribe(
      res =>{
        let b = res[0].Ingreso + "";
        let d = parseInt(b);             		
        this.ingreso = d;
      },
      err =>{
        console.log(err);
      }  
    );
  }

  obtenerEgreso(){
    this._UserService.getExit().subscribe(
      res =>{
      console.log(res)
      let b = res[0].Egreso + "";
      let d = parseInt(b);		
      this.egreso = d;
      },
      err =>{
        console.log(err);
      }  
    );
  }

  resultadoBalance(){
    this.resultado = (this.ingreso - this.egreso);
    console.log(this.resultado);
    return this.resultado;
   
  }

}

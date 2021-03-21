import { Component, OnInit } from '@angular/core';
import { UserService, Operation } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService]
})
export class ListComponent implements OnInit {
  config:any;
  listar: Operation[];

  constructor(private _UserService: UserService, private _router: Router) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
    };
  }
   

  ngOnInit(): void {
    this.listarOperaciones();
  }

  listarOperaciones(){
    this._UserService.getOperations().subscribe(
      res=>{
        console.log(res)
        this.listar=<any>res;
      },
      err => console.log(err)
    );
  }

  delete(id:string){
    this._UserService.deleteOperation(id).subscribe(
      res=>{
        console.log('Operación Eliminada');
        this._router.navigate(['/listado']);                
      },
      err => console.log(err)
    );
  }

  edit(id){
    this._router.navigate(['/editar/'+id]);

  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}

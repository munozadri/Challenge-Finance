import { Component, OnInit } from '@angular/core';
import { Operation, UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService]
})
export class EditComponent implements OnInit {

  operation: Operation={
    concept: '',
    price: 0,
    date: new Date(),
    type: '',
    categories: ''
  };

  constructor(
    private _UserService: UserService, 
    private _route: Router,
    private _activeRoute: ActivatedRoute) { }


  ngOnInit(): void {
    const id_entry = <string>this._activeRoute.snapshot.params.id;
    console.log('id entrada'+id_entry);
    
    if(id_entry){
      this._UserService.getOperation(id_entry).subscribe(
        res =>{
          this.operation = res[0];
          console.log(res[0]);
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

  edit(){
    this._UserService.editOperation(this.operation.id, this.operation).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
    this._route.navigate(['/listado']);

  }

}

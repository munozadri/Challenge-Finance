import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public identity;
  public token;
  

  user: User={
    first_name: '',
    last_name: '',
    email:'',
    password:''
  };

  constructor(private _UserService: UserService, private _route: Router) { }

  ngOnInit(): void {
    console.log("componente cargado");
  }

  login(){
    this._UserService.loginUser(this.user).subscribe(
      res => {
        this.identity = this.user.email;
                
        console.log(this.identity);

        if(!this.identity ){
          console.log('Error');              
          
        }else{
          this._route.navigate(['/listado']);               
          //Persistir datos del usuario
          localStorage.setItem('identity', JSON.stringify(this.identity));

          //conseguir TOKEN
          this.gettoken();
        }
      },
      err =>{
        console.log("error");
      }

      
    );   
    this._route.navigate(['/listado']);  
    
  }

  gettoken(){
    this._UserService.loginUser(this.user, 'true').subscribe(
        response => {
            this.token = response.token;
            console.log(this.token);

            if(this.token.length <= 0){
                console.log('error');
            }else{
                console.log('success');
                //Persistir TOKEN del usuario
                localStorage.setItem('token', this.token);
                
            }               
        },
        error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
                
            if(errorMessage != null){
                console.log(error);
            }
        }
    );

}

}

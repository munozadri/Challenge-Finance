import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import  { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{
    public url: string;
    public identity;
    public token;   

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }
    //signup
    addUser(user: User): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'/signup', params, {headers: headers});
    }   
    //login
    loginUser(user, getToken = null): Observable<any>{
        if(getToken != null){
            user.getToken = getToken;
        }
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'/login', params, {headers: headers});        
    }        
    //identity
    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity !=  'undefined' ){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }
    //token
    getToken(){
        let token = localStorage.getItem('token');

        if(token != 'undefined'){
            this.token = token;
        }else{
            this.token = null;
        }

        return this.token;
    }    
    //get operations
    getOperations(){
        return this._http.get(this.url+'list');
    }
    //get operation
    getOperation(id:string){
        return this._http.get(this.url+'/list'+id);
    }
    //getTenOperations
    getTenOperations(){
        return this._http.get(this.url+'operations');
    }
    //record data
    addOperation(operation: Operation): Observable<any>{
        let params = JSON.stringify(operation);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'register-list', params, {headers: headers});
    }    
    //edit data
    editOperation(id:number, operation: Operation): Observable<any>{
        let params = JSON.stringify(operation);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'/'+id, params, {headers: headers});
    }    
    //delete data
    deleteOperation(id:string): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'/'+id, {headers: headers});
    }
    //categories
    //expenses
    getExpenses(){
        return this._http.get(this.url+'expenses');
    }
    //fun
    getFun(){
        return this._http.get(this.url+'fun');
    }
    //investment
    getInvestment(){
        return this._http.get(this.url+'investment');
    }
    //saving
    getSaving(){
        return this._http.get(this.url+'saving');
    }    
    //Balance
    //Entry
    getEntry(){                
        return this._http.get(this.url+'entry');
    }
     //Exit
     getExit(){ 
        return this._http.get(this.url+'exit');
    }
}

export interface Operation{
    id?:number;
    concept?: string;
    price?: number;
    date?: Date;
    type?:string;
    categories?:string;
}

export interface User{
    id?: number;
    first_name?: string;
    last_name?:string;
    email?:string;
    password?:string;
}
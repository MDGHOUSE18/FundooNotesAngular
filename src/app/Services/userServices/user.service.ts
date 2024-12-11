import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token : any;
  constructor( private httpServices:HttpService) { }

  
  register(reqDate:any){
    // console.log('Request Data:', reqDate);
    let header ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpServices.postService('https://localhost:7054/api/Users/register',reqDate,false,header)
  }
  login(reqDate:any){
    // console.log('Request Data:', reqDate);
    let header ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpServices.postService('https://localhost:7054/api/Users/login',reqDate,false,header)
  }

  forgotPassword(reqDate:any){
    let header ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpServices.postService('https://localhost:7054/api/Users/forgotPassword',reqDate,false,header)
  }

}

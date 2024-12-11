import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient : HttpClient) { }

  postService(url:string,reqDate:any,token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(url,reqDate,token && httpOptions)
  }
}

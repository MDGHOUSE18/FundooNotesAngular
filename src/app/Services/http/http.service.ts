import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient : HttpClient) { }

  postService(url:string,reqDate:any,token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(url,reqDate,token && httpOptions)
  }

  // getService(url: string,headers:any){
  //   return this.httpClient.get(url,headers);
  // }
  getService(url: string, options?: any): Observable<any> {
    return this.httpClient.get(url, options);
  }
  addNoteService(url: string, noteData: any,headers:any){
    return this.httpClient.post(url,noteData,headers);
  }
  deleteNoteService(url: string, headers:any){
    return this.httpClient.delete(url,headers);
  }
  patchNoteService(url: string,data:string,headers:any){
    return this.httpClient.patch(url,data,headers);
  }
  updateService(url: string,data:string,headers:any){
    return this.httpClient.put(url,data,headers);
  }
}

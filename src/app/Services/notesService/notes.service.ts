import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService:HttpService) { }

  authHeaders(){
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Authorization token is missing.');
      return null;
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
  }

  getAllNotes() {

    return this.httpService.getService('https://localhost:7054/api/Notes', {headers: this.authHeaders()});
  }
  addNotes(notesData:any){
    return this.httpService.addNoteService('https://localhost:7054/api/Notes',notesData,{headers: this.authHeaders()});
  }
  deleteNotes(notesId:number){
    return this.httpService.deleteNoteService(`https://localhost:7054/api/Notes/${notesId}`,{headers: this.authHeaders()});
  }
  archiveNotes(notesId:number){
    return this.httpService.patchNoteService(`https://localhost:7054/api/Notes/${notesId}/toggleArchive`,"",{headers: this.authHeaders()});
  }
  trashNotes(notesId:number){
    return this.httpService.patchNoteService(`https://localhost:7054/api/Notes/${notesId}/toggleTrash`,"",{headers: this.authHeaders()});
  }
  pinNote(notesId:number){
    return this.httpService.patchNoteService(`https://localhost:7054/api/Notes/${notesId}/togglePin`,"",{headers: this.authHeaders()});
  }
  paintNote(colordata:any){
    return this.httpService.patchNoteService(`https://localhost:7054/api/Notes/colour`,colordata,{headers: this.authHeaders()});
  }
}

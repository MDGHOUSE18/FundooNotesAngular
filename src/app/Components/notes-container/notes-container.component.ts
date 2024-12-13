import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit{
  noteArr:any;
  constructor(private notes:NotesService){}
  
  ngOnInit(){
    this.getnote();
  }
  getnote(){
    this.notes.getAllNotes()?.subscribe(
      (response: any) => {
        // console.log('Response:', response);
        this.noteArr=response.data;
      },
      (error: any) => {
        console.error('Error fetching notes:', error);
      }
    );
  }
 
}

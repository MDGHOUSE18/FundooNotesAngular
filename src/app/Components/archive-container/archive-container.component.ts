import { Component } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent {
  notesData:any;
    constructor(private notes:NotesService){}
    
    ngOnInit(){
      this.getnote();
    }
    getnote(){
      this.notes.getAllNotes()?.subscribe(
        (response: any) => {
          // console.log('Response:', response);
          // this.noteArr=response.data;
          this.notesData = response.data.filter(
            (note: any) => note.isArchive && !note.isTrash
          );
        },
        (error: any) => {
          console.error('Error fetching notes:', error);
        }
      );
    }
}

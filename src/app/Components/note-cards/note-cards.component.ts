import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notesService/notes.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.scss']
})
export class NoteCardsComponent {
  @Input() noteCardData: any;

  constructor(
    private notes:NotesService,
    private dialog:MatDialog
  ){}


  editNotesDialogBox(notes:any){
    // console.log(notes);
    const dialogbox = this.dialog.open(UpdateNoteComponent,{
      width:'40%',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe((updatedNote) => {
      if (updatedNote) {
        console.log('Updated note received:', updatedNote);
        // Update your notes array or send data to the server
      }
    });
  }

  onPin(){
    const notesId = this.noteCardData.notesId;

    this.notes.pinNote(notesId).subscribe(
      (response : any) => {
        console.log(response.message)
      },
      (error) =>{
        console.error("Something went wrong while pin notes: ", error);
      }
    )

  }

}

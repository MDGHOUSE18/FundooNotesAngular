import { Component, Input } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.scss']
})
export class NoteCardsComponent {
  @Input() noteCardData: any;

  constructor(private notes:NotesService){}

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

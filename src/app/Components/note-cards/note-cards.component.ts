import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notesService/notes.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.scss'],
})
export class NoteCardsComponent {
  @Input() noteCardData: any;
  @Output() updateData = new EventEmitter();
  constructor(private notes: NotesService, private dialog: MatDialog) {}

  editNotesDialogBox(notes: any) {
    // console.log(notes);
    const dialogbox = this.dialog.open(UpdateNoteComponent, {
      width: '40%',
      height: 'auto',
      data: notes,
    });
    dialogbox.afterClosed().subscribe((updatedNote) => {
      if (updatedNote) {
        console.log('Updated note received:', updatedNote);
       // Emit the updated note to the parent
       this.updateData.emit({
        data: updatedNote,
        action: 'update',
      });
      }
    });
  }

  onPin() {
    const notesId = this.noteCardData.notesId;

    this.notes.pinNote(notesId).subscribe(
      (response: any) => {
        console.log(response.message);
      },
      (error) => {
        console.error('Something went wrong while pin notes: ', error);
      }
    );
  }

  refreshNotes($event:any){
    this.updateData.emit($event);
  }
}

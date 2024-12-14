import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent {
  notes: any;
  title:any;
  id:any;
  description:any;
  color:any;

  constructor(
    private notesService:NotesService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialize the note with the passed data
    // this.notes = { ...data };
    this.title = data.title,
    this.description = data.description,
    this.id=data.notesId,
    this.color=data.colour
  }

  ngOnInit(){

  }

  
  onPin(){
    const notesId = this.notes.notesId;

    this.notesService.pinNote(notesId).subscribe(
      (response : any) => {
        console.log(response.message)
      },
      (error:any) =>{
        console.error("Something went wrong while pin notes: ", error);
      }
    )

  }
  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  close(): void {
    let reqDate={
      title:this.title,
      description:this.description,
      color:this.color
    }
    this.notesService.updateNotes(this.id,reqDate).subscribe(
      (response:any) => {
        console.log(response.message)
      },
      (error) =>{
        console.error('Something went wrong for updating notes ',error)
      }
    )
    this.dialogRef.close();
  }
  
}

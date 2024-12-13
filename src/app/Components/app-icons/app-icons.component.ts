import { Component, Input } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-app-icons',
  templateUrl: './app-icons.component.html',
  styleUrls: ['./app-icons.component.scss']
})
export class AppIconsComponent {
  constructor(private notesService: NotesService) { }

  @Input() notes: any;
  onArchive(){
    const notesId = this.notes.notesId;
    // console.log(notesId)
    this.notesService.archiveNotes(notesId).subscribe(
      (response:any) => {
        console.log("response : ",response);
      },
      (error:any) => {
        console.error("Something went wrong while archieve notes: ", error);
      }
    )
  }
  onDelete(){
    const notesId = this.notes.notesId;
    const noteName = this.notes.title;
    // console.log(notesId)
    // Show confirmation dialog
    // const isConfirmed = window.confirm(`Are you sure you want to delete this note "${noteName}"?`);

    // If user confirms, delete the note
    // if (isConfirmed) {
    //   this.notesService.trashNotes(notesId).subscribe(
    //     (response: any) => {
    //       console.log("response : ", response);
    //     },
    //     (error: any) => {
    //       console.error("Something went wrong while trashing notes: ", error);
    //     }
    //   );
    // } else {
    //   console.log('Note deletion cancelled');
    // }
    this.notesService.trashNotes(notesId).subscribe(
      (response: any) => {
        console.log("response : ", response);
      },
      (error: any) => {
        console.error("Something went wrong while trashing notes: ", error);
      }
    );
  }
}

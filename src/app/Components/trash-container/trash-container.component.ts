import { Component } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss'],
})
export class TrashContainerComponent {
  notesData: any;
  constructor(private notes: NotesService) {}

  ngOnInit() {
    this.getnote();
  }
  getnote() {
    this.notes.getAllNotes()?.subscribe(
      (response: any) => {
        // console.log('Response:', response);
        // this.noteArr=response.data;
        this.notesData = response.data.filter(
          (note: any) => note.isTrash
        );
      },
      (error: any) => {
        console.error('Error fetching notes:', error);
      }
    );
  }
  refreshNotesData($event: { data: any; action: string }) {
    const { data, action } = $event;
    if (action == 'archive'){
      this.notesData = this.notesData.filter(
        (note: any) => note.notesId !== data.notesId
      );
    }else if (action == 'delete'){
      this.notesData = this.notesData.filter(
        (note: any) => note.notesId !== data.notesId
      );
    }
    this.getnote();
  }
}

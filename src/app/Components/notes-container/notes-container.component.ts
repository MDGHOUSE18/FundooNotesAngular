import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  notesData: any;
  constructor(private notes: NotesService) {}

  ngOnInit() {
    this.getnote();
  }
  getnote() {
    this.notes.getAllNotes()?.subscribe(
      (response: any) => {
        // console.log('Response:', response);
        // this.notesData=response.data;
        this.notesData = response.data.filter(
          (note: any) => !note.isArchive && !note.isTrash
        );
      },
      (error: any) => {
        console.error('Error fetching notes:', error);
      }
    );
  }
  refreshNotes() {
    this.getnote(); // Refresh the notes list
  }
  refreshNotesData($event: { data: any; action: string }) {
    const { data, action } = $event;

    if (action == 'add') this.notesData = [data, ...this.notesData];
    else if (action == 'archive' || action == 'trash') {
      // Remove the note from the array by its notesId
      this.notesData = this.notesData.filter(
        (note: any) => note.notesId !== data.notesId
      );
      this.getnote();
    } else if (action === 'color') {
      // Update the note's color in the local state
      // console.log('Before Update:', this.notesData);
    
      this.notesData = [...this.notesData.map((note: any) => {
        if (note.notesId === data.notesId) {
          // console.log(`Updating color for noteId ${note.notesId} to ${data.color}`);
          return { ...note, color: data.color }; // Update the color
        }
        return note;
      })];
      this.getnote();
      // console.log('After Update:', this.notesData);
    } else if (action === 'update') {
      // Update the note with the new data
      this.notesData = this.notesData.map((note: any) => {
        if (note.notesId === data.notesId) {
          return { ...note, ...data }; // Merge the existing note data with the updated data
        }
        return note;
      });
    }
  }
}

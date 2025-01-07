import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  notesData: any;
  filterNotes:any;
  constructor(
    private notes: NotesService,
    private data:DataService
  ) {}

  ngOnInit() {
    this.getnote();

    this.data.incomingData.subscribe(
      (response :any)=>{
        // console.log('search in progress',response)
        this.filterNotes = response;
      }
    )
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
    this.getnote(); 
  }
  refreshNotesData($event: { data: any; action: string }) {
    const { data, action } = $event;
    // console.log('Action:', action);
    // console.log('Data:', data);
    // console.log('Notes before update:', this.notesData);
  
    if (action === 'add') {
      this.notesData = [data, ...this.notesData];
    } else if (action === 'archive' || action === 'trash') {
      this.notesData = this.notesData.filter(
        (note: any) => note.notesId !== data
      );
    } else if (action === 'color') {
      this.notesData = this.notesData.map((note: any) =>
        note.notesId === data.notesId ? { ...note, colour: data.colurCode } : note
      );
    } else if (action === 'update') {
      this.notesData = this.notesData.map((note: any) =>
        note.notesId === data.notesId ? { ...note, ...data } : note
      );
  //     console.log('Before Update:', this.notesData);
  // console.log('Updating Note ID:', data.notesId, 'With Data:', data);

  // this.notesData = this.notesData.map((note: any) =>
  //   note.notesId === data.notesId ? { ...note, ...data } : note
  // );

  // console.log('After Update:', this.notesData);
    }
  
    // console.log('Notes after update:', this.notesData);
  }
  
}

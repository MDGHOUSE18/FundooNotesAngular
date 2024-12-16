import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-app-icons',
  templateUrl: './app-icons.component.html',
  styleUrls: ['./app-icons.component.scss'],
})
export class AppIconsComponent {
  constructor(private notesService: NotesService) {}
  @Output() updateDataNote = new EventEmitter();
  @Input() notes: any;

  // Create the array of colors
  colorsArr: Array<any> = [
    { colorName: 'Default', colorCode: '#FFFFFF' },
    { colorName: 'Coral', colorCode: '#FAAFA8' },
    { colorName: 'Peach', colorCode: '#F39F76' },
    { colorName: 'Sand', colorCode: '#FFF8B8' },
    { colorName: 'Mint', colorCode: '#E2F6D3' },
    { colorName: 'Sage', colorCode: '#B4DDD3' },
    { colorName: 'Fog', colorCode: '#D4E4ED' },
    { colorName: 'Storm', colorCode: '#AECCDC' },
    { colorName: 'Dusk', colorCode: '#D3BFDB' },
    { colorName: 'Blossom', colorCode: '#F6E2DD' },
    { colorName: 'Clay', colorCode: '#E9E3D4' },
    { colorName: 'Chalk', colorCode: '#EFEFF1' },
  ];

  handleIconAction(action: string, color?: string): void {
    switch (action) {
      case 'archive':
        this.onArchive();
        break;
      case 'trash':
        this.onTrash();
        break;
      case 'color':
        if (color) {
          this.selectColour(color);
        }
        break;
      default:
        console.warn(`Action "${action}" is not handled.`);
    }
  }

  // Function to select a color and update the note
  selectColour(color: string): void {
    let reqDate = {
      notesId: this.notes.notesId,
      colurCode: color,
    };

    // Call the service to paint the note
    this.notesService.paintNote(reqDate).subscribe(
      (response: any) => {
        console.log(response.message);
        this.updateDataNote.emit({data:reqDate,action:'color'});
      },
      (error: any) => {
        console.error('Something went wrong while painting note: ', error);
      }
    );
  }

  // Function to archive the note
  onArchive(): void {
    const notesId = this.notes.notesId;

    // Call the service to archive the note
    this.notesService.archiveNotes(notesId).subscribe(
      (response: any) => {
        console.log(response.message);
        this.updateDataNote.emit({ data: notesId, action: 'archive' });
      },
      (error: any) => {
        console.error('Something went wrong while archiving notes: ', error);
      }
    );
  }

  // Function to delete (trash) the note
  onTrash(): void {
    const notesId = this.notes.notesId;
    const noteName = this.notes.title;

    // Call the service to trash the note
    this.notesService.trashNotes(notesId).subscribe(
      (response: any) => {
        console.log(response.message);
        this.updateDataNote.emit({ data: notesId, action: 'trash' });
      },
      (error: any) => {
        console.error('Something went wrong while trashing notes: ', error);
      }
    );
  }
}

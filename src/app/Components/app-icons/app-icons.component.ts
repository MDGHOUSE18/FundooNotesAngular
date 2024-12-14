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
  { colorName: 'Chalk', colorCode: '#EFEFF1' }
];
selectColour(color : string){
  let reqDate ={
    notesId : this.notes.notesId,
    colurCode:color
  }

  this.notesService.paintNote(reqDate).subscribe(
    (response:any) => {
      console.log(response.message);
    },
    (error:any) => {
      console.error("Something went wrong while archieve notes: ", error);
    }
  )
}
  onArchive(){
    const notesId = this.notes.notesId;
    // console.log(notesId)
    this.notesService.archiveNotes(notesId).subscribe(
      (response:any) => {
        console.log(response.messsage);
      },
      (error:any) => {
        console.error("Something went wrong while archieve notes: ", error);
      }
    )
  }
  onTrash(){
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
        console.log(response.messsage);
      },
      (error: any) => {
        console.error("Something went wrong while trashing notes: ", error);
      }
    );
  }
}

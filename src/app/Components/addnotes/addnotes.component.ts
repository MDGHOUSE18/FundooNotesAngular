import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.scss'],
})
export class AddnotesComponent {
  addNotesForm!: FormGroup;
  condition: boolean = false;

  @ViewChild('matCard') matCard!: ElementRef;
  @Output() updateData = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private notes: NotesService) {}

  ngOnInit(): void {
    this.addNotesForm = this.formBuilder.group({
      title: [''],
      description: [''],
    });
  }

  toggleCondition() {
    this.condition = !this.condition;

    // Check if at least one field is filled
  const isAtLeastOneFieldFilled =
  (this.addNotesForm.get('title')?.value || '') !== '' ||
  (this.addNotesForm.get('description')?.value || '') !== '';

    if (isAtLeastOneFieldFilled && !this.condition) {
      const reqData = this.addNotesForm.value;
      // console.log('Note data:', reqData);
      this.notes.addNotes(reqData)?.subscribe(
        (response: any) => {
          console.log('Note created successfully:', response);
          this.updateData.emit({data:reqData,action:'add'}); // Emit event to update notes
        },
        (error) => {
          console.error('Error creating note:', error);
        }
      );
    }
    
    this.ngOnInit() // Reset the form after submission
    
  }

  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}

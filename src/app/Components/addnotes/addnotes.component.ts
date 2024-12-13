import { Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder, private notes: NotesService) {}

  ngOnInit(): void {
    this.addNotesForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  toggleCondition() {
    this.condition = !this.condition;

    if (this.addNotesForm.valid && !this.condition) {
      const reqData = this.addNotesForm.value;

      this.notes.addNotes(reqData)?.subscribe(
        (response: any) => {
          console.log('Note created successfully:', response);
          this.addNotesForm.reset(); // Reset the form after submission
        },
        (error) => {
          console.error('Error creating note:', error);
        }
      );
    }
  }

  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.scss']
})
export class AddnotesComponent {
  condition: boolean = true;
  @ViewChild('matCard') matCard!: ElementRef; // Reference to mat-card
  adjustCardHeight(): void {
    const cardElement = this.matCard.nativeElement as HTMLElement;
    const containerElement = cardElement.querySelector('.container2') as HTMLElement;
    cardElement.style.height = `${containerElement.scrollHeight}px`;
  }
  toggleCondition() {
    this.condition = !this.condition; 
  }
  titleText: string = ''; 
  noteText: string = '';
  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; 
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  
  
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterNote: string):any[] {

    if (filterNote ==='') {
      return value;
    }

    const notes = [];
    for(const note of value){
      if (note.title.toLowerCase().includes(filterNote)) {
        notes.push(note)
      }
    }
    return notes;
  }

}

import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {

notes = this.data.notes;
scaleNotes;

pickedScale = {
  type: "maj",
  name: "C",
  notes: ["C", "D", "E", "F", "G", "A", "B"]
};

changeScale(type:string, name:string) {
 
  this.pickedScale.type = type;
  this.pickedScale.name = name;

  let firsNoteIndex = this.notes.indexOf(name);

  
  
}

  constructor(private data:NotesService) { }


  ngOnInit(): void {
  }

}

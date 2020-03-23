import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

doubleNotes = this.notes.concat(this.notes);

pickedScale = {
  type: "maj",
  name: "C",
  notes: ["C", "D", "E", "F", "G", "A", "B", "C"]
};

colors = {
  default: "",
  picked: "rgb(0, 166, 118)"
}

  constructor() { }
}

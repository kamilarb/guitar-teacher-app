import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

notes = ["A", "A\u266F|\u266DB", "B", "C", "C\u266F|\u266DD", "D", "D\u266F|\u266DE", "E", "F", "F\u266F|\u266DG", "G", "G\u266F|\u266DA"];

notesPl = ["A", "A\u266F|B", "H", "C", "C\u266F|\u266DD", "D", "D\u266F|\u266DE", "E", "F", "F\u266F|\u266DG", "G", "G\u266F|\u266DA"];

doubleNotes = this.notes.concat(this.notes, this.notes);

pickedScale = {
  type: "maj",
  name: "C",
  notes: ["C", "D", "E", "F", "G", "A", "B"]};

colors = {
  default: "",
  picked: "rgb(0, 166, 118)"
}

  constructor() { }
}

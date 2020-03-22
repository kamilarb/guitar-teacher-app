import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {

notes = this.data.notes;

  tunning = {
      1: "E",
      2: "B",
      3: "G",
      4: "D",
      5: "A",
      6: "E"
  };

  strings = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  }

  changeTunning(){

    for (let string in this.tunning) {

      let index = this.data.doubleNotes.indexOf(this.tunning[string]);

      this.strings[string] = this.data.doubleNotes.slice(index+1, index+13);

    }
  }

  standardTunning() {
    this.tunning = {
      1: "E",
      2: "B",
      3: "G",
      4: "D",
      5: "A",
      6: "E"
  };
  }

  constructor(private data:NotesService) {
    }

  ngOnInit(): void {
    this.changeTunning() 
  }

}

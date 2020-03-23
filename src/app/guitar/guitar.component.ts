import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})

 export class GuitarComponent implements OnInit {
  @ViewChildren('box') boxes !: QueryList<'box'>;

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

  changeTunning() {
    for (let string in this.tunning) {
      let index = this.data.doubleNotes.indexOf(this.tunning[string]);
      this.strings[string] = this.data.doubleNotes.slice(index + 1, index + 13);
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

  checkNote(note) {
    // check if note on fret belongs to pickedScale
    if (this.data.pickedScale.notes.indexOf(note) != -1) {
      return true
    } else {
      return false
    }
  }

  pickNote(box) {
    // color selected/clicked boxes/notes on fret

    if (!box.style.backgroundColor) {
      box.style.backgroundColor = this.data.colors.picked;
    } else if (box.style.backgroundColor != this.data.colors.picked) {
      box.style.backgroundColor = this.data.colors.picked;
    } else if (box.style.backgroundColor == this.data.colors.picked) {
      box.style.backgroundColor = "";
    } else {
      box.style.backgroundColor = "";
    }
  }
  clearSelection = function() {
    // removes selection from boxes/notes on fret

   this.boxes.forEach(el => el.nativeElement.style.backgroundColor = "");
  }
  
  constructor(private data: NotesService) {
     
  }

  ngOnInit(): void {
    this.changeTunning()
  }

  ngAfterViewInit() {
  

  }

}


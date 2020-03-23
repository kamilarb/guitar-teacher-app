import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';


@Component({
  selector: 'scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {

  notes = this.data.notes;
  // doubled notes for making new scale
  dnotes = this.data.doubleNotes;

   changeScale() {

    // first note index
    let fni = this.dnotes.indexOf(this.data.pickedScale.name);

    if (this.data.pickedScale.type == "maj") {
      this.data.pickedScale.notes = [this.dnotes[fni], this.dnotes[fni + 2], this.dnotes[fni + 4], this.dnotes[fni + 5], this.dnotes[fni + 7], this.dnotes[fni + 9], this.dnotes[fni + 11], this.dnotes[fni + 12]];
    } else {
      this.data.pickedScale.notes = [this.dnotes[fni], this.dnotes[fni + 2], this.dnotes[fni + 3], this.dnotes[fni + 5], this.dnotes[fni + 7], this.dnotes[fni + 8], this.dnotes[fni + 10], this.dnotes[fni + 12]];
    }
  }

  constructor(public data: NotesService) { }


  ngOnInit(): void {

  }

}

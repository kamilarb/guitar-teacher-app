import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

colors = ["rgb(0, 166, 118)", "rgb(113, 6, 39)", "rgb(234, 196, 53)", "rgb(52, 89, 149)", "rgb(244, 51, 171)"]


  constructor(public data:NotesService) { }

  ngOnInit(): void {
  }

}

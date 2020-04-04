import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

colors = ["rgb(0, 166, 118)", "rgb(234, 196, 53)", "rgb(244, 51, 171)", "rgb(6, 123, 194)", "rgb(239, 65, 67)", "rgb(194, 0, 204)", "rgb(172, 181, 168)", "rgb(113, 6, 39)"]

  constructor(public data:NotesService) { }

  ngOnInit(): void {
  }

}

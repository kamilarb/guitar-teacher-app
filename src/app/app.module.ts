import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { GuitarComponent } from './guitar/guitar.component';
import { ScalesComponent } from './scales/scales.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    GuitarComponent,
    ScalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

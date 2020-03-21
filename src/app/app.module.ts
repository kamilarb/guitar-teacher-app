import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

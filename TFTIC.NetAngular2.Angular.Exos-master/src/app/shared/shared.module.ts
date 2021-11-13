import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../shared/pipes/to-fahrenheit.pipe';
import { ChronoViewPipe } from '../shared/pipes/chrono-view.pipe';
import { RandomColorDirective } from '../shared/directives/random-color.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ChronoViewPipe,
    RandomColorDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ToFahrenheitPipe,
    ChronoViewPipe,
    RandomColorDirective,
    FormsModule
  ]
})
export class SharedModule { }

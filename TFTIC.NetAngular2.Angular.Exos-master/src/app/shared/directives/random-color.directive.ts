import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[RandomColor]'
})
export class RandomColorDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.el.nativeElement.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
  }

}

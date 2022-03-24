import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHuwaizaStyle]'
})
export class HuwaizaStyleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
 }
}

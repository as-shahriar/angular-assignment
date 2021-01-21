import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[.requiredField]'
})

export class RequiredDirective {

  constructor(private el: ElementRef) { 
     el.nativeElement.style.display = "none";
  }
}

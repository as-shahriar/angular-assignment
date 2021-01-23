import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class CustomDirective {

  tooltip: HTMLElement;
  @Input() tooltipTitle;
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = "black";
    this.el.nativeElement.style.transition = "all 0.2s ease-out"; 
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = "#11111175";
  }

  
  constructor(private renderer: Renderer2, private el: ElementRef) {
    
  }

}

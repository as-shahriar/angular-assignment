import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class CustomDirective {

  tooltip: HTMLElement;
  @Input() tooltipTitle;
  @HostListener('mouseenter') onMouseEnter() {
    this.show(); 
  }
  @HostListener('mouseleave') onMouseLeave() {
     this.hide(); 
  }
  
  constructor(private renderer: Renderer2, private el: ElementRef) {
    el.nativeElement
  }

  show(){
    this.tooltip = this.renderer.createElement('span');
    this.tooltip.style.position = "absolute";
    this.tooltip.style.top = "70px";
    this.tooltip.style.right = "50px";



    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );
    this.renderer.appendChild(document.body, this.tooltip);
  }

  hide(){
    this.renderer.removeChild(document.body, this.tooltip);
  }
}

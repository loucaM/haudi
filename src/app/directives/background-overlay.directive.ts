import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appBackgroundOverlay]'
})
export class BackgroundOverlayDirective {

  constructor(private el: ElementRef,  private renderer: Renderer) {
   }

   @HostListener('mouseenter') onMouseEnter() {
    let part = this.el.nativeElement.querySelector('.overlayHome') ;
    this.renderer.setElementStyle(part, 'display', 'block');
   }

   @HostListener('mouseleave') onMouseLeave() {
    let part = this.el.nativeElement.querySelector('.overlayHome') ;
    this.renderer.setElementStyle(part, 'display', 'none'); 
   }


   private overlay (color: string) {
     this.el.nativeElement.style.backgroundColor = color ;
   }
}

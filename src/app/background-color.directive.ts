import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgroundcolor]'
})
export class BackgroundcolorDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("click") upvotes() {
    this.highlight("highlight")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.highlight("highlight")
  }
  private highlight(highlight: string){
    this.elem.nativeElement.style.backgroundColor = 'aquamarine';
  }
}


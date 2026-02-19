import { Directive, ElementRef, HostListener, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  //Trying to create a instance of ElementRef class inside hightligh class
  // ele = new ElementRef
  //But we have to manually maintain this instead of that we can go for dependency injection
  // where angular will take care of that
  constructor(private ele: ElementRef) { //Dependency Injection
    console.log(ele);
  }
  @HostListener('mousecenter')
  onMouseEnter() {
    this.ele.nativeElement.style.color = 'red';
    this.ele.nativeElement.style.backgroundColor = 'yellow';

  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ele.nativeElement.style.color = '';
    this.ele.nativeElement.style.backgroundColor = '';
  }



}

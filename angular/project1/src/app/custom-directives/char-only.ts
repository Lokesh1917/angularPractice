import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]',
})
export class CharOnly {

  @HostBinding('style.background-color')
  myBgcolor: string = ''

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: any) {
    console.log(event);
    let regex = new RegExp(/^[a-z]+$/); //text only
    if (!regex.test(event.target.value)) {
      this.myBgcolor = 'red';
    } else {
      this.myBgcolor = 'green';
    }
  }
}

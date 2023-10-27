import {
  Directive,
  Input,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  //   Closing dropdown on button-click again which earlier opened the dropdown
  //   @HostListener('click', ['$event']) toggleOpen(eventData: Event) {
  //     console.log('EventData: ' + eventData);
  //     this.isOpen = !this.isOpen;
  //   }

  // The feature of closing dropdown from anywhere
  // dropdown can also be closed by a click anywhere outside (which also means that a click on one dropdown closes any other one, btw.),
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}

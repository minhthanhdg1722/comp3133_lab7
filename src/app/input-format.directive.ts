import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private elementRef: ElementRef) { 
    
  }

  @HostListener('focus') onFocus(){
    let value: string = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = value.toLowerCase();
  }

  @HostListener('blur') onBlur(){
    let value: string = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = value.toUpperCase();
  }
}

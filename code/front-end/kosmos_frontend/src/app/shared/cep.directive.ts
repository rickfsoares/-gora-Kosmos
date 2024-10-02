import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCep]',
  standalone: true
})
export class CepDirective  {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: Event){
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 2 && value.length <= 5){
      value = `${value.slice(0,2)}.${value.slice(2)}`
    } else if (value.length > 5){
      value = `${value.slice(0,2)}.${value.slice(2,5)}-${value.slice(5,8)}`
    }

    input.value = value
  }

}

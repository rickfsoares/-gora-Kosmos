import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appCep]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CepDirective)
    }
  ],
  standalone: true
})
export class CepDirective  {

  //private onChange: ()

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any): void {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 8) {
      value = value.substring(0, 8);
    }


    if (value.length > 5) {
      input.value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
    } else {
      input.value = value;
    }
  }

}

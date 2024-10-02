import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appCep]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CepDirective),
      multi: true
    }
  ]
})
export class CepDirective implements ControlValueAccessor {

  constructor(private el: ElementRef) { }

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    if (value) {
      this.el.nativeElement.value = this.applyMask(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = this.el.nativeElement.value;
    const maskedValue = this.applyMask(input);
    this.el.nativeElement.value = maskedValue;
    this.onChange(maskedValue); // Update the model with the masked value
  }

  private applyMask(value: string): string {
    // Remove non-digit characters
    value = value.replace(/\D/g, '');

    // Apply CEP mask
    if (value.length > 2 && value.length <= 5) {
      value = `${value.slice(0, 2)}.${value.slice(2)}`;
    } else if (value.length > 5) {
      value = `${value.slice(0, 2)}.${value.slice(2, 5)}-${value.slice(5, 8)}`;
    }

    return value;
  }
}

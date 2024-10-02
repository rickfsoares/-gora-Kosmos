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

  private unmaskedValue: string = '';

  constructor(private el: ElementRef) { }

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    if (value) {
      this.unmaskedValue = value;
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
    const inputValue = this.el.nativeElement.value;
    this.unmaskedValue = this.removeMask(inputValue); // Store the unmasked value
    const maskedValue = this.applyMask(this.unmaskedValue);
    this.el.nativeElement.value = maskedValue;
    this.onChange(this.unmaskedValue); // Pass the unmasked value to the model
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

  private removeMask(value: string): string {
    // Remove all non-digit characters to get the original value
    return value.replace(/\D/g, '');
  }
}

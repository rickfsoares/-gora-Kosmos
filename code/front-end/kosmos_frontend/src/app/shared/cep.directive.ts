import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCep]',
  standalone: true
})
export class CepDirective  implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.applyMask(this.el.nativeElement.value)
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event){
    const input = this.el.nativeElement
    this.applyMask(input.value)
  }

  private applyMask(value: string){
    const input = this.el.nativeElement;
   value = input.value.replace(/\D/g, '');

    if (value.length > 2 && value.length <= 5){
      value = `${value.slice(0,2)}.${value.slice(2)}`
    } else if (value.length > 5){
      value = `${value.slice(0,2)}.${value.slice(2,5)}-${value.slice(5,8)}`
    }

    input.value = value
  }

}

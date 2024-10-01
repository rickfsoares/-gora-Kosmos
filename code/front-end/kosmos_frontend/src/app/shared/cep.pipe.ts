import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
  standalone: true
})
export class CepPipe implements PipeTransform {
    transform(valorRecebido: string | number): string {
      let value = valorRecebido + '';

    if (!value) return value;

    value = value.replace(/\D/g, '');

    if (value.length > 8) {
      value = value.substring(0, 8);
    }

    if (value.length === 8) {
      return value.replace(/(\d{5})(\d{3})/, '$1-$2');
    }

    return value;
  }
}

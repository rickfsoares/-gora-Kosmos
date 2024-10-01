import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private dadosCadastro: any = {};

  setDados(dados: any) {
    this.dadosCadastro = { ...this.dadosCadastro, ...dados };
  }

  getDados() {
    return this.dadosCadastro;
  }
}

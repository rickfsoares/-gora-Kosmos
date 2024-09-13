import { Injectable } from '@angular/core';
import { Usuario, UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  
  //MOCK
  usuarioMock!: Usuario;
  contaAgora!: ContaEmpresa;
  
  constructor(private usuarioService: UsuarioService) { 
    //MOCK
    this.usuarioService.getUsuarioById(0)
      .then(usuario => {
        this.usuarioMock = usuario
        this.contaAgora = new ContaEmpresa()
        this.contaAgora.adicionarContaUsuario(this.usuarioMock)
      })
      .catch(error => console.error(error))
  }

  transferirParaContaAgoraKosmos(usuario: Usuario, quantia: number): Promise<void>{
    if (this.contaAgora.aplicarEmContaUsuario(usuario, quantia)){
      return Promise.resolve()
    } else {
      console.error("não existe uma conta para o usuário com id: ", usuario.id)
      return Promise.reject()
    }
  }
}

class ContaEmpresa {
  valorTotal: number = 0;
  contasUsuarios: Map<number, ContaUsuario> = new Map()

  adicionarContaUsuario(usuario: Usuario): boolean{
    if (!this.contasUsuarios.has(usuario.id)){
      this.contasUsuarios.set(usuario.id, usuario.conta);
      this.valorTotal += usuario.conta.getSaldo();
      return true;
    } 
    return false;
  }

  aplicarEmContaUsuario(usuario: Usuario, quantia: number): boolean{
    if (this.contasUsuarios.has(usuario.id)){
      this.contasUsuarios.get(usuario.id)!.aplicar(quantia);
      this.valorTotal+=quantia;
      return true;
    } 
    return false;
  }
}

export class ContaUsuario {
  private saldo: number = 0;

  constructor(){
  }

  getSaldo(){
    return this.saldo;
  }

  aplicar(quantia: number){
    this.saldo += quantia;
  }

  retirar(quantia: number){
    if ((this.saldo - quantia) >= 0){
      this.saldo -= quantia;
    }
  }

}

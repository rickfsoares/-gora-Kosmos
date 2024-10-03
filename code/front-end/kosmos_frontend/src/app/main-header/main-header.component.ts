import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent implements OnInit{

  //userInfo: UserInfo;
  userInfo: any;
  saldo: number = 0;
  usuario_logado : boolean = true;

  constructor(private userService: UsuarioService, private router: Router ) {
    //this.userInfo = this.userService.getUserInfo();
    this.getUserInfo();
  }

  ngOnInit(): void {
    //this.userInfo = this.userService.getUserInfo();
    this.getUserInfo();

    this.atualizaInformacoesDoUsuarioPorIntervalo();
  }

  getUserInfo(): void {
    this.userService.getAllUserInfo().subscribe({next: (res) => {
      this.userInfo = res;
      this.setSaldo();
    }});
  }

  setSaldo(): void {
    this.saldo = parseFloat(this.userInfo.saldo);
  }

  logout() {
    this.userService.logout().subscribe( (res)=> {
      localStorage.clear()
      this.usuario_logado = false;
      this.router.navigate(['/login'])
    })
  }

  atualizaInformacoesDoUsuarioPorIntervalo(){
    if (this.usuario_logado){
      const interval = setInterval(() => {
        this.getUserInfo()
        if (!this.usuario_logado){
          clearInterval(interval);
        }
      }, 10000);
    }
  }

}

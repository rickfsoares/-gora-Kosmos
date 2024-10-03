import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { UserInfo } from '../models/user-info';
import { UserLogado } from '../models/user-logado';

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

  constructor(private userService: UsuarioService) {
    //this.userInfo = this.userService.getUserInfo();
    this.getUserInfo();
  }

  ngOnInit(): void {
    //this.userInfo = this.userService.getUserInfo();
    this.getUserInfo();


    setInterval(() => { this.getUserInfo() }, 10000);

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


}

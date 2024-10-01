import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { UserInfo } from '../models/user-info';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent implements OnInit{

  userInfo: UserInfo;
  saldo: number;

  constructor(private userService: UsuarioService) {
    this.userInfo = this.userService.getUserInfo();
    this.saldo = parseFloat(this.userInfo.saldo);
  }

  ngOnInit(): void {
      this.userInfo = this.userService.getUserInfo();
      this.saldo = parseFloat(this.userInfo.saldo);
      console.log(this.userInfo.saldo);
  }

}

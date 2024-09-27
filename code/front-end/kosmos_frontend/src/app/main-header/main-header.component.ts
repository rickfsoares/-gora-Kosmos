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
export class MainHeaderComponent {

  userInfo: UserInfo;
  constructor(private userService: UsuarioService) {
    this.userInfo = userService.getUserInfo();
  }

}

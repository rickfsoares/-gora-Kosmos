import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {

  show: boolean = false;

  constructor(private userService: UsuarioService) {}

  showChat() {
    if(!this.show) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}

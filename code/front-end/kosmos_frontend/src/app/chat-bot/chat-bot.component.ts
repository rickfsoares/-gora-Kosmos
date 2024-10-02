import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PremiumDialogComponent } from '../premium-dialog/premium-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [MatDialogModule, CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent implements OnInit {

  show: boolean = false;
  userinfo: any = '';
  statusPremium: boolean = false;
  readonly dialog = inject(MatDialog);
  userMessage: string = '';
  messages: { sender: 'user' | 'bot', text: string }[] = [];

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.setStatusPremium();
  }

  showChat(): void {
    this.show = !this.show;
  }

  sendMessage(): void {
    if (this.userMessage.trim() === '') {
      return;
    }

    this.messages.push({ sender: 'user', text: this.userMessage });
    this.userService.sendMessageToGemini(this.userMessage).subscribe((res) => {
      this.messages.push({sender: 'bot', text: res.response});
    });

    this.userMessage = '';
  }

  setStatusPremium(): void {
    this.userService.getAllUserInfo().subscribe((data) => {
      this.userinfo = data;
      this.statusPremium = this.userinfo.premium;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PremiumDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.userService.setUserToPremium().subscribe(res => {
          this.statusPremium = true;
        });
        console.log('mandou o dinheiro');
      } else {
        console.log('cancelou');
      }
    })
  }
}

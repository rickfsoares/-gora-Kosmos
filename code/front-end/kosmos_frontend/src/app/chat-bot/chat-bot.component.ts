import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PremiumDialogComponent } from '../premium-dialog/premium-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private userService: UsuarioService, private matSnackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string): void {
    this.matSnackBar.open(message, action, {
      duration: 2800
    });
  }

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
        this.userService.setUserToPremium().subscribe({next: (res) => {
          this.statusPremium = true;
        }, error: (err) => {
            this.openSnackBar(`Erro ao realizar pagamento, Saldo Insuficiente`, "Fechar");
        }});
      } else {
        console.log('cancelou');
      }
    })
  }
}

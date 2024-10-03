import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExclusaoDiologComponent } from '../exclusao-diolog/exclusao-diolog.component';
import { UsuarioService } from '../service/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exclusao-perfil',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './exclusao-perfil.component.html',
  styleUrl: './exclusao-perfil.component.scss'
})

export class ExclusaoPerfilComponent {
  readonly dialog = inject(MatDialog);

  constructor(private userService: UsuarioService, private router: Router, @Inject(MatSnackBar) private matSnack: MatSnackBar) {}

  openSnackBar(message: string, action: string): void {
    this.matSnack.open(message, action, {
      duration: 3000
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ExclusaoDiologComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.userService.excluirConta().subscribe({next: res => {
          console.log(res);
          this.router.navigate(['/login']);
        }, error: (err) => {
          this.openSnackBar(`Erro ao deletar conta. Ainda há ativos em conta`, "Fechar");
        }})
      }
    });
  }
}

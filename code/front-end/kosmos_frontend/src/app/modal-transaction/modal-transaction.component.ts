import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
  MatDialogClose,
  MatDialogActions
} from '@angular/material/dialog';



export interface ModalTransactionData {
  qrCode: string;
  qrCodeBase64: string;
}

@Component({
  selector: 'app-modal-transaction',
  standalone: true,
  imports: [MatDialogClose, MatDialogContent, MatDialogActions],
  templateUrl: './modal-transaction.component.html',
  styleUrl: './modal-transaction.component.scss'
})
export class ModalTransactionComponent {
  constructor(public dialogRef: MatDialogRef<ModalTransactionComponent>, @Inject(MAT_DIALOG_DATA) public data: ModalTransactionData) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

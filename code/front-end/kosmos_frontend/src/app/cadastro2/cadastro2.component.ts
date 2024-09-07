import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro2',
  standalone: true,
  imports: [],
  templateUrl: './cadastro2.component.html',
  styleUrl: './cadastro2.component.scss'
})
export class Cadastro2Component {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/login']);
    alert('Cadastro concluído com sucesso!');
  }

}

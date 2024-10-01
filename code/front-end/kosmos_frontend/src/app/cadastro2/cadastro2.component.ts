import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../service/cadastro.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro2.component.html',
  styleUrl: './cadastro2.component.scss'
})

export class Cadastro2Component implements OnInit {
  endereco: string = '';
  cidade: string = '';
  estadoCivil: string = '';
  profissao: string = '';
  renda: string = '';
  uf: string = '';
  cep: string = '';
  dadosCadastro: any;

  ufs = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
  ];

  constructor(private router: Router, private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.dadosCadastro = this.cadastroService.getDados();
    console.log(this.dadosCadastro);
  }

  onSubmit() {
    const dadosFinal = { ...this.dadosCadastro, endereco: this.endereco, cidade: this.cidade, estadoCivil: this.estadoCivil, profissao: this.profissao, renda: this.renda, uf: this.uf, cep: this.cep };
    console.log(dadosFinal);
    this.router.navigate(['/login']);
    alert('Cadastro concluído com sucesso!');
  }

}

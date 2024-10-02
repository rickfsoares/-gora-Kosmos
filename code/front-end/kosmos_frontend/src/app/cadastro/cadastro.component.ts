import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../service/cadastro.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCadastro } from '../models/user-cadastro';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})

export class CadastroComponent implements OnInit{
  cadastroFormStep1!: FormGroup;
  cadastroFormStep2!: FormGroup;
  mostraCadastro2 = false;

  estadoCivilOpcoes = [
    "solteiro(a)",
    "casado(a)",
    "divorciado(a)",
    "viúvo(a)"
  ]
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

  constructor(private router: Router, private cadastroService: CadastroService,  private fb: FormBuilder, @Inject(MatSnackBar) private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  openSnackBar(message: string, action: string): void {
    this.matSnackBar.open(message, action, {
      duration: 4000
    });
  }

  initializeForms() {
    // Step 1 Form
    this.cadastroFormStep1 = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      nickname: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Step 2 Form
    this.cadastroFormStep2 = this.fb.group({
      endereco: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^\d{8}/)]],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      profissao: ['', Validators.required],
      renda: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmitForm1() {
    if (this.cadastroFormStep1.valid) {
      this.mostraCadastro2 = true;
    } else {
      this.cadastroFormStep1.markAllAsTouched(); // Ensure validation errors are shown
    }
  }

  onSubmit() {
    if (this.cadastroFormStep2.valid) {
      const formData = {
        ...this.cadastroFormStep1.value,
        ...this.cadastroFormStep2.value
      };

      const userCadastro = new UserCadastro(
        formData.email,
        formData.senha,
        formData.nome,
        formData.cpf,
        formData.endereco,
        formData.uf,
        formData.cidade,
        formData.nickname,
        formData.profissao,
        Number(formData.renda),
        formData.estadoCivil,
        formData.celular,
        formData.cep
      );

      this.cadastroService.setDadosOnBack(userCadastro).subscribe(() => {
        this.router.navigate(['/login']);
      }, (error) => {
        const erroMessage = error.error.status.message;
        this.openSnackBar(`Erro ao realizar cadastro: ${erroMessage}`, "Fechar");
      });
    } else {
      this.cadastroFormStep2.markAllAsTouched();
    }
  }

  // Helper method to check form control errors
  hasError(form: FormGroup, controlName: string, errorType: string) {
    const control = form.get(controlName);
    return control?.hasError(errorType) && (control.dirty || control.touched);
  }
}

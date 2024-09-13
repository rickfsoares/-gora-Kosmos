import { Component } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { SideMissionBarComponent } from '../side-mission-bar/side-mission-bar.component';
import { AtivoTabelaComponent } from "../ativo-tabela/ativo-tabela.component";
import { PerfilCrudComponent } from "../perfil-crud/perfil-crud.component";

@Component({
    selector: 'app-perfil-usuario',
    standalone: true,
    templateUrl: './perfil-usuario.component.html',
    styleUrl: './perfil-usuario.component.scss',
    imports: [MainHeaderComponent, SideMissionBarComponent, PerfilCrudComponent]
})
export class PerfilUsuarioComponent {

}

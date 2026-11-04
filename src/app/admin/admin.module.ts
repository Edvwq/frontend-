import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';



@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

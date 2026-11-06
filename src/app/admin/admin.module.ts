import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CardModule } from 'primeng/card';
import { InventarioModule } from './inventario/inventario.module';



@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    CardModule,
    InventarioModule
  ]
})
export class AdminModule { }

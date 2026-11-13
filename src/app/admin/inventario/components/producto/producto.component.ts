import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @ViewChild('dt') dt!: Table;

  products: any = [
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" },
    { id: 1, nombre: "Teclado", precio: 394.96, categoria_id: 5, stock: 12, estado: "COMPLETO" }
  ];
  cols: any[] = [];

  openNew() {
  }

  onGlobalFilter(table: any, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  editProduct(prod: any) {
  }

  deleteProduct(prod: any) {
  }
}

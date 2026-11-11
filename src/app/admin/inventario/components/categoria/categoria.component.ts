import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormGroup, FormControl } from '@angular/forms';

interface Categoria {
  id?: number,
  nombre: string;
  detalle?: string
}
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private categoriaService = inject(CategoriaService)

  categorias: Categoria[] = []
  visible: boolean = false

  get dialog_visible(): boolean {
    return this.visible
  }

  set dialog_visible(value: boolean) {
    this.visible = value
  }

  categoriaForm = new FormGroup({
    nombre: new FormControl(''),
    detalle: new FormControl('')
  })

  ngOnInit(): void {
    this.getCategorias()
  }

  getCategorias(){
    this.categoriaService.funListar().subscribe(
      (res:any)=>{
        this.categorias=res;
      },
      (error:any)=>{
        console.log(error);
      }
    )

  }

  mostrarDialog(){
    this.visible=true
  }

  guardarCategoria(){
    this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
      (res:any)=>{
        this.dialog_visible=false;
        this.getCategorias();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
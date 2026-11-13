import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

interface Categoria {
  id?: number,
  nombre: string;
  detalle: string
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
  categoria_id: number = -1

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
    this.dialog_visible=true
  }

  editarCategoria(cat: Categoria){
    this.dialog_visible = true
    this.categoria_id = cat.id ?? -1
    this.categoriaForm.setValue({
      nombre: cat.nombre,
      detalle: cat.detalle
    })
  }

  eliminarCategoria(cat: Categoria){
    Swal.fire({
      title: "¿Está seguro de eliminar la categoría?",
      text: "Una vez eliminado no se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriaService.funEliminar(cat.id!).subscribe(
          (res:any)=>{
            Swal.fire({
              title: "ELIMINADO!",
              text: "Categoría eliminada.",
              icon: "success"
            })
            this.getCategorias()
            this.categoria_id = -1
          },
          (error:any)=>{
            this.alerta("ERROR!", "Error al intentar eliminar.", "error")
          }
        )
      }
    })
  }

  guardarCategoria(){
    if(this.categoria_id > 0){
      this.categoriaService.funModificar(this.categoria_id, this.categoriaForm.value).subscribe(
        (res:any)=>{
          this.dialog_visible=false;
          this.getCategorias();
          this.categoria_id=-1;
          this.alerta("ACTUALIZADO", "La categoría se modifico con éxito!", "success")
        },
        (error:any)=>{
          this.alerta("AL ACTUALIZAR", "Verifica los datos!", "error")
          console.log(error)
        }
      )
    } else {
      this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
        (res:any)=>{
          this.dialog_visible=false;
          this.getCategorias();
          this.alerta("REGISTRADO", "La categoría se creó con éxito!", "success")
        },
        (error:any)=>{
          this.alerta("AL REGISTRADO", "Verifica los datos!", "error")
          console.log(error)
        }
      )
    }
    this.categoriaForm.reset();
  }

  alerta(title: string, text: string, icon: 'success' | 'error' | 'info' | 'question'){
    Swal.fire({ title, text, icon })
  }
}

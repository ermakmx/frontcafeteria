import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../servicios/categoria.service';
import { NgForm } from "@angular/forms";
import { Categoria } from "../../models/categoria";


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers:[CategoriaService]
})
export class CategoriasComponent implements OnInit {

  constructor( public categoriaService: CategoriaService) { }

  ngOnInit() {
    this.getCategorias();
  }

  addCategoria(form?: NgForm) {
    if (form.value._id) {
      this.categoriaService.putCategoria(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getCategorias();
      });
    } else {
      this.categoriaService.postCategoria(form.value).subscribe((res) => {
        this.getCategorias();
        this.resetForm(form);
      });
    }
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((res) => {
      this.categoriaService.categorias = res;
    });
  }

  editCategoria(categoria: Categoria) {
    this.categoriaService.selectedCategoria = categoria;
  }

  deleteCategoria(_id: string, form: NgForm) {
    if (confirm("Estas seguro de eliminarlo?")) {
      this.categoriaService.deleteCategoria(_id).subscribe((res) => {
        this.getCategorias();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.categoriaService.selectedCategoria = new Categoria();
    }
  }
}
